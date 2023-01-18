import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import io from 'socket.io-client';
import './App.css'

const socket = io();

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState("");

  React.useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });
    console.log(isConnected)
    console.log(lastPong)
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }


  return (
    <>
      <div className="container">
        <h1 className="font-semibold">
          Msg Ella
        </h1>
      </div>
    </>
  )
}

export default App
