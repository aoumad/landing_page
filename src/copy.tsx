import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  sent: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const messageBoxRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (isRunning || inputMessage.trim() === '') return;
    setIsRunning(true);
    addMessage(inputMessage, true);
    setInputMessage('');
    setTimeout(() => addMessage(inputMessage, false), 1000);
  };

  const addMessage = (text: string, sent: boolean) => {
    setMessages(prevMessages => [...prevMessages, { text, sent }]);
    setIsRunning(false);
  };

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChatbot = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      setTimeout(() => addMessage("Hi", false), 1000);
    }
  };

  return (
    <div className={`fixed right-0 bottom-0 m-4 bg-white text-black flex flex-col overflow-hidden transition-all duration-500 shadow-lg ${isCollapsed ? 'w-12 h-12 rounded-full' : 'w-full max-w-md h-[calc(100%-32px)] rounded-lg max-h-[600px]'}`}>
      <button onClick={toggleChatbot} className="absolute right-0 w-12 h-12 bg-purple-700 hover:bg-purple-600 text-white p-3">
        {isCollapsed ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        )}
      </button>
      {!isCollapsed && (
        <>
          <div className="bg-purple-700 text-white text-lg font-bold flex h-12">
            <div className="h-12 w-12 flex ml-2">
              <svg viewBox="0 0 640 512" className="h-6 m-auto"><path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" /></svg>
            </div>
            <span className="my-auto ml-2">Chatbot</span>
          </div>
          <div ref={messageBoxRef} className="flex-grow overflow-auto rounded-lg p-4 flex flex-col">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
                <div className={`${message.sent ? 'bg-purple-100 rounded-lg rounded-br-sm' : 'bg-gray-100 rounded-lg rounded-bl-sm'} px-4 py-2 max-w-[75%] my-2`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="h-px bg-purple-700 opacity-20 w-full"></div>
          <div className="h-12 flex">
            <input
              className="flex-grow px-4 focus:outline-none"
              type="text"
              placeholder="Type your message ..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="w-12 h-12 hover:bg-purple-100">
              <svg className="w-6 h-6 mx-auto fill-purple-700" viewBox="0 0 24 24">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;