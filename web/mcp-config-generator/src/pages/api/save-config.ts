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
import path from 'path';
import os from 'os';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { newServers } = body;

    if (!newServers) {
      return new Response(JSON.stringify({ success: false, message: 'No servers provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const homedir = os.homedir();
    const configDir = path.join(homedir, '.config', 'opencode');
    const configPath = path.join(configDir, 'opencode.json');

    // Create directory if it doesn't exist
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    let existingConfig: any = {};
    if (fs.existsSync(configPath)) {
      try {
        const fileContent = fs.readFileSync(configPath, 'utf-8');
        existingConfig = JSON.parse(fileContent);
      } catch (e) {
        console.error("Invalid existing config, overwriting.");
      }
    }

    const mcp = existingConfig.mcp || {};

    // Merge new servers
    for (const [name, config] of Object.entries(newServers)) {
      mcp[name] = config;
    }

    const newConfig = {
      $schema: 'https://opencode.ai/config.json',
      ...existingConfig,
      mcp
    };

    fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Saved successfully to ' + configPath }), {
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