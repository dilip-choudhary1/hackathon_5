import { TrendingUp, AlertCircle, CheckCircle, Calendar, Sparkles, Brain, Target, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { AISplitDetector } from './AISplitDetector';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const balanceData = [
  { day: 'Day 1', balance: 65250, predicted: 65250, upper: 66000, lower: 64500 },
  { day: 'Day 5', balance: 58000, predicted: 58500, upper: 60000, lower: 57000 },
  { day: 'Day 10', balance: 52000, predicted: 52500, upper: 54000, lower: 51000 },
  { day: 'Day 15', balance: 48500, predicted: 49000, upper: 51000, lower: 47500 },
  { day: 'Day 20', balance: null, predicted: 55000, upper: 58000, lower: 52000 },
  { day: 'Day 25', balance: null, predicted: 60000, upper: 63000, lower: 57000 },
  { day: 'Day 30', balance: null, predicted: 67500, upper: 71000, lower: 64000 },
];

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <Card className="lg:col-span-2 p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#002C5F] to-[#004080]">
          <div className="text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm opacity-90 mb-1">Current Balance</p>
                <h2 className="text-4xl">₹65,250</h2>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
            
            <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm opacity-90">30-Day AI Prediction</p>
                <Badge className="bg-white/20 text-white border-0">
                  <Brain className="h-3 w-3 mr-1" />
                  95% Confidence
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={balanceData}>
                  <defs>
                    <linearGradient id="confidenceArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F37021" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#F37021" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="day" 
                    stroke="rgba(255,255,255,0.6)"
                    tick={{ fill: 'rgba(255,255,255,0.8)' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.6)"
                    tick={{ fill: 'rgba(255,255,255,0.8)' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#002C5F', 
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="upper"
                    stroke="none"
                    fill="url(#confidenceArea)"
                  />
                  <Area
                    type="monotone"
                    dataKey="lower"
                    stroke="none"
                    fill="url(#confidenceArea)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="balance" 
                    stroke="#FFFFFF" 
                    strokeWidth={3}
                    dot={{ fill: '#FFFFFF', r: 5 }}
                    name="Actual"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#F37021" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#F37021', r: 4 }}
                    name="Predicted"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Financial Health Meter */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-[#002C5F] mb-4">Financial Health</h3>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="12"
                  strokeDasharray={`${70 * 2 * Math.PI * 0.75} ${70 * 2 * Math.PI}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                <span className="text-green-600">Safe</span>
              </div>
            </div>
            <p className="text-center text-gray-600">
              Your finances are in good shape
            </p>
          </div>
        </Card>

        {/* Expected Safe Balance */}
        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#F37021] to-[#FF8C42]">
          <div className="text-white">
            <Calendar className="h-8 w-8 mb-3 opacity-90" />
            <p className="text-sm opacity-90 mb-2">Expected Safe Balance</p>
            <h3 className="text-3xl mb-2">₹25,000</h3>
            <p className="text-sm opacity-90">For next month</p>
          </div>
        </Card>

        {/* Split Expense Summary */}
        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-purple-500 to-pink-600">
          <div className="text-white">
            <Users className="h-8 w-8 mb-3 opacity-90" />
            <p className="text-sm opacity-90 mb-2">Friends Owe You</p>
            <h3 className="text-3xl mb-2">₹3,600</h3>
            <p className="text-sm opacity-90">From 3 pending splits</p>
          </div>
        </Card>

        {/* Quick Stats */}
        <Card className="lg:col-span-2 p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-[#002C5F] mb-4">Quick Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">This Week Spending</p>
              <p className="text-2xl text-[#002C5F]">₹12,450</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Upcoming Bills</p>
              <p className="text-2xl text-[#002C5F]">₹23,000</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Available to Invest</p>
              <p className="text-2xl text-green-600">₹8,000</p>
            </div>
          </div>
        </Card>

        {/* AI Anomaly Detection */}
        <Card className="lg:col-span-3 p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-l-red-500">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-xl">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[#002C5F]">AI Anomaly Detected</h3>
                <Badge variant="destructive">Requires Attention</Badge>
              </div>
              <p className="text-gray-700 mb-3">
                Unusual spending of ₹4,500 detected in Shopping category on Nov 2 - this is 200% higher than your average. 
                Additionally, your Food & Dining expenses increased by 15% this month.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-white text-gray-700">Shopping: +200%</Badge>
                <Badge className="bg-white text-gray-700">Food: +15%</Badge>
                <Badge className="bg-white text-gray-700">Weekend Overspending</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Split Detection */}
        <div className="lg:col-span-3">
          <AISplitDetector />
        </div>

        {/* Smart Recommendations Preview */}
        <Card className="lg:col-span-3 p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#002C5F] mb-2">AI Smart Suggestions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <Target className="h-5 w-5 text-green-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Investment Opportunity</p>
                  <p className="text-[#002C5F]">Invest ₹5,000 in Low-Risk Fund</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <TrendingUp className="h-5 w-5 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Auto-Sweep Setup</p>
                  <p className="text-[#002C5F]">Transfer ₹10,000 to Smart FD</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-orange-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Safe to Spend</p>
                  <p className="text-[#002C5F]">₹3,000 available this week</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
