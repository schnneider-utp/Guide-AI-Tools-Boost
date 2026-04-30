/*
 * Copyright (C) 2026 Jean Schnneider Arias Suarez
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import type { APIRoute } from 'astro';
import fs from 'fs';
import os from 'os';
import path from 'path';

type OpenCodeConfig = {
  $schema?: string;
  mcp?: Record<string, unknown>;
  [key: string]: unknown;
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const serverName = String(body?.serverName || '').trim();

    if (!serverName) {
      return new Response(JSON.stringify({ success: false, message: 'serverName is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const homedir = os.homedir();
    const configDir = path.join(homedir, '.config', 'opencode');
    const configPath = path.join(configDir, 'opencode.json');

    if (!fs.existsSync(configPath)) {
      return new Response(JSON.stringify({ success: false, message: 'OpenCode config file not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const fileContent = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(fileContent) as OpenCodeConfig;

    if (!config.mcp || typeof config.mcp !== 'object') {
      return new Response(JSON.stringify({ success: false, message: 'No MCP servers found in config' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!(serverName in config.mcp)) {
      return new Response(JSON.stringify({ success: false, message: `Server "${serverName}" not found` }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    delete config.mcp[serverName];

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: `Server "${serverName}" deleted successfully` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
