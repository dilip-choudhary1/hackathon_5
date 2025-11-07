import { TrendingUp, TrendingDown, Wallet, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface CashFlowEvent {
  date: string;
  day: number;
  type: 'income' | 'expense' | 'investment';
  title: string;
  amount: number;
  runningBalance: number;
  category: string;
  confidence: number;
}

const cashFlowEvents: CashFlowEvent[] = [
  {
    date: 'Nov 6',
    day: 6,
    type: 'expense',
    title: 'Car EMI',
    amount: -15000,
    runningBalance: 50250,
    category: 'EMI',
    confidence: 100,
  },
  {
    date: 'Nov 8',
    day: 8,
    type: 'expense',
    title: 'Insurance Premium',
    amount: -8000,
    runningBalance: 42250,
    category: 'Insurance',
    confidence: 100,
  },
  {
    date: 'Nov 10',
    day: 10,
    type: 'expense',
    title: 'Credit Card Bill',
    amount: -12500,
    runningBalance: 29750,
    category: 'Bills',
    confidence: 95,
  },
  {
    date: 'Nov 15',
    day: 15,
    type: 'income',
    title: 'Salary Credit',
    amount: 85000,
    runningBalance: 114750,
    category: 'Salary',
    confidence: 100,
  },
  {
    date: 'Nov 17',
    day: 17,
    type: 'investment',
    title: 'Mutual Fund SIP',
    amount: -5000,
    runningBalance: 109750,
    category: 'Investment',
    confidence: 90,
  },
  {
    date: 'Nov 18',
    day: 18,
    type: 'expense',
    title: 'Home Loan EMI',
    amount: -25000,
    runningBalance: 84750,
    category: 'EMI',
    confidence: 100,
  },
  {
    date: 'Nov 22',
    day: 22,
    type: 'expense',
    title: 'Groceries & Shopping',
    amount: -8500,
    runningBalance: 76250,
    category: 'Shopping',
    confidence: 75,
  },
  {
    date: 'Nov 25',
    day: 25,
    type: 'investment',
    title: 'Auto-sweep to FD',
    amount: -10000,
    runningBalance: 66250,
    category: 'Savings',
    confidence: 85,
  },
];

export function PredictiveCashFlow() {
  const currentBalance = 65250;
  const minBalance = Math.min(...cashFlowEvents.map(e => e.runningBalance));
  const maxBalance = Math.max(...cashFlowEvents.map(e => e.runningBalance));

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'income':
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'expense':
        return <TrendingDown className="h-5 w-5 text-red-600" />;
      default:
        return <Wallet className="h-5 w-5 text-blue-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'income':
        return 'from-green-500 to-emerald-600';
      case 'expense':
        return 'from-red-500 to-rose-600';
      default:
        return 'from-blue-500 to-indigo-600';
    }
  };

  const getBalanceStatus = (balance: number) => {
    if (balance < 30000) return { text: 'Risk', color: 'text-red-600', bg: 'bg-red-100' };
    if (balance < 50000) return { text: 'Watch', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { text: 'Safe', color: 'text-green-600', bg: 'bg-green-100' };
  };

  return (
    <Card className="p-6 rounded-2xl shadow-lg border-0">
      <div className="mb-6">
        <h3 className="text-xl text-[#002C5F] mb-2">Predictive Cash Flow Timeline</h3>
        <p className="text-gray-600">AI-forecasted balance changes for next 30 days</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">Current</p>
          <p className="text-2xl text-[#002C5F]">₹{currentBalance.toLocaleString()}</p>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">Lowest Point</p>
          <p className="text-2xl text-red-600">₹{minBalance.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Nov 10</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">Highest Point</p>
          <p className="text-2xl text-green-600">₹{maxBalance.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Nov 15</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#002C5F] via-[#F37021] to-[#002C5F]"></div>

        {/* Events */}
        <div className="space-y-6">
          {cashFlowEvents.map((event, index) => {
            const status = getBalanceStatus(event.runningBalance);
            const isLowBalance = event.runningBalance < 30000;

            return (
              <div key={index} className="relative pl-20">
                {/* Timeline Dot */}
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br ${getTypeColor(event.type)} flex items-center justify-center shadow-lg z-10`}>
                  {getTypeIcon(event.type)}
                </div>

                {/* Event Card */}
                <Card className={`p-4 rounded-xl ${isLowBalance ? 'border-2 border-red-300 bg-red-50' : 'bg-white'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm text-gray-600">{event.date}</p>
                        <Badge variant="secondary" className="text-xs">{event.category}</Badge>
                        {event.confidence < 100 && (
                          <Badge variant="outline" className="text-xs">
                            {event.confidence}% confidence
                          </Badge>
                        )}
                      </div>
                      <p className="text-[#002C5F]">{event.title}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl ${
                        event.type === 'income' ? 'text-green-600' : 'text-gray-800'
                      }`}>
                        {event.amount > 0 ? '+' : ''}₹{Math.abs(event.amount).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Running Balance:</span>
                      <span className="text-[#002C5F]">₹{event.runningBalance.toLocaleString()}</span>
                      <Badge className={`${status.bg} ${status.color} border-0`}>
                        {status.text}
                      </Badge>
                    </div>
                    {isLowBalance && (
                      <div className="flex items-center gap-1 text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs">Low Balance Alert</span>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Recommendation */}
      <Card className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <AlertCircle className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-[#002C5F] mb-1">AI Warning</p>
            <p className="text-sm text-gray-700">
              Your balance will drop to ₹29,750 on Nov 10 after credit card payment. 
              Consider postponing the ₹10,000 auto-sweep or reduce discretionary spending by ₹5,000 before this date.
            </p>
          </div>
        </div>
      </Card>
    </Card>
  );
}
