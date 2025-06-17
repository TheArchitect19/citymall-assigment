import React, { useState } from 'react';
export default function BidPanel({ meme, socket }) {
  const [bid, setBid] = useState('');
  const submit = () => socket.emit('bid', { id: meme.id, credits: bid });
  return (
    <div className="p-2">
      <input type="number" value={bid} onChange={e => setBid(e.target.value)} />
      <button onClick={submit} className="neon-btn">Bid</button>
    </div>
  );
}