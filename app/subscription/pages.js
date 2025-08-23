import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata = { title: 'Subscribe – HelpHub24/7' };

export default function Subscription() {
  return (
    <div>
      <header className="header">
        <div className="brand"><img className="logo" src="/logo.png" alt="" /><span>HelpHub24/7</span></div>
        <nav className="nav">
          <Link href="/">Home</Link><Link href="/chat">Chat</Link><Link href="/subscription">Subscribe</Link><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link>
        </nav>
        <ThemeToggle/>
      </header>
      <section className="section">
        <div className="card">
          <h2>Subscribe – £9.99/month</h2>
          <p>Unlimited access to Carys, priority responses, and 24/7 support.</p>
          <a className="btn" href="https://buy.stripe.com/test_12345" target="_blank">Subscribe with Stripe</a>
          <p style={{marginTop:8,fontSize:12,opacity:.8}}>Replace the URL with your live Stripe Payment Link to take payments.</p>
        </div>
      </section>
    </div>
  );
}
