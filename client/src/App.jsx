import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Home from './pages/Home';

const socket = io('http://localhost:8000');
function App() {
  return <Home socket={socket} />;
}
export default App;