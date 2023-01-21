import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import io from 'socket.io-client';
import './App.css'
import Register from './components/Register';

const socket = io("http://localhost:8000");

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState("");
  console.log(socket.connected);

  React.useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log("SERVER IS CONNECTED");

    });

    socket.emit("new-user-joined", "Hello")
    socket.emit("send", "Hello")
    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log("SERVER IS DISCONNECTED");
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    // return () => {
    //   socket.off('connect');
    //   socket.off('disconnect');
    //   socket.off('pong');
    // };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }


  return (
    <>
      <Register />
    </>
  )
}

export default App
