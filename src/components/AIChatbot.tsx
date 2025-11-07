import { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const aiResponses: Record<string, string> = {
  balance: "Your current balance is ₹65,250. Based on your spending pattern, I predict it will be around ₹67,500 by end of month. You're doing great! 🎉",
  payment: "You have 3 upcoming payments totaling ₹23,000 this week. Your Car EMI of ₹15,000 is most urgent - due in 3 days.",
  invest: "Great question! Based on your surplus of ₹8,000, I recommend investing ₹5,000 in our Low-Risk Mutual Fund (7.2% returns) and keeping ₹3,000 as emergency buffer.",
  save: "Your average monthly savings is ₹18,500 - that's 22% of your income! To reach your goal faster, try the 50/30/20 rule: 50% needs, 30% wants, 20% savings.",
  spending: "Your top spending category this month is Food (₹8,450). That's 15% higher than last month. Would you like tips to optimize this?",
  default: "I'm your AI financial assistant! I can help you with balance predictions, payment reminders, investment advice, savings tips, and spending analysis. What would you like to know?"
};

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI Financial Coach. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('balance') || lowerInput.includes('money')) {
      return aiResponses.balance;
    } else if (lowerInput.includes('payment') || lowerInput.includes('emi') || lowerInput.includes('bill')) {
      return aiResponses.payment;
    } else if (lowerInput.includes('invest') || lowerInput.includes('investment')) {
      return aiResponses.invest;
    } else if (lowerInput.includes('save') || lowerInput.includes('saving')) {
      return aiResponses.save;
    } else if (lowerInput.includes('spend') || lowerInput.includes('expense')) {
      return aiResponses.spending;
    } else {
      return aiResponses.default;
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAIResponse(input),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    'Check my balance',
    'Upcoming payments',
    'Investment advice',
    'Spending analysis'
  ];

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-16 w-16 rounded-full bg-gradient-to-br from-[#F37021] to-[#FF8C42] hover:shadow-2xl shadow-lg transition-all duration-300 hover:scale-110"
            >
              <div className="relative">
                <Bot className="h-8 w-8 text-white" />
                <Sparkles className="h-4 w-4 text-white absolute -top-1 -right-1 animate-pulse" />
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className={`rounded-2xl shadow-2xl border-0 overflow-hidden ${
              isMinimized ? 'w-80' : 'w-96 h-[600px]'
            }`}>
              {/* Header */}
              <div className="bg-gradient-to-r from-[#F37021] to-[#FF8C42] p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="font-semibold">AI Financial Coach</p>
                      <p className="text-xs opacity-90">Always here to help</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 rounded-full"
                      onClick={() => setIsMinimized(!isMinimized)}
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 rounded-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              message.sender === 'user'
                                ? 'bg-[#002C5F] text-white'
                                : 'bg-white text-gray-800 shadow-md'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                      
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  {messages.length === 1 && (
                    <div className="px-4 py-2 bg-white border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
                      <div className="flex flex-wrap gap-2">
                        {quickActions.map((action, index) => (
                          <button
                            key={index}
                            onClick={() => setInput(action)}
                            className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask me anything..."
                        className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:border-[#F37021] focus:outline-none"
                      />
                      <Button
                        onClick={handleSend}
                        className="rounded-full bg-[#F37021] hover:bg-[#E06010]"
                        size="icon"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
