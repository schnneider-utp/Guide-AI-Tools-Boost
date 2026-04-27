import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ConfigInputProps {
  onConvert: (json: string) => void;
  exampleJson?: string;
}

export default function ConfigInput({ onConvert, exampleJson }: ConfigInputProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate in on mount
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setError('');
  };

  const handleConvert = () => {
    if (!value.trim()) {
      setError('Please paste a configuration');
      return;
    }
    onConvert(value);
  };

  const loadExample = () => {
    if (exampleJson) {
      setValue(exampleJson);
      setError('');
    }
  };

  return (
    <div ref={containerRef} className="config-input">
      <div className="input-header">
        <label htmlFor="mcp-config">MCP Configuration (JSON)</label>
        {exampleJson && (
          <button type="button" className="example-btn" onClick={loadExample}>
            Load Example
          </button>
        )}
      </div>
      
      <div className="textarea-wrapper">
        <textarea
          ref={textareaRef}
          id="mcp-config"
          value={value}
          onChange={handleChange}
          placeholder={`{
  "mcpServers": {
    "TestSprite": {
      "command": "npx",
      "args": ["@testsprite/testsprite-mcp@latest"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}`}
          spellCheck={false}
        />
        {error && <span className="error-message">{error}</span>}
      </div>

      <button 
        type="button" 
        className="convert-btn"
        onClick={handleConvert}
        disabled={!value.trim()}
      >
        <span className="btn-icon">⚡</span>
        Convert to OpenCode
      </button>
    </div>
  );
}