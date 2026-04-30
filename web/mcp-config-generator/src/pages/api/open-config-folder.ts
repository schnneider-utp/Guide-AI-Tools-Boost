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
import { spawn } from 'child_process';

export const POST: APIRoute = async () => {
  try {
    const homedir = os.homedir();
    const configDir = path.join(homedir, '.config', 'opencode');

    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    if (process.platform === 'win32') {
      spawn('explorer', [configDir], { detached: true, stdio: 'ignore' }).unref();
    } else if (process.platform === 'darwin') {
      spawn('open', [configDir], { detached: true, stdio: 'ignore' }).unref();
    } else {
      spawn('xdg-open', [configDir], { detached: true, stdio: 'ignore' }).unref();
    }

    return new Response(JSON.stringify({ success: true, message: `Opened: ${configDir}` }), {
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
