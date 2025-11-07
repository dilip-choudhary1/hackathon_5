import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingDown, TrendingUp, AlertTriangle, Sparkles, ShoppingBag, Utensils, Car, Home, Zap, Phone, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const categoryData = [
  { name: 'Food & Dining', value: 8450, icon: Utensils, color: '#F37021', budget: 7000 },
  { name: 'Transportation', value: 6200, icon: Car, color: '#002C5F', budget: 6000 },
  { name: 'Shopping', value: 4800, icon: ShoppingBag, color: '#3B82F6', budget: 5000 },
  { name: 'Utilities', value: 3500, icon: Zap, color: '#10B981', budget: 3500 },
  { name: 'Housing', value: 2800, icon: Home, color: '#8B5CF6', budget: 3000 },
  { name: 'Mobile/Internet', value: 1200, icon: Phone, color: '#F59E0B', budget: 1500 },
];

const monthlyTrend = [
  { month: 'Jan', spending: 22000, income: 85000 },
  { month: 'Feb', spending: 24500, income: 85000 },
  { month: 'Mar', spending: 23800, income: 85000 },
  { month: 'Apr', spending: 26200, income: 85000 },
  { month: 'May', spending: 25100, income: 85000 },
  { month: 'Jun', spending: 26950, income: 85000 },
];

const weeklyData = [
  { day: 'Mon', amount: 1200 },
  { day: 'Tue', amount: 800 },
  { day: 'Wed', amount: 2100 },
  { day: 'Thu', amount: 950 },
  { day: 'Fri', amount: 1800 },
  { day: 'Sat', amount: 3200 },
  { day: 'Sun', amount: 2400 },
];

const anomalies = [
  {
    id: 1,
    date: 'Nov 2, 2025',
    category: 'Shopping',
    amount: 4500,
    average: 1500,
    description: 'Unusual electronics purchase detected',
    severity: 'high',
  },
  {
    id: 2,
    date: 'Nov 1, 2025',
    category: 'Food',
    amount: 1800,
    average: 400,
    description: 'Higher than usual dining expense',
    severity: 'medium',
  },
];

export function SpendingAnalysisPage() {
  const totalSpending = categoryData.reduce((sum, cat) => sum + cat.value, 0);
  const totalBudget = categoryData.reduce((sum, cat) => sum + cat.budget, 0);
  const budgetUtilization = (totalSpending / totalBudget) * 100;

  const COLORS = categoryData.map(cat => cat.color);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#002C5F] mb-2">Smart Spending Analysis</h2>
        <p className="text-gray-600">AI-powered insights into your spending patterns</p>
      </div>

      {/* AI Insights Banner */}
      <Card className="p-6 rounded-2xl shadow-lg border-0 mb-8 bg-gradient-to-br from-[#F37021] to-[#FF8C42]">
        <div className="flex items-start gap-4 text-white">
          <Sparkles className="h-8 w-8 flex-shrink-0" />
          <div>
            <h3 className="mb-2">AI Detected Insights</h3>
            <p className="text-white/90 mb-4">
              Your Food & Dining expenses increased by 15% this month. Consider meal planning to save ₹1,200/month. 
              Your weekend spending is 2.3x higher than weekdays - setting a weekend budget could help optimize expenses.
              <strong> Note:</strong> ₹3,600 of your spending is split expenses - your actual cost is ₹2,400 lower!
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/20 text-white border-0">15% increase in dining</Badge>
              <Badge className="bg-white/20 text-white border-0">Weekend overspending</Badge>
              <Badge className="bg-white/20 text-white border-0">Potential savings: ₹1,200</Badge>
              <Badge className="bg-white/20 text-white border-0">
                <Users className="h-3 w-3 mr-1 inline" />
                ₹3,600 in splits
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <p className="text-sm opacity-90 mb-2">Total Spending</p>
          <p className="text-3xl mb-2">₹{totalSpending.toLocaleString()}</p>
          <div className="flex items-center gap-1 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>8% vs last month</span>
          </div>
        </Card>

        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
          <p className="text-sm opacity-90 mb-2">Budget Left</p>
          <p className="text-3xl mb-2">₹{(totalBudget - totalSpending).toLocaleString()}</p>
          <div className="flex items-center gap-1 text-sm">
            <span>{Math.round(100 - budgetUtilization)}% remaining</span>
          </div>
        </Card>

        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
          <p className="text-sm opacity-90 mb-2">Avg. Daily</p>
          <p className="text-3xl mb-2">₹{Math.round(totalSpending / 30)}</p>
          <div className="flex items-center gap-1 text-sm">
            <TrendingDown className="h-4 w-4" />
            <span>3% lower than target</span>
          </div>
        </Card>

        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-orange-500 to-red-600 text-white">
          <p className="text-sm opacity-90 mb-2">Anomalies</p>
          <p className="text-3xl mb-2">{anomalies.length}</p>
          <div className="flex items-center gap-1 text-sm">
            <AlertTriangle className="h-4 w-4" />
            <span>Needs attention</span>
          </div>
        </Card>

        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
          <p className="text-sm opacity-90 mb-2">Split Expenses</p>
          <p className="text-3xl mb-2">₹6,000</p>
          <div className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4" />
            <span>₹3,600 to collect</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Category Breakdown Pie Chart */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-[#002C5F] mb-4">Spending by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Category Details */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-[#002C5F] mb-4">Budget Utilization</h3>
          <div className="space-y-4">
            {categoryData.map((category, index) => {
              const Icon = category.icon;
              const utilization = (category.value / category.budget) * 100;
              const isOverBudget = utilization > 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${category.color}20` }}>
                        <Icon className="h-4 w-4" style={{ color: category.color }} />
                      </div>
                      <span className="text-sm text-[#002C5F]">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#002C5F]">₹{category.value.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">of ₹{category.budget.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={Math.min(utilization, 100)} 
                      className="h-2"
                      style={{ 
                        '--progress-background': isOverBudget ? '#EF4444' : category.color 
                      } as React.CSSProperties}
                    />
                    <span className={`text-xs ${isOverBudget ? 'text-red-500' : 'text-gray-600'}`}>
                      {Math.round(utilization)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Monthly Trend */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-[#002C5F] mb-4">6-Month Spending Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="spending" 
                  stroke="#F37021" 
                  strokeWidth={3}
                  name="Spending"
                  dot={{ fill: '#F37021', r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#002C5F" 
                  strokeWidth={3}
                  name="Income"
                  dot={{ fill: '#002C5F', r: 5 }}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Weekly Pattern */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-[#002C5F] mb-4">Weekly Spending Pattern</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Bar dataKey="amount" fill="#F37021" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            💡 Weekend spending is 85% higher than weekdays
          </p>
        </Card>
      </div>

      {/* Anomaly Detection */}
      <Card className="p-6 rounded-2xl shadow-lg border-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-100 rounded-xl">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl text-[#002C5F]">Unusual Spending Detected</h3>
            <p className="text-sm text-gray-600">AI identified these transactions as anomalies</p>
          </div>
        </div>

        <div className="space-y-4">
          {anomalies.map((anomaly) => (
            <div 
              key={anomaly.id} 
              className={`p-4 rounded-xl border-2 ${
                anomaly.severity === 'high' 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-yellow-50 border-yellow-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={anomaly.severity === 'high' ? 'destructive' : 'default'}>
                      {anomaly.severity === 'high' ? 'High Alert' : 'Medium Alert'}
                    </Badge>
                    <span className="text-sm text-gray-600">{anomaly.date}</span>
                  </div>
                  <p className="text-[#002C5F] mb-1">{anomaly.description}</p>
                  <p className="text-sm text-gray-600">
                    Spent ₹{anomaly.amount.toLocaleString()} in {anomaly.category} 
                    (Avg: ₹{anomaly.average.toLocaleString()})
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-[#002C5F]">₹{anomaly.amount.toLocaleString()}</p>
                  <p className="text-sm text-red-600">
                    +{Math.round(((anomaly.amount - anomaly.average) / anomaly.average) * 100)}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
