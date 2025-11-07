import { X, Volume2, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const languages = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    sample: 'Your EMI of ₹15,000 is due in 3 days.',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    sample: 'आपकी ₹15,000 की EMI 3 दिनों में देय है।',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    sample: 'உங்கள் ₹15,000 EMI 3 நாட்களில் செலுத்த வேண்டும்.',
  },
];

export function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-2xl rounded-2xl shadow-2xl border-0 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002C5F] to-[#004080] p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl">Language & Accessibility</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <p className="text-white/80">Select your preferred language for alerts and notifications</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Language Selection */}
          <div>
            <h3 className="text-[#002C5F] mb-4">Choose Language</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedLanguage === lang.code
                      ? 'border-[#F37021] bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#002C5F]">{lang.name}</span>
                    {selectedLanguage === lang.code && (
                      <Check className="h-5 w-5 text-[#F37021]" />
                    )}
                  </div>
                  <span className="text-2xl">{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Preview Box */}
          <div>
            <h3 className="text-[#002C5F] mb-4">Preview</h3>
            <Card className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#F37021] flex items-center justify-center">
                  <span className="text-white">🔔</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Payment Reminder</p>
                  <p className="text-[#002C5F]">
                    {languages.find(l => l.code === selectedLanguage)?.sample}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Play Audio Demo
              </Button>
            </Card>
          </div>

          {/* Accessibility Features */}
          <div>
            <h3 className="text-[#002C5F] mb-4">Accessibility Features</h3>
            <div className="space-y-3">
              <Card className="p-4 rounded-xl border-2 border-gray-200 flex items-center justify-between">
                <div>
                  <p className="text-[#002C5F] mb-1">Voice Alerts</p>
                  <p className="text-sm text-gray-600">Hear important notifications</p>
                </div>
                <div className="w-12 h-6 bg-[#F37021] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </Card>
              <Card className="p-4 rounded-xl border-2 border-gray-200 flex items-center justify-between">
                <div>
                  <p className="text-[#002C5F] mb-1">High Contrast Mode</p>
                  <p className="text-sm text-gray-600">Better visibility for text</p>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </Card>
              <Card className="p-4 rounded-xl border-2 border-gray-200 flex items-center justify-between">
                <div>
                  <p className="text-[#002C5F] mb-1">Large Text</p>
                  <p className="text-sm text-gray-600">Increase font size</p>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-300"
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            className="bg-[#F37021] hover:bg-[#E06010] text-white"
          >
            Save Preferences
          </Button>
        </div>
      </Card>
    </div>
  );
}
