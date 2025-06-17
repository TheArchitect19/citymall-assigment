import React, { useEffect, useState } from 'react';
import API from '../services/api';
import MemeCard from '../components/MemeCard';
export default function Home({ socket }) {
  const [memes, setMemes] = useState([]);
  useEffect(() => { fetch();
    socket.on('newBid', () => fetch());
    socket.on('voteUpdate', () => fetch());
  }, []);
  const fetch = async () => { const res = await API.get('/'); setMemes(res.data); };
  const onVote = async (id, type) => { await API.post(`/${id}/vote`, { type }); };
  return (
    <div className="grid grid-cols-3 gap-4">
      {memes.map(m => <MemeCard key={m.id} meme={m} onVote={onVote}/>)}
    </div>
  );
}