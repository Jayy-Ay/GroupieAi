import { useEffect } from 'react';

interface Message {
  id: string; // or number, depending on your data
  content: string;
  sender: string; // Adjust the fields as per your actual data
  timestamp: Date; // or string, depending on your data format
}

interface ChatComponentProps {
  messages: Message[]; // Use the defined Message type
}

const ChatComponent = ({ messages }: ChatComponentProps) => {
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
      {/* Render messages here */}
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.sender}</strong>: {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatComponent;