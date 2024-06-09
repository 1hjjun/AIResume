'use client';

import React, { useState } from 'react';

const Airesume = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);

      // 사용자 메시지를 보낸 후 AI 응답 추가
      const aiResponse = generateAIResponse(inputValue);
      setMessages([...messages, { text: inputValue, sender: 'user' }, { text: aiResponse, sender: 'assistant' }]);

      // 입력 필드 초기화
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    // 엔터키 입력 시 메시지 전송
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    } else {
      setInputValue(e.target.value);
    }
  };

  const generateAIResponse = (userMessage) => {
    // 여기에 AI 응답 생성 로직을 작성하세요
    return "AI가 생성한 응답입니다.";
  };

  return (
    <div className="Airesume-container">
      <div className="Airesume-chatWindow">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.sender === 'user' ? 'user' : 'assistant'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="Airesume-inputContainer">
        <textarea
          className="input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
        />
        <button className="Airesume-sendButton" onClick={handleSendMessage}>
          전송
        </button>
      </div>
    </div>
  );
};

export default Airesume;
