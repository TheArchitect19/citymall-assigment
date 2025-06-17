import React from 'react';
export default function MemeCard({ meme, onVote }) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 m-2 rounded-lg glitch">
      <h3 className="text-xl font-bold">{meme.title}</h3>
      <img src={meme.image_url} alt={meme.title} />
      <p className="mt-2">Upvotes: {meme.upvotes}</p>
      <button onClick={() => onVote(meme.id, 'up')} className="neon-btn mr-2">▲</button>
      <button onClick={() => onVote(meme.id, 'down')} className="neon-btn">▼</button>
    </div>
  );
}