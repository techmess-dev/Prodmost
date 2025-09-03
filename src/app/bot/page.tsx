"use client";

import { useState, KeyboardEvent, ChangeEvent } from 'react';

type Sender = 'user' | 'bot';

type Message = {
	text: string;
	sender: Sender;
};

export default function ChatPage() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);

	const sendMessage = async () => {
		if (!input.trim()) return;
		const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
		setMessages(newMessages);
		setInput('');
		setLoading(true);

		try {
			const response = await fetch('/api/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: input })
			});
			const data = await response.json();
			setMessages([...newMessages, { text: data.answer, sender: 'bot' }]);
		} catch {
			setMessages([
				...newMessages,
				{ text: 'Something went wrong. Please try again.', sender: 'bot' }
			]);
		} finally {
			setLoading(false);
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') sendMessage();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<div className="bg-gray-100 h-screen flex flex-col">
			<div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4">
				{messages.map((msg, idx) => (
					<div
						key={idx}
						className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
					>
						{msg.sender === 'bot' && (
							<img
								src="https://api.dicebear.com/7.x/bottts/svg?seed=bot"
								alt="bot"
								className="w-8 h-8 rounded-full"
							/>
						)}
						<div
							className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-green-100' : 'bg-gray-200'}`}
						>
							{msg.text}
						</div>
						{msg.sender === 'user' && (
							<img
								src="https://api.dicebear.com/7.x/bottts/svg?seed=user"
								alt="user"
								className="w-8 h-8 rounded-full"
							/>
						)}
					</div>
				))}
				{loading && (
					<div className="italic text-gray-500 text-sm self-start">Bot is typing...</div>
				)}
			</div>
			<div className="p-4 bg-white border-t flex items-center space-x-2">
				<input
					type="text"
					value={input}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
					placeholder="Ask something..."
				/>
				<button
					onClick={sendMessage}
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
				>
					Send
				</button>
			</div>
		</div>
	);
}