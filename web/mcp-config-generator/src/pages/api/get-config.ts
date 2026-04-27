import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import os from 'os';

export const GET: APIRoute = async () => {
  try {
    const homedir = os.homedir();
    const configPath = path.join(homedir, '.config', 'opencode', 'opencode.json');

    if (!fs.existsSync(configPath)) {
      return new Response(JSON.stringify({ success: true, servers: {} }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const fileContent = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(fileContent);
    const servers = config.mcp || {};

    return new Response(JSON.stringify({ success: true, servers }), {
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