'use client';
import { useRef, useState } from 'react';
export default function Chat() {
  const [msgs, setMsgs] = useState([{ role: 'bot', text: 'Hi, I’m Carys 👋 How can I help today?' }]);
  const inputRef = useRef();
  const send = () => {
    const v = inputRef.current.value.trim();
    if (!v) return;
    setMsgs(m => [...m, { role: 'user', text: v }, { role: 'bot', text: 'Carys is thinking… (AI reply placeholder)' }]);
    inputRef.current.value = '';
  };
  const onKey = (e) => e.key === 'Enter' && send();
  return (
    <div className="main">
      <div className="chat">
        {msgs.map((m, i) => <div key={i} className={'msg ' + (m.role === 'user' ? 'user' : '')}>{m.text}</div>)}
      </div>
      <div className="inputBar">
        <input ref={inputRef} onKeyDown={onKey} placeholder="Type a message…" />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
