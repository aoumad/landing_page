import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ChatBot from './Chatbot';
import './index.css'
import { MantineProvider } from '@mantine/core';

const generateRandomId = () => 'chatbot_' + Math.random().toString(36).substring(2, 9);

function initializeChatbot() {
  const widgetRoot = document.createElement('div');
  widgetRoot.id = generateRandomId();
  document.body.appendChild(widgetRoot);

  ReactDOM.createRoot(widgetRoot!).render(
      <React.StrictMode>
        <MantineProvider>
          <ChatBot />
        </MantineProvider>,
      </React.StrictMode>
    )
}

initializeChatbot();
