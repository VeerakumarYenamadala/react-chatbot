import React from 'react';
import './App.css';
import Header from './components/Header';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="chat-container">
          <Chat />
        </div>
      </main>
    </div>
  );
};

export default App; 