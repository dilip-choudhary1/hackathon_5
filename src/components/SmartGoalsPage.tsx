import { Target, TrendingUp, Calendar, Sparkles, Plus, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const goals = [
  {
    id: 1,
    title: 'Emergency Fund',
    target: 100000,
    current: 65000,
    deadline: 'Dec 2025',
    category: 'Safety',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-600',
    aiSuggestion: 'Save ₹3,500/month to reach goal on time',
    onTrack: true,
    monthlyContribution: 3500,
  },
  {
    id: 2,
    title: 'Dream Vacation',
    target: 150000,
    current: 45000,
    deadline: 'Jun 2026',
    category: 'Lifestyle',
    icon: '✈️',
    color: 'from-blue-500 to-indigo-600',
    aiSuggestion: 'Increase to ₹8,750/month to stay on track',
    onTrack: false,
    monthlyContribution: 5000,
  },
  {
    id: 3,
    title: 'New Car',
    target: 500000,
    current: 125000,
    deadline: 'Dec 2026',
    category: 'Asset',
    icon: '🚗',
    color: 'from-purple-500 to-pink-600',
    aiSuggestion: 'On track with ₹25,000/month',
    onTrack: true,
    monthlyContribution: 25000,
  },
  {
    id: 4,
    title: 'Retirement Fund',
    target: 5000000,
    current: 850000,
    deadline: '2045',
    category: 'Long-term',
    icon: '🏖️',
    color: 'from-orange-500 to-red-600',
    aiSuggestion: 'Invest in equity funds for better returns',
    onTrack: true,
    monthlyContribution: 15000,
  },
];

export function SmartGoalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-[#002C5F] mb-2">Smart Financial Goals</h2>
          <p className="text-gray-600">AI-powered goal tracking and recommendations</p>
        </div>
        <Button className="bg-[#F37021] hover:bg-[#E06010]">
          <Plus className="h-4 w-4 mr-2" />
          Add New Goal
        </Button>
      </div>

      {/* AI Overview Card */}
      <Card className="p-6 rounded-2xl shadow-lg border-0 mb-8 bg-gradient-to-br from-[#002C5F] to-[#004080]">
        <div className="flex items-start gap-4 text-white">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2">AI Goal Analysis</h3>
            <p className="text-white/90 mb-4">
              You're on track with 3 out of 4 goals! To achieve your Dream Vacation goal, consider redirecting ₹3,750 from your monthly surplus. 
              Your Emergency Fund is 65% complete - excellent progress! 🎉
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-1">Total Goals Value</p>
                <p className="text-2xl">₹57.5L</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-1">Amount Saved</p>
                <p className="text-2xl">₹10.9L</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-1">Avg. Progress</p>
                <p className="text-2xl">47%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <Card key={goal.id} className="rounded-2xl shadow-lg border-0 overflow-hidden">
              <div className={`bg-gradient-to-br ${goal.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{goal.icon}</span>
                    <div>
                      <h3 className="text-xl mb-1">{goal.title}</h3>
                      <Badge className="bg-white/20 text-white border-0">
                        {goal.category}
                      </Badge>
                    </div>
                  </div>
                  {goal.onTrack && (
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                      <Check className="h-5 w-5" />
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3 bg-white/20" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Current</p>
                    <p className="text-xl">₹{(goal.current / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90 mb-1">Target</p>
                    <p className="text-xl">₹{(goal.target / 1000).toFixed(0)}K</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Target: {goal.deadline}</span>
                </div>

                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm mb-4">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{goal.aiSuggestion}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-white text-gray-800 hover:bg-gray-100">
                    Contribute
                  </Button>
                  <Button variant="outline" className="flex-1 border-white text-white hover:bg-white/20">
                    Adjust Goal
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Monthly Contribution</span>
                  <span className="text-[#002C5F]">₹{goal.monthlyContribution.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Remaining</span>
                  <span className="text-[#002C5F]">₹{remaining.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* AI Recommendations */}
      <Card className="p-6 rounded-2xl shadow-lg border-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#F37021] rounded-xl">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl text-[#002C5F]">AI-Powered Strategies</h3>
            <p className="text-sm text-gray-600">Personalized tips to reach your goals faster</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
            <Target className="h-8 w-8 text-blue-600 mb-3" />
            <h4 className="text-[#002C5F] mb-2">Optimize Allocation</h4>
            <p className="text-sm text-gray-600">
              Redistribute ₹2,000 from low-priority goals to accelerate your Emergency Fund by 2 months.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
            <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
            <h4 className="text-[#002C5F] mb-2">Auto-Invest Setup</h4>
            <p className="text-sm text-gray-600">
              Enable auto-invest on salary day to ensure consistent progress without manual effort.
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
            <Sparkles className="h-8 w-8 text-purple-600 mb-3" />
            <h4 className="text-[#002C5F] mb-2">Tax-Saving Tip</h4>
            <p className="text-sm text-gray-600">
              Invest ₹50,000 in ELSS funds before March to save ₹15,600 in taxes under 80C.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
