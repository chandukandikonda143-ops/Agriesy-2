
import React, { useState, useRef, useEffect } from 'react';
import { getCropAdvisory, identifyProblemFromImage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { CameraIcon, MicIcon } from '../components/Icons';

const AdvisoryView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am AgriBot, your personal AI farming consultant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;
    
    const newUserMsg: ChatMessage = { role: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    // getCropAdvisory returns a string directly now
    const response = await getCropAdvisory(text, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(',')[1];
      setMessages(prev => [...prev, { role: 'user', text: "[Uploaded an image for analysis]" }]);
      const response = await identifyProblemFromImage(base64);
      setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl mx-4 my-2">
      <div className="bg-white px-6 py-4 border-b flex items-center gap-3">
        <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
          <CameraIcon />
        </div>
        <div>
          <h2 className="font-bold text-gray-800">AI Crop Advisor</h2>
          <p className="text-xs text-emerald-500 font-medium">Online • Precision Analysis</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-700 shadow-sm border rounded-tl-none leading-relaxed'
            }`}>
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className={line.trim().startsWith('*') || line.trim().startsWith('-') ? 'ml-4 list-item' : 'mb-1'}>
                  {line.replace(/^[*+-]\s*/, '')}
                </p>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-4 border-t">
        <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-3 py-1">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <CameraIcon />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleImageUpload} 
          />
          <input
            type="text"
            placeholder="Ask about crops, pests..."
            className="flex-1 bg-transparent py-3 text-sm outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="bg-indigo-600 text-white p-2 rounded-xl disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryView;
