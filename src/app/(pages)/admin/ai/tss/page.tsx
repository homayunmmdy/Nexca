'use client';

import { useState, useRef } from 'react';

export default function TextToSpeechPage() {
    const [text, setText] = useState('I love building and shipping new features for our users!');
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        setIsLoading(true);

        try {
            const response = await fetch('/api/groq/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate speech');
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            if (audioRef.current) {
                audioRef.current.src = audioUrl;
                audioRef.current.play().catch(e => console.error('Playback failed:', e));
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">Text to Speech</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="text" className="block mb-2 font-medium">
                        Enter your text
                    </label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full p-2 border rounded-md min-h-[100px]"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 py-2 rounded-md text-white ${
                        isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    {isLoading ? 'Generating...' : 'Generate Speech'}
                </button>
            </form>

            <audio ref={audioRef} controls className="mt-4 w-full" />
        </div>
    );
}