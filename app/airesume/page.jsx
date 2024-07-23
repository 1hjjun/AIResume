"use client";
import { useState, useEffect } from "react";

const Airesume = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [threadId, setThreadId] = useState("");

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 thread_id 확인
    let storedThreadId = localStorage.getItem("thread_id");

    if (storedThreadId === null || storedThreadId == "undefined") {
      // thread_id가 없으면 새로 생성
      createNewThread();
    } else {
      setThreadId(storedThreadId);
    }
  }, []);

  const createNewThread = async () => {
    const res = await fetch("https://api.junresume.com/createNewThread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    const newThreadId = data.thread_id;

    // 새로 생성된 thread_id를 로컬 스토리지에 저장
    localStorage.setItem("thread_id", newThreadId);
    setThreadId(newThreadId);
  };

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
      body: JSON.stringify({ thread_id: threadId, question }),
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
