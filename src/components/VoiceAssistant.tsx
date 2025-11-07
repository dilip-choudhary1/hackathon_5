import { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';

export function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const voiceCommands = [
    { command: 'Check balance', response: 'Your current balance is ₹65,250' },
    { command: 'Next payment', response: 'Your next payment is Car EMI of ₹15,000 due in 3 days' },
    { command: 'Financial health', response: 'Your financial health is Safe. You are on track with your goals' },
    { command: 'Investment advice', response: 'Based on your surplus, I recommend investing ₹5,000 in low-risk mutual funds' },
  ];

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    let foundResponse = 'I can help you with balance checks, payment reminders, financial health, and investment advice. What would you like to know?';

    voiceCommands.forEach(vc => {
      if (lowerCommand.includes(vc.command.toLowerCase())) {
        foundResponse = vc.response;
      }
    });

    setResponse(foundResponse);
    setIsSpeaking(true);
    
    // Simulate speaking duration
    setTimeout(() => {
      setIsSpeaking(false);
    }, 3000);
  };

  const toggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      setTranscript('');
      setResponse('');
      
      // Simulate voice recognition
      setTimeout(() => {
        const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
        setTranscript(randomCommand.command);
        setIsListening(false);
        setTimeout(() => handleVoiceCommand(randomCommand.command), 500);
      }, 2000);
    } else {
      setIsListening(false);
    }
  };

  return (
    <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#002C5F] to-[#004080]">
      <div className="text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="mb-2">Voice Assistant</h3>
            <p className="text-sm text-white/80">Ask me anything about your finances</p>
          </div>
          <Badge className="bg-white/20 text-white border-0">
            AI-Powered
          </Badge>
        </div>

        {/* Voice Button */}
        <div className="flex flex-col items-center mb-6">
          <button
            onClick={toggleListening}
            className={`relative w-32 h-32 rounded-full transition-all duration-300 ${
              isListening 
                ? 'bg-red-500 shadow-2xl shadow-red-500/50 scale-110' 
                : 'bg-[#F37021] hover:bg-[#E06010] shadow-xl'
            }`}
          >
            <div className="flex items-center justify-center">
              {isListening ? (
                <MicOff className="h-12 w-12 text-white" />
              ) : (
                <Mic className="h-12 w-12 text-white" />
              )}
            </div>
            
            {/* Pulse Animation when listening */}
            {isListening && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                />
              </>
            )}
          </button>

          <p className="text-sm mt-4 text-white/80">
            {isListening ? 'Listening...' : 'Tap to speak'}
          </p>
        </div>

        {/* Transcript */}
        <AnimatePresence>
          {transcript && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
            >
              <p className="text-xs text-white/60 mb-1">You said:</p>
              <p className="text-white">{transcript}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response */}
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-[#F37021] rounded-xl"
            >
              <div className="flex items-start gap-3">
                {isSpeaking ? (
                  <Volume2 className="h-5 w-5 animate-pulse flex-shrink-0" />
                ) : (
                  <VolumeX className="h-5 w-5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="text-xs text-white/80 mb-1">Response:</p>
                  <p className="text-white">{response}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Commands */}
        {!isListening && !transcript && (
          <div className="mt-6">
            <p className="text-xs text-white/60 mb-3">Try saying:</p>
            <div className="grid grid-cols-2 gap-2">
              {voiceCommands.map((cmd, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setTranscript(cmd.command);
                    handleVoiceCommand(cmd.command);
                  }}
                  className="text-left text-sm p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  "{cmd.command}"
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
