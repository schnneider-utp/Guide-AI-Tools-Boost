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