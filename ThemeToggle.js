'use client';
import { useEffect, useState } from 'react';
export default function ThemeToggle() {
  const [t, setT] = useState('light');
  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme');
    if (saved) { setT(saved); document.body.setAttribute('data-theme', saved); }
  }, []);
  const toggle = () => {
    const next = t === 'light' ? 'dark' : 'light';
    setT(next);
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };
  return <button className="toggle" onClick={toggle}>{t==='light' ? '🌙 Dark' : '☀️ Light'}</button>;
}
