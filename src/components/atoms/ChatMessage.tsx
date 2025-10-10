import React from 'react';
import { AllowedColors } from '@/types/AllowedOptions';

interface Props {
   children: React.ReactNode;
   color?: `chat-bubble-${AllowedColors}` | null;
   chatDirection?: 'chat-start' | 'chat-end';
}

function ChatMessage({ children, color, chatDirection = 'chat-start' }: Props) {
   return (
      <div className={`chat ${chatDirection}`} data-testid="chat">
         <div className={`chat-bubble ${color}`} data-testid="chat-bubble">
            {children}
         </div>
      </div>
   );
}

export default ChatMessage;
