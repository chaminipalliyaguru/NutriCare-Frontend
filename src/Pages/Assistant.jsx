import { useState } from "react";
import ChatbotIcon from "../Components/Assistant/ChatbotIcon";
import ChatForm from "../Components/Assistant/ChatForm";
import ChatMessage from "../Components/Assistant/ChatMessage";

function Assistant() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const generateBotResponse = async (userInput) => {
    try {
      setIsLoading(true);

      setChatHistory((prev) => [...prev, { role: "user", text: userInput }]);

      const response = await fetch("https://nutricare-backend.vercel.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      const botResponse = data.response;

      setChatHistory((prev) => [...prev, { role: "assistant", text: botResponse }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [...prev, {
        role: "assistant",
        text: "Sorry, something went wrong. Please try again.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        {!isMinimized && (
          <div className="flex flex-col gap-5 h-[460px] overflow-y-auto px-6 py-5 mb-[82px] scrollbar-thin scrollbar-thumb-purple-200">
            {/* Bot initial message */}
            <div className="flex items-center gap-3">
              <ChatbotIcon />
              <p className="bg-yellow-900 text-white p-3 rounded-tl-lg rounded-tr-lg rounded-br-lg text-sm">
                Hey there. <br /> How can I help you today?
              </p>
            </div>

            {/* Chat history */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            {/* Loading message */}
            {isLoading && (
              <div className="flex items-center gap-3">
                <ChatbotIcon />
                <p className="bg-yellow-900 text-white p-3 rounded-tl-lg rounded-tr-lg rounded-br-lg text-sm">
                  Thinking...
                </p>
              </div>
            )}
          </div>
        )}

        {!isMinimized && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Assistant;
