/**
 * Convert MCP server configuration from various formats to OpenCode format
 * Handles formats from: TestSprite, Chrome DevTools, generic MCP docs, etc.
 */

interface MCPServerConfig {
  command: string | string[];
  args?: string[];
  env?: Record<string, string>;
}

interface OpenCodeMCPConfig {
  type: 'local';
  command: string[];
  environment?: Record<string, string>;
  enabled?: boolean;
}

export interface ConversionResult {
  success: boolean;
  converted: Record<string, OpenCodeMCPConfig> | null;
  errors: string[];
  serverNames: string[];
}

export function convertToOpenCode(inputJson: string): ConversionResult {
  const errors: string[] = [];
  const serverNames: string[] = [];
  
  // Parse the input JSON
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(inputJson);
  } catch (e) {
    try {
      // Fallback to relaxed JS object parsing (handles comments, single quotes, trailing commas)
      const cleanInput = inputJson.trim().replace(/^export default |^module\.exports = |^const \w+ = /g, '');
      parsed = new Function('return ' + cleanInput)();
    } catch (err) {
      return {
        success: false,
        converted: null,
        errors: ['Invalid configuration format: ' + (e as Error).message],
        serverNames: []
      };
    }
  }

  // Try to find the mcpServers object (could be at different levels)
  let servers: Record<string, MCPServerConfig> | undefined;
  
  // Format 1: { mcpServers: { ... } }
  if (parsed.mcpServers && typeof parsed.mcpServers === 'object') {
    servers = parsed.mcpServers as Record<string, MCPServerConfig>;
  }
  // Format 2: Just the server object directly with command
  else if (parsed.command && typeof parsed.command === 'string') {
    servers = { direct: parsed as unknown as MCPServerConfig };
  }
  // Format 3: Look for any key that has command property
  else {
    for (const [key, value] of Object.entries(parsed)) {
      if (value && typeof value === 'object' && (value as Record<string, unknown>).command) {
        servers = parsed as Record<string, MCPServerConfig>;
        break;
      }
    }
  }

  if (!servers) {
    return {
      success: false,
      converted: null,
      errors: ['No MCP server configuration found. Expected format with "mcpServers" object or "command" property.'],
      serverNames: []
    };
  }

  // Convert each server
  const converted: Record<string, OpenCodeMCPConfig> = {};
  
  for (const [name, config] of Object.entries(servers)) {
    if (!config || typeof config !== 'object') continue;
    
    const serverConfig = config as MCPServerConfig;
    const command = serverConfig.command;
    const args = serverConfig.args;
    const env = serverConfig.env;
    
    if (!command) {
      errors.push(`Server "${name}" is missing "command" property`);
      continue;
    }

    // Build command array
    let commandArray: string[];
    if (Array.isArray(command)) {
      commandArray = command;
      if (args && Array.isArray(args)) {
        commandArray = [...commandArray, ...args];
      }
    } else if (typeof command === 'string') {
      commandArray = [command];
      if (args && Array.isArray(args)) {
        commandArray = [...commandArray, ...args];
      }
    } else {
      errors.push(`Server "${name}" has invalid command type`);
      continue;
    }

    // Add -y flag if using npx
    if (commandArray[0] === 'npx' && !commandArray.includes('-y')) {
      commandArray.splice(1, 0, '-y');
    }

    // Handle environment variables
    let environment: Record<string, string> | undefined;
    if (env && typeof env === 'object') {
      environment = env;
    }

    converted[name] = {
      type: 'local',
      command: commandArray,
      ...(environment && { environment }),
      enabled: true
    };
    
    serverNames.push(name);
  }

  if (Object.keys(converted).length === 0) {
    return {
      success: false,
      converted: null,
      errors: errors.length > 0 ? errors : ['No valid MCP servers found in configuration'],
      serverNames: []
    };
  }

  return {
    success: true,
    converted,
    errors,
    serverNames
  };
}

export function formatForOpenCode(converted: Record<string, OpenCodeMCPConfig>): string {
  const output = {
    $schema: 'https://opencode.ai/config.json',
    mcp: converted
  };
  
  return JSON.stringify(output, null, 2);
}

export function getFullConfig(existingConfig: string | null, newServers: Record<string, OpenCodeMCPConfig>): string {
  let existing: Record<string, unknown> = {};
  
  if (existingConfig) {
    try {
      existing = JSON.parse(existingConfig);
    } catch {
      // Invalid existing config, start fresh
    }
  }

  const mcp = (existing.mcp as Record<string, OpenCodeMCPConfig>) || {};
  
  // Merge new servers
  for (const [name, config] of Object.entries(newServers)) {
    mcp[name] = config;
  }

  const output = {
    $schema: 'https://opencode.ai/config.json',
    ...existing,
    mcp
  };

  return JSON.stringify(output, null, 2);
}