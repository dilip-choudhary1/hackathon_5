import { TrendingUp, Shield, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PredictiveCashFlow } from './PredictiveCashFlow';
import { useState } from 'react';

const recommendations = [
  {
    id: 1,
    title: 'Invest in Low-Risk Mutual Fund',
    description: 'Based on your spending pattern, you can safely invest ₹5,000 in our recommended low-risk mutual fund for steady returns.',
    amount: '₹5,000',
    confidence: 'High',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    action: 'Invest Now',
  },
  {
    id: 2,
    title: 'Auto-sweep into Smart FD',
    description: 'Automatically transfer ₹10,000 into a Smart Fixed Deposit to earn higher interest while maintaining liquidity.',
    amount: '₹10,000',
    confidence: 'High',
    icon: Shield,
    color: 'from-blue-500 to-indigo-600',
    action: 'Set Up Auto-sweep',
  },
  {
    id: 3,
    title: 'Safe to Spend This Week',
    description: 'After considering all upcoming bills and maintaining safe balance, you can spend ₹3,000 on discretionary items.',
    amount: '₹3,000',
    confidence: 'Medium',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-600',
    action: 'View Details',
  },
  {
    id: 4,
    title: 'Upgrade to Premium Savings',
    description: 'Upgrade to our Premium Savings account to earn 2% more interest on your balance with zero fees.',
    amount: 'Extra ₹800/mo',
    confidence: 'High',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
    action: 'Learn More',
  },
];

export function InsightsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'High':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl text-[#002C5F] mb-2">AI-Driven Insights</h2>
        <p className="text-gray-600">Personalized recommendations based on your financial behavior</p>
      </div>

      {/* Carousel for large screens */}
      <div className="hidden lg:block relative mb-12">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {recommendations.map((rec) => {
              const Icon = rec.icon;
              return (
                <div key={rec.id} className="w-full flex-shrink-0 px-2">
                  <Card className="rounded-2xl shadow-xl border-0 overflow-hidden">
                    <div className={`bg-gradient-to-br ${rec.color} p-8 text-white`}>
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="h-12 w-12" />
                        <Badge className={getConfidenceColor(rec.confidence)}>
                          {rec.confidence} Confidence
                        </Badge>
                      </div>
                      <h3 className="text-2xl mb-3">{rec.title}</h3>
                      <p className="text-white/90 mb-4">{rec.description}</p>
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-3xl">{rec.amount}</span>
                        <Button 
                          size="lg"
                          className="bg-white text-[#002C5F] hover:bg-gray-100"
                        >
                          {rec.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white shadow-lg border-2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white shadow-lg border-2"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-[#F37021] w-8' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Grid for mobile/tablet */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          return (
            <Card key={rec.id} className="rounded-2xl shadow-xl border-0 overflow-hidden">
              <div className={`bg-gradient-to-br ${rec.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-10 w-10" />
                  <Badge className={getConfidenceColor(rec.confidence)}>
                    {rec.confidence}
                  </Badge>
                </div>
                <h3 className="text-xl mb-2">{rec.title}</h3>
                <p className="text-white/90 text-sm mb-4">{rec.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl">{rec.amount}</span>
                  <Button 
                    className="bg-white text-[#002C5F] hover:bg-gray-100"
                  >
                    {rec.action}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Predictive Cash Flow */}
      <div className="mt-12">
        <PredictiveCashFlow />
      </div>

      {/* Additional Insights Section */}
      <div className="mt-12">
        <h3 className="text-xl text-[#002C5F] mb-6">More Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-[#002C5F]">
              <p className="text-sm mb-2">Average Monthly Savings</p>
              <p className="text-3xl mb-2">₹18,500</p>
              <p className="text-sm text-gray-600">↑ 12% from last month</p>
            </div>
          </Card>
          <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="text-[#002C5F]">
              <p className="text-sm mb-2">Best Time to Invest</p>
              <p className="text-3xl mb-2">15th Nov</p>
              <p className="text-sm text-gray-600">After salary credit</p>
            </div>
          </Card>
          <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="text-[#002C5F]">
              <p className="text-sm mb-2">Spending Category</p>
              <p className="text-3xl mb-2">Food</p>
              <p className="text-sm text-gray-600">Top expense this month</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
