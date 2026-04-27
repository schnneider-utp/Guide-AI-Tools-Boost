import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface InstalledServer {
  type: string;
  command: string[];
  enabled?: boolean;
}

interface InstalledServersProps {
  refreshTrigger: number;
}

export default function InstalledServers({ refreshTrigger }: InstalledServersProps) {
  const [servers, setServers] = useState<Record<string, InstalledServer>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const fetchServers = async () => {
    setLoading(true);
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

  if (serverEntries.length === 0) {
    return null; // Don't show anything if no servers are installed
  }

  return (
    <div ref={containerRef} className="installed-servers-section">
      <div className="installed-header">
        <h2>🔌 Installed MCP Servers</h2>
        <button className="refresh-btn" onClick={fetchServers} title="Refresh">
          ↻
        </button>
      </div>

      <div ref={cardsRef} className="servers-grid">
        {serverEntries.map(([name, config]) => {
          const isEnabled = config.enabled !== false; // true by default
          const commandStr = config.command?.join(' ') || 'Unknown command';
          
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
            </div>
          );
        })}
      </div>
    </div>
  );
}