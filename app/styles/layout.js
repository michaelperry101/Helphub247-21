import './globals.css';

export const metadata = {
  title: 'HelpHub24/7 – Carys',
  description: 'Your UK-based AI helpline for £9.99/month'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-theme="light">{children}</body>
    </html>
  );
}
