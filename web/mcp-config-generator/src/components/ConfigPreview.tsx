import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { convertToOpenCode, formatForOpenCode, type ConversionResult } from '../utils/converter';

interface ConfigPreviewProps {
  result: ConversionResult | null;
  onCopy: (content: string) => void;
  onSaveSuccess?: () => void;
}

export default function ConfigPreview({ result, onCopy, onSaveSuccess }: ConfigPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState<{success: boolean; message: string} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [result]);

  const handleCopy = () => {
    if (result?.converted) {
  const formatted = formatForOpenCode(result.converted as Record<string, any>);
      onCopy(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSaveDirectly = async () => {
    if (!result?.converted) return;
    setSaving(true);
    setSaveResult(null);
    
    try {
      const res = await fetch('/api/save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newServers: result.converted })
      });
      const data = await res.json();
      setSaveResult(data);
      if (data.success && onSaveSuccess) {
        onSaveSuccess();
      }
      setTimeout(() => setSaveResult(null), 4000);
    } catch (e) {
      setSaveResult({ success: false, message: (e as Error).message });
    } finally {
      setSaving(false);
    }
  };

  if (!result) {
    return (
      <div className="config-preview empty">
        <div className="placeholder">
          <span className="placeholder-icon">📋</span>
          <p>Paste your MCP configuration and click Convert</p>
        </div>
      </div>
    );
  }

  if (!result.success) {
    return (
      <div ref={containerRef} className="config-preview error">
        <div className="error-header">
          <span className="error-icon">⚠️</span>
          <h3>Conversion Failed</h3>
        </div>
        <ul className="error-list">
          {result.errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      </div>
    );
  }

  const formatted = formatForOpenCode(result.converted as Record<string, any>);

  return (
    <div ref={containerRef} className="config-preview">
      <div className="preview-header">
        <div className="success-badge">
          <span className="check-icon">✓</span>
          <span>{result.serverNames.length} server(s) converted</span>
        </div>
        <div className="preview-actions">
          <button className="copy-btn save-btn" onClick={handleSaveDirectly} disabled={saving}>
            {saving ? 'Saving...' : '🚀 Save directly to OpenCode'}
          </button>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? (
              <>
                <span className="btn-icon">✓</span>
                Copied!
              </>
            ) : (
              <>
                <span className="btn-icon">📋</span>
                Copy Config
              </>
            )}
          </button>
        </div>
      </div>
      
      {saveResult && (
        <div className={`save-result ${saveResult.success ? 'success' : 'error'}`}>
          {saveResult.message}
        </div>
      )}

      {result.adjustments && result.adjustments.length > 0 && (
        <div className="adjustments-list">
          <div className="adjustments-header">
            <span className="adjustments-icon">🔧</span>
            <span>Auto-adjustments applied:</span>
          </div>
          <ul>
            {result.adjustments.map((adj, i) => (
              <li key={i}>{adj}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="server-list">
        {result.serverNames.map((name) => (
          <div key={name} className="server-item">
            <span className="server-name">{name}</span>
          </div>
        ))}
      </div>

      <div className="code-output">
        <pre><code>{formatted}</code></pre>
      </div>

      <div className="instructions">
        <h4>How to use:</h4>
        <ol>
          <li>Copy the config above</li>
          <li>Open <code>~/.config/opencode/opencode.json</code></li>
          <li>Merge with existing config or create new file</li>
          <li>Restart OpenCode to load new MCP servers</li>
        </ol>
      </div>
    </div>
  );
}