import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText !== '') {
      const newMessage = { text: inputText, isUser: true };
      setMessages([...messages, newMessage]);
      setInputText('');

      setTimeout(() => {
        const botResponse = { text: "Echo: " + newMessage.text, isUser: false };
        setMessages(messages => [...messages, botResponse]);
    }, 1000);
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="chat-window">
          <div className="messages">
            {messages.map((msg, index) => (
              <p key={index} className={msg.isUser ? 'user-msg' : 'bot-msg'}>
                {msg.text}
              </p>
            ))}
          </div>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
