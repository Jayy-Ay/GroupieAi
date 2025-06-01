import { useEffect } from 'react';

// ...existing imports

interface ChatComponentProps {
  messages: any[]; // Replace 'any' with the actual message type if available
}

const ChatComponent = ({ messages }: ChatComponentProps) => {
  // ...existing state and functions

  const scrollToBottom = () => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div id="chat-container">
      {/* ...existing JSX for chat messages... */}
    </div>
  );
};

export default ChatComponent;