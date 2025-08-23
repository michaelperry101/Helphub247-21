import Link from 'next/link';
import ThemeToggle from '../../components/ThemeToggle';
import Chat from '../../components/Chat';

export const metadata = { title: 'Chat – HelpHub24/7' };

export default function ChatPage() {
  return (
    <div>
      <header className="header">
        <div className="brand">
          <img className="logo" src="/logo.png" alt="" />
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

      <div className="layout">
        <aside className="sidebar">
          <div className="new">+ New chat</div>
          <div className="link">Carys • General</div>
          <div className="link">Billing Q&A</div>
          <div className="link">Account Help</div>
        </aside>
        <Chat />
      </div>

      <div className="footer">© 2025 HelpHub24/7 • £9.99/mo • Carys AI</div>
      <div id="bubble" onClick={()=>{const s=document.querySelector('.sidebar'); if(s){s.style.display = s.style.display==='none'?'flex':'none';}}}>💬</div>
    </div>
  );
}