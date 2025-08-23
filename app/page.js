import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';

export const metadata = { title: 'Terms – HelpHub24/7' };

export default function Terms() {
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
          <h2>Terms of Service</h2>
          <ul>
            <li>Service: AI assistance for general guidance; not a substitute for professional advice.</li>
            <li>Subscription: £9.99/month, cancel anytime from your account or via Stripe.</li>
            <li>Acceptable Use: No unlawful, harmful, or abusive activities.</li>
            <li>Liability: Service provided “as is”, without warranties; liability limited to fees paid.</li>
            <li>Contact: Add your support email and company details here.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
