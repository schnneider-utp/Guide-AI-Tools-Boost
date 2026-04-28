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
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ConfigInput from './ConfigInput';
import ConfigPreview from './ConfigPreview';
import InstalledServers from './InstalledServers';
import { convertToOpenCode, type ConversionResult } from '../utils/converter';

const EXAMPLE_JSON = `{
  "mcpServers": {
    "TestSprite": {
      "command": "npx",
      "args": ["@testsprite/testsprite-mcp@latest"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}`;

export default function Home() {
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation on load
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  const handleConvert = (json: string) => {
    const converted = convertToOpenCode(json);
    setResult(converted);
    setShowPreview(true);
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <main ref={mainRef} className="main-container">
      <header ref={headerRef} className="header">
        <div className="logo-section">
          <h1 className="animate-in">
            <span className="logo-icon">⚙️</span>
            MCP Config Generator
          </h1>
          <p className="subtitle animate-in">
            Convert any MCP server configuration to OpenCode format
          </p>
        </div>
        
        <div className="header-features animate-in">
          <span className="feature-tag">JSON → OpenCode</span>
          <span className="feature-tag">Auto-detect</span>
          <span className="feature-tag">Copy & Paste</span>
        </div>
      </header>

      <section className="workspace-grid">
        <div className="workspace-column workspace-left">
          <ConfigInput
            onConvert={handleConvert}
            exampleJson={EXAMPLE_JSON}
          />
        </div>

        <div className="workspace-column workspace-right">
          <div className="workspace-panel workspace-preview-panel">
            <ConfigPreview
              result={showPreview ? result : null}
              onCopy={handleCopy}
              onSaveSuccess={() => setRefreshTrigger((prev) => prev + 1)}
            />
          </div>

          <div className="workspace-panel workspace-installed-panel">
            <InstalledServers refreshTrigger={refreshTrigger} />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Supports TestSprite, Chrome DevTools, and any MCP server documentation format</p>
      </footer>
    </main>
  );
}