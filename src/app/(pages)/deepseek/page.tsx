'use client';
import { useState } from 'react';

export default function DeepSeekForm() {
    const [prompt, setPrompt] = useState('');

    const [loading, setLoading] = useState(false);

    const [chatHistory, setChatHistory] = useState<
        Array<{
            text: string;
            isMessage: boolean;
            timestamp: number;
        }>
    >([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setChatHistory((prev) => [
            ...prev,
            { text: prompt, isMessage: true, timestamp: Date.now() },
        ]);
        setPrompt('');

        const res = await fetch('/api/deepseek', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await res.json();

        setLoading(false);
        setChatHistory((prev) => [
            ...prev,
            { text: data.response, isMessage: false, timestamp: Date.now() + 1 },
        ]);
    };

    return (
        <div className='p-6 w-full max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4'>
            <div className='space-y-4 mb-4 max-h-96 overflow-y-auto'>
                {chatHistory
                    .sort((a, b) => a.timestamp - b.timestamp)
                    .map((chat, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                chat.isMessage ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`p-3 rounded-lg max-w-xs ${
                                    chat.isMessage
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-black'
                                }`}
                            >
                                {chat.text}
                            </div>
                        </div>
                    ))}
            </div>

            <form onSubmit={handleSubmit} className='space-y-4 text-black'>
        <textarea
            className='w-full p-2 border rounded-md'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Enter your prompt'
        />
                <button
                    type='submit'
                    className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 justify-center flex items-center'
                >
                    {loading ? (
                        <div className='animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full' />
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </div>
    );
}