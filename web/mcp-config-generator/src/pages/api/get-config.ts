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