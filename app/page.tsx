'use client';

import { useState, useMemo } from 'react';
import { getStats } from '../lib/utils/getStats';
import { StatsPanel } from '../components/StatsPanel';

export default function Home() {
  const [text, setText] = useState('');

  const stats = useMemo(() => getStats(text), [text]);

  const readingTime = useMemo(() => {
    if (stats.words === 0) return { minutes: 0, seconds: 0 };
    const totalSeconds = Math.ceil((stats.words / 200) * 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
  }, [stats.words]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem 0' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem', color: '#1f2937' }}>
          Word Counter - Phase 1
        </h1>

        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            style={{
              width: '100%',
              height: '256px',
              padding: '1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              resize: 'none',
              fontSize: '1rem',
              color: '#374151',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </div>

        <StatsPanel stats={stats} />

        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '0.5rem' }}>Estimated reading time</div>
          <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#4f46e5' }}>
            {readingTime.minutes}m {readingTime.seconds}s
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>(200 words per minute)</div>
        </div>
      </div>
    </div>
  );
}
