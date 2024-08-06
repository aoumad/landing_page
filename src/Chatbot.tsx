import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { ActionIcon, CloseButton, Menu } from '@mantine/core';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { FaMinus } from "react-icons/fa";

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
<div className={`absolute right-12 bottom-4 bg-white text-black flex flex-col overflow-hidden shadow-2xl ${isCollapsed ? 'w-12 h-12 rounded-full' : 'w-full max-w-md h-[calc(100%-32px)] rounded-lg max-h-[600px]'} ${isCollapsed ? '' : 'bg-gradient w-full max-w-sm h-[calc(100%-32px)] rounded-3xl max-h-[600px]'}`}>
      <button onClick={toggleChatbot} className={`absolute ${isCollapsed ? 'right-0 w-12 h-12 bg-blue-500 hover:bg-blue-400' : 'w-10 h-10 right-3 top-3 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-opacity-50 z-1"'}`}>
      {/* // <button onClick={toggleChatbot} className={`absolute ${isCollapsed ? 'right-0 w-12 h-12 bg-blue-500 hover:bg-blue-400' : 'none"'}`}> */}
      {isCollapsed ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" width="24" height="24"/></svg>
        ) : (
            <FaMinus size={15} color='white'/>
        )}
      </button>
      {!isCollapsed && (
        <>
          <div className='flex-grow w-full'>
            <Menu shadow="md" width={200} position="bottom-end" className="absolute right-16 top-3 w-10 h-10 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-opacity-50">
              <Menu.Target>
                <ActionIcon size={"md"} variant="white">
                  <PiDotsThreeOutlineFill size={15} color='white'/>
                </ActionIcon>
              </Menu.Target>
            </Menu>
          </div>
          {/* the second div will take the rest of the panel */}
          <div ref={messageBoxRef} className="h-1/2 bg-white overflow-auto rounded-3xl m-1 flex flex-col">
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;