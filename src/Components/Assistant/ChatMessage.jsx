import ChatbotIcon from "./ChatbotIcon";

function ChatMessage({ chat }) {
  if (chat.role === "assistant") {
    return (
      <div className="flex items-start gap-3">
        <ChatbotIcon />
        <p className="bg-yellow-900 text-white p-3 rounded-tl-lg rounded-tr-lg rounded-br-lg text-sm max-w-[75%] whitespace-pre-line">
          {chat.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end">
      <p className="bg-yellow-900 text-white p-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg text-sm max-w-[75%] whitespace-pre-line">
        {chat.text}
      </p>
    </div>
  );
}

export default ChatMessage;
