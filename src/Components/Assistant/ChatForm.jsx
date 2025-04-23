import { useRef } from "react";

function ChatForm({ generateBotResponse }) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Call generateBotResponse with the user's input
    generateBotResponse(userMessage);
  };

  return (
    <div className="chat-footer">
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Message.."
          className="message-input"
          required
        />
        <button type="submit" className="material-symbols-outlined">
          arrow_upward
        </button>
      </form>
    </div>
  );
}

export default ChatForm;