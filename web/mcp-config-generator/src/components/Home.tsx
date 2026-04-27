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

      <section className="content-section">
        <ConfigInput 
          onConvert={handleConvert} 
          exampleJson={EXAMPLE_JSON}
        />
        
        {showPreview && (
          <ConfigPreview 
            result={result} 
            onCopy={handleCopy}
            onSaveSuccess={() => setRefreshTrigger(prev => prev + 1)}
          />
        )}
        
        <InstalledServers refreshTrigger={refreshTrigger} />
      </section>

      <footer className="footer">
        <p>Supports TestSprite, Chrome DevTools, and any MCP server documentation format</p>
      </footer>
    </main>
  );
}