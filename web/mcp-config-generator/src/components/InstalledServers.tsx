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
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface InstalledServer {
  type: string;
  command: string[] | string;
  enabled?: boolean;
}

interface InstalledServersProps {
  refreshTrigger: number;
}

export default function InstalledServers({ refreshTrigger }: InstalledServersProps) {
  const [servers, setServers] = useState<Record<string, InstalledServer>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyServer, setBusyServer] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<{ success: boolean; text: string } | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const fetchServers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/get-config');
      const data = await res.json();
      if (data.success) {
        setServers(data.servers);
      } else {
        setError(data.message || 'Failed to load servers');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const openConfigFolder = async () => {
    try {
      const res = await fetch('/api/open-config-folder', { method: 'POST' });
      const data = await res.json();
      setActionMessage({ success: Boolean(data.success), text: data.message || 'No response message' });
    } catch (err) {
      setActionMessage({ success: false, text: (err as Error).message });
    }
  };

  const deleteServer = async (serverName: string) => {
    const confirmed = window.confirm(`Delete MCP server "${serverName}" from OpenCode config?`);
    if (!confirmed) return;

    setBusyServer(serverName);
    try {
      const res = await fetch('/api/delete-server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverName })
      });
      const data = await res.json();
      setActionMessage({ success: Boolean(data.success), text: data.message || 'No response message' });
      if (data.success) {
        await fetchServers();
      }
    } catch (err) {
      setActionMessage({ success: false, text: (err as Error).message });
    } finally {
      setBusyServer(null);
    }
  };

  useEffect(() => {
    fetchServers();
  }, [refreshTrigger]);

  useEffect(() => {
    if (!loading && Object.keys(servers).length > 0 && cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }, [loading, servers]);

  if (loading) {
    return <div className="installed-servers-loading">Loading installed servers...</div>;
  }

  if (error) {
    return <div className="installed-servers-error">Error: {error}</div>;
  }

  const serverEntries = Object.entries(servers);

  return (
    <div ref={containerRef} className="installed-servers-section">
      <div className="installed-header">
        <h2>🔌 Installed MCP Servers</h2>
        <div className="installed-actions">
          <button className="refresh-btn open-folder-btn" onClick={openConfigFolder} title="Open MCP config folder">
            Open folder
          </button>
          <button className="refresh-btn" onClick={fetchServers} title="Refresh">
            ↻
          </button>
        </div>
      </div>

      {actionMessage && (
        <div className={`installed-action-message ${actionMessage.success ? 'success' : 'error'}`}>
          {actionMessage.text}
        </div>
      )}

      {serverEntries.length === 0 ? (
        <div className="installed-servers-loading">
          No MCP servers found in your local OpenCode config yet.
        </div>
      ) : (
        <div ref={cardsRef} className="servers-grid">
          {serverEntries.map(([name, config]) => {
            const isEnabled = config.enabled !== false; // true by default
            const commandStr = Array.isArray(config.command)
              ? config.command.join(' ')
              : config.command || 'Unknown command';

            return (
              <div key={name} className={`server-card ${isEnabled ? 'enabled' : 'disabled'}`}>
                <div className="card-header">
                  <div className="card-title">
                    <span className={`status-dot ${isEnabled ? 'active' : 'inactive'}`}></span>
                    <h3 className="card-name">{name}</h3>
                  </div>
                  <span className="card-type">{config.type}</span>
                </div>
                <div className="card-body">
                  <code className="card-command">{commandStr}</code>
                </div>
                <div className="card-footer-actions">
                  <button
                    type="button"
                    className="delete-server-btn"
                    onClick={() => deleteServer(name)}
                    disabled={busyServer === name}
                  >
                    {busyServer === name ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}