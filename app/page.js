import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata = { title: 'Privacy – HelpHub24/7' };

export default function Privacy() {
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
          <h2>Privacy Policy</h2>
          <ul>
            <li>Data: account email and usage logs; billing handled by Stripe.</li>
            <li>Cookies: minimal session cookies; analytics optional (add later).</li>
            <li>Rights: access, rectification, deletion; contact us to exercise rights.</li>
            <li>International transfers & retention: add specifics based on your providers.</li>
            <li>Contact: Add DPO/support email.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
