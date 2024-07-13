"use client";
import { useState } from "react";

const Airesume = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 사용자 메시지를 추가
    const newMessages = [...messages, { user: "you", text: question }];
    setMessages(newMessages);
    setQuestion("");

    // 서버로 질문 전송
    const res = await fetch("https://api.junresume.com/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    // 서버 응답을 추가
    setMessages([...newMessages, { user: "bot", text: data.response }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Chat with Resume-based AI chatbot
      </h1>
      <div className="mb-4">
        <div className="border border-gray-300 p-4 h-96 overflow-y-scroll">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 ${
                msg.user === "you" ? "text-right" : "text-left"
              }`}
            >
              <strong>{msg.user === "you" ? "You" : "Bot"}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="저에 대해 궁금한 점을 검색해 주세요."
          className="flex-1 p-2 text-lg border border-gray-400 rounded-l"
          required
        />
        <button
          type="submit"
          className="p-2 text-lg bg-green-500 text-white rounded-r"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Airesume;
