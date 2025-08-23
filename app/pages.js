import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Landing() {
  return (
    <div>
      <header className="header">
        <div className="brand">
          <img className="logo" src="/logo.png" alt="HelpHub24/7" />
          <span>HelpHub24/7</span>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/chat">Chat</Link>
          <Link href="/subscription">Subscribe</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero">
        <h1>Your 24/7 AI Helpline</h1>
        <p>UK-based support with Carys — Conversational Assistant for Responsive Yielding Solutions. Get answers fast for just £9.99/month.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center'}}>
          <Link className="btn" href="/chat">Try Carys</Link>
          <Link className="btn" href="/subscription">Subscribe</Link>
        </div>
      </section>
    </div>
  );
}
