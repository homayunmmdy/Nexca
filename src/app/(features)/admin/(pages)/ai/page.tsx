'use client';
import { useState, useRef, useEffect, FormEvent } from 'react';
import {Button, ChatMessage, Input} from "@/components/atoms";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello! How can I help you today?' }
    ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/groq/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage]
                })
            });

            if (!response.ok) throw new Error('Network response was not ok');
      if (!response.body) throw new Error('No response body');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                assistantMessage += chunk;
                setMessages(prev => {
                    const lastMsg = prev[prev.length - 1];
          if (lastMsg?.role === 'assistant') {
                        return [...prev.slice(0, -1), { ...lastMsg, content: lastMsg.content + chunk }];
                    } else {
                        return [...prev, { role: 'assistant', content: assistantMessage }];
                    }
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <ChatMessage chatDirection={msg.role === 'user' ? 'chat-end' : 'chat-start'} color={msg.role === 'user' ? null : 'chat-bubble-primary'}>
                            {msg.content}
                        </ChatMessage>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 max-w-xs">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex space-x-2">
                    <Input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        color='input-primary'
                        className='w-full'
                        disabled={isLoading}
                    />
                    <Button
                        type='submit'
                        disabled={isLoading || !input.trim()}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}