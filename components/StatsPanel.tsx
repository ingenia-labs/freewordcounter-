import React from 'react';
import { TextStats } from '../lib/utils/getStats';

interface StatsPanelProps {
  stats: TextStats;
}

export function StatsPanel({ stats }: StatsPanelProps) {
  const statItems = [
    { label: 'Words', value: stats.words, color: '#2563eb' },
    { label: 'Characters', value: stats.characters, color: '#16a34a' },
    { label: 'No spaces', value: stats.charactersNoSpaces, color: '#9333ea' },
    { label: 'Lines', value: stats.lines, color: '#ea580c' },
    { label: 'Paragraphs', value: stats.paragraphs, color: '#dc2626' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1rem',
      marginBottom: '1.5rem'
    }}>
      {statItems.map((item) => (
        <div key={item.label} style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: item.color
          }}>
            {item.value}
          </div>
          <div style={{
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
