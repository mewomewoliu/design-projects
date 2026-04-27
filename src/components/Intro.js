import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import './Intro.css';

// ── p5 sketch (Dynamic Type — instance mode) ─────────────────────────────────
const dynamicTypeSketch = (p) => {
  let isDynamic = true; // start animated
  const cols = 32;
  const rows = 12;
  let columnWidths = [];
  let rowHeights = [];
  let cellStates = [];
  const noiseScale = 0.3;
  const varianceBoost = 2;

  p.setup = () => {
    const parent = p.canvas ? p.canvas.parentElement : null;
    const w = parent ? parent.offsetWidth : window.innerWidth;
    const h = parent ? parent.offsetHeight : window.innerHeight;
    p.createCanvas(w, h);
    initializeStatic();
    initCellStates();
  };

  p.windowResized = () => {
    const parent = p.canvas ? p.canvas.parentElement : null;
    const w = parent ? parent.offsetWidth : window.innerWidth;
    const h = parent ? parent.offsetHeight : window.innerHeight;
    p.resizeCanvas(w, h);
    initializeStatic();
  };

  p.draw = () => {
    p.background(255);
    if (isDynamic) updateDimensions();
    drawGrid();
  };

  function initializeStatic() {
    columnWidths = Array(cols).fill(p.width / cols);
    rowHeights = Array(rows).fill(p.height / rows);
  }

  function initCellStates() {
    cellStates = Array(rows).fill(null).map(() => Array(cols).fill(false));
  }

  function updateDimensions() {
    let totalW = calculateSizes(columnWidths, cols, 'horizontal');
    normalizeSizes(columnWidths, p.width, totalW);
    let totalH = calculateSizes(rowHeights, rows, 'vertical');
    normalizeSizes(rowHeights, p.height, totalH);
  }

  function calculateSizes(arr, count, type) {
    let total = 0;
    const offset = type === 'horizontal' ? 0 : 1000;
    for (let i = 0; i < count; i++) {
      let n = p.noise(
        i * noiseScale,
        p.frameCount * 0.01,
        offset + p.sin(p.frameCount * 0.02) * 2
      );
      arr[i] = p.pow(n, varianceBoost);
      total += arr[i];
    }
    return total;
  }

  function normalizeSizes(arr, targetSum, currentSum) {
    const ratio = targetSum / currentSum;
    for (let i = 0; i < arr.length; i++) arr[i] *= ratio;
  }

  function drawGrid() {
    p.noStroke();
    let yPos = 0;
    for (let r = 0; r < rows; r++) {
      let xPos = 0;
      for (let c = 0; c < cols; c++) {
        p.fill(cellStates[r][c] ? 0 : 255);
        p.rect(xPos, yPos, columnWidths[c], rowHeights[r]);
        xPos += columnWidths[c];
      }
      yPos += rowHeights[r];
    }
    drawGridLines();
  }

  function drawGridLines() {
    p.stroke(200);
    p.noFill();
    let y = 0;
    for (let r = 0; r <= rows; r++) {
      p.line(0, y, p.width, y);
      y += rowHeights[r] || 0;
    }
    let x = 0;
    for (let c = 0; c <= cols; c++) {
      p.line(x, 0, x, p.height);
      x += columnWidths[c] || 0;
    }
  }

  p.mousePressed = () => {
    let y = 0;
    for (let r = 0; r < rows; r++) {
      let x = 0;
      for (let c = 0; c < cols; c++) {
        if (p.mouseX > x && p.mouseX < x + columnWidths[c] &&
            p.mouseY > y && p.mouseY < y + rowHeights[r]) {
          cellStates[r][c] = !cellStates[r][c];
          return;
        }
        x += columnWidths[c];
      }
      y += rowHeights[r];
    }
  };

  p.keyPressed = () => {
    if (p.key === ' ') {
      isDynamic = !isDynamic;
      if (!isDynamic) initializeStatic();
    }
  };
};

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
  const canvasRef = useRef(null);
  const p5Ref = useRef(null);
  const NAME = 'Drive, Research, Design, Code';

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

  // p5 sketch mount/unmount + visibility pause
  useEffect(() => {
    if (!canvasRef.current) return;
    p5Ref.current = new p5(dynamicTypeSketch, canvasRef.current);

    const handleVisibility = () => {
      if (!p5Ref.current) return;
      if (document.visibilityState === 'hidden') {
        p5Ref.current.noLoop();
      } else {
        p5Ref.current.loop();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      p5Ref.current && p5Ref.current.remove();
    };
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
      <div className="hero-canvas" ref={canvasRef} aria-hidden="true" />

      <div className="hero-name-block">

        <span className="hero-person-label">MIAOMIAO LIU</span>
        <h1
          className="hero-name"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span ref={nameRef}>{NAME}</span>
          <span className="cursor-blink">_</span>
        </h1>
        <p className="hero-lead">
        Mia is a Creative Designer 
        </p>
      <div className="hero-meta">
        <span className="hero-tag">[UI_Designer]</span>
        <span className="hero-tag-sep">/</span>
        <span className="hero-tag">[Creative_Designer]</span>
        <span className="hero-tag-sep">/</span>
        <span className="hero-tag">[Product_Designer]</span>
        <span className="hero-tag-sep">/</span>
        <span className="hero-tag">[AI_DESIGNER]</span>
        {time && (
          <>
            <span className="hero-tag-sep">/</span>
            <span className="hero-telemetry">{time} UTC+1</span>
          </>
        )}
      </div>
      </div>

      

      <div className="hero-body">
        {/* <p>
          I design systems, not screens — starting from what people
          need, what the business can sustain, and what engineering can ship.
        </p>
        <p>
          Currently consulting at{' '}
          <a href="https://www.netlight.com/" target="_blank" rel="noopener noreferrer">Netlight AB</a>,
          working across{' '}
          <a href="https://www.scania.com/" target="_blank" rel="noopener noreferrer">Scania</a>,{' '}
          <a href="https://www.thermo-calc.com/" target="_blank" rel="noopener noreferrer">Thermo-Calc</a>, and{' '}
          <a href="https://www.bayer.com/" target="_blank" rel="noopener noreferrer">Bayer</a> —
          translating complex product challenges into research-grounded,
          AI-integrated design.
        </p> */}
      </div>
    </div>
  );
}

export default Intro;
