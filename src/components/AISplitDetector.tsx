import { Brain, Users, Check, X, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DetectedSplit {
  id: number;
  date: string;
  merchant: string;
  amount: number;
  category: string;
  confidence: number;
  reason: string;
  suggestedSplitCount: number;
  similarPastTransactions: number;
}

const detectedSplits: DetectedSplit[] = [
  {
    id: 1,
    date: 'Nov 5, 2025',
    merchant: 'Starbucks Coffee',
    amount: 900,
    category: 'Food & Dining',
    confidence: 88,
    reason: 'Amount matches typical 3-person coffee order. Similar to your Oct 28 split.',
    suggestedSplitCount: 3,
    similarPastTransactions: 2,
  },
  {
    id: 2,
    date: 'Nov 4, 2025',
    merchant: 'PVR Cinemas',
    amount: 2400,
    category: 'Entertainment',
    confidence: 92,
    reason: 'Round amount typical for 4 movie tickets. Weekend transaction pattern detected.',
    suggestedSplitCount: 4,
    similarPastTransactions: 3,
  },
  {
    id: 3,
    date: 'Nov 3, 2025',
    merchant: 'Swiggy Food Delivery',
    amount: 1500,
    category: 'Food & Dining',
    confidence: 75,
    reason: 'Large order amount suggests group meal. Matches your dinner time pattern.',
    suggestedSplitCount: 3,
    similarPastTransactions: 1,
  },
];

export function AISplitDetector() {
  const [dismissedIds, setDismissedIds] = useState<number[]>([]);
  const [acceptedIds, setAcceptedIds] = useState<number[]>([]);

  const activeSuggestions = detectedSplits.filter(
    split => !dismissedIds.includes(split.id) && !acceptedIds.includes(split.id)
  );

  const handleAccept = (id: number) => {
    setAcceptedIds([...acceptedIds, id]);
  };

  const handleDismiss = (id: number) => {
    setDismissedIds([...dismissedIds, id]);
  };

  if (activeSuggestions.length === 0) {
    return null;
  }

  return (
    <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm animate-pulse">
          <Brain className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1">AI Split Detection</h3>
          <p className="text-sm text-white/90">
            {activeSuggestions.length} transaction{activeSuggestions.length !== 1 ? 's' : ''} detected as potential group expenses
          </p>
        </div>
        <Badge className="bg-white/20 text-white border-0">
          {activeSuggestions.reduce((sum, s) => sum + s.confidence, 0) / activeSuggestions.length}% Avg Confidence
        </Badge>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="space-y-3">
          {activeSuggestions.map((split) => (
            <motion.div
              key={split.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-4 rounded-xl bg-white text-gray-800">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[#002C5F]">{split.merchant}</p>
                      <Badge variant="secondary" className="text-xs">{split.category}</Badge>
                      <Badge className="bg-purple-100 text-purple-700 border-0 text-xs">
                        {split.confidence}% confidence
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{split.date}</p>
                    
                    <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg mb-3">
                      <Brain className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-blue-900 mb-1">AI Analysis:</p>
                        <p className="text-sm text-blue-800">{split.reason}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">Suggested split: {split.suggestedSplitCount} people</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">{split.similarPastTransactions} similar past splits</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right ml-4">
                    <p className="text-2xl text-[#002C5F] mb-1">₹{split.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">₹{Math.round(split.amount / split.suggestedSplitCount)} per person</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                    onClick={() => handleDismiss(split.id)}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Not a Split
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#F37021] hover:bg-[#E06010] text-white"
                    onClick={() => handleAccept(split.id)}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Create Split
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
        <p className="text-xs text-white/80 mb-2">How AI Detection Works:</p>
        <ul className="text-xs text-white/70 space-y-1">
          <li>• Analyzes transaction amounts, merchants, and timing</li>
          <li>• Learns from your past split expense patterns</li>
          <li>• Detects round amounts typical of group payments</li>
          <li>• Considers weekend/evening social activity patterns</li>
        </ul>
      </div>
    </Card>
  );
}
