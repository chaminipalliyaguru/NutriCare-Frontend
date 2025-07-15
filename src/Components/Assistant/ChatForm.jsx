import { useRef } from "react";

function ChatForm({ generateBotResponse }) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    generateBotResponse(userMessage);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:outline focus-within:outline-2 focus-within:outline-yellow-900"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="flex-grow bg-transparent outline-none text-sm h-[42px] px-2"
          required
        />
        <button
          type="submit"
          className="ml-2 h-9 w-9 flex items-center justify-center rounded-full bg-yellow-900 text-white hover:bg-yellow-900 transition"
        >
          ↑
        </button>
      </form>
    </div>
  );
}

export default ChatForm;
