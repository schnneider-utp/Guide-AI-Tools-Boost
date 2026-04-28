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
