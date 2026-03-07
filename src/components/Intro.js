import React, { useState, useEffect, useRef } from 'react';
import './Intro.css';

// ── Text scramble ───────────────────────────────────────────────────────────
const CHARS = '!<>-_\\/[]{}—=+*^?#';

function scramble(el, text, onDone) {
  let frame = 0;
  let rafId;
  const queue = text.split('').map((to, i) => ({
    to,
    start: Math.floor(Math.random() * 12),
    end: Math.floor(Math.random() * 16) + 14,
  }));

  const tick = () => {
    let out = '';
    let done = 0;
    queue.forEach(({ to, start, end }) => {
      if (frame >= end) {
        done++;
        out += to;
      } else if (frame >= start) {
        out += `<span class="scramble-char">${CHARS[Math.floor(Math.random() * CHARS.length)]}</span>`;
      } else {
        out += to;
      }
    });
    el.innerHTML = out;
    if (done < queue.length) {
      frame++;
      rafId = requestAnimationFrame(tick);
    } else {
      onDone && onDone();
    }
  };
  tick();
  return () => cancelAnimationFrame(rafId);
}

// ── Component ───────────────────────────────────────────────────────────────
function Intro() {
  const [time, setTime] = useState('');
  const nameRef = useRef(null);
  const cancelRef = useRef(null);
  const NAME = 'Mia Liu';

  // Live Stockholm time
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-SE', {
        timeZone: 'Europe/Stockholm',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  // Scramble on hover
  const handleMouseEnter = () => {
    if (cancelRef.current) cancelRef.current();
    const el = nameRef.current;
    if (!el) return;
    cancelRef.current = scramble(el, NAME, null);
  };

  const handleMouseLeave = () => {
    if (cancelRef.current) cancelRef.current();
    const el = nameRef.current;
    if (el) el.innerHTML = NAME;
  };

  return (
    <div className="hero">
      

      <div className="hero-name-block">

      
        <h1
          className="hero-name"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span ref={nameRef}>{NAME}</span>
          <span className="cursor-blink">_</span>
        </h1>
        <p className="hero-lead">
        I design at the edge where<br />
        human intuition meets<br />
        AI & technology.
      </p>
      <div className="hero-meta">
        <span className="hero-tag">[PRODUCT_MAKER]</span>
        <span className="hero-tag-sep">/</span>
        <span className="hero-tag">[STOCKHOLM]</span>
        <span className="hero-tag-sep">/</span>
        <span className="hero-tag">[AI_NATIVE]</span>
        {time && (
          <>
            <span className="hero-tag-sep">/</span>
            <span className="hero-telemetry">{time} UTC+1</span>
          </>
        )}
      </div>
      </div>

      

      <div className="hero-body">
        <p>
          Not just a designer — a <strong>Product Maker</strong> who embraces AI as coworking
          mates. I envision a future where design
          and intelligence are inseparable, and I build toward it every day :D
        </p>
        <p>
          Currently consulting at{' '}
          <a href="https://www.netlight.com/" target="_blank" rel="noopener noreferrer">Netlight AB</a>,
          embedded with{' '}
          <a href="https://www.scania.com/" target="_blank" rel="noopener noreferrer">Scania</a>,{' '}
          <a href="https://www.thermo-calc.com/" target="_blank" rel="noopener noreferrer">Thermo-Calc</a>, and{' '}
          <a href="https://www.storykit.com/" target="_blank" rel="noopener noreferrer">Storykit</a> —
          solving complex product challenges through research, systems thinking,
          and AI-integrated workflows.
        </p>
      </div>
    </div>
  );
}

export default Intro;
