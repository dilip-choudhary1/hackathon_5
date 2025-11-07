import { AlertTriangle, Clock, CheckCircle, Plus, Repeat, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const upcomingPayments = [
  {
    id: 1,
    name: 'Car EMI',
    amount: 15000,
    dueDate: 'Nov 6, 2025',
    daysLeft: 3,
    status: 'Urgent',
    icon: '🚗',
    color: 'red',
  },
  {
    id: 2,
    name: 'Insurance Premium',
    amount: 8000,
    dueDate: 'Nov 8, 2025',
    daysLeft: 5,
    status: 'Medium',
    icon: '🛡️',
    color: 'yellow',
  },
  {
    id: 3,
    name: 'Credit Card Bill',
    amount: 12500,
    dueDate: 'Nov 10, 2025',
    daysLeft: 7,
    status: 'Medium',
    icon: '💳',
    color: 'yellow',
  },
  {
    id: 4,
    name: 'Electricity Bill',
    amount: 2800,
    dueDate: 'Nov 12, 2025',
    daysLeft: 9,
    status: 'Normal',
    icon: '⚡',
    color: 'green',
  },
  {
    id: 5,
    name: 'Internet Bill',
    amount: 1200,
    dueDate: 'Nov 15, 2025',
    daysLeft: 12,
    status: 'Normal',
    icon: '📡',
    color: 'green',
  },
  {
    id: 6,
    name: 'Home Loan EMI',
    amount: 25000,
    dueDate: 'Nov 18, 2025',
    daysLeft: 15,
    status: 'Normal',
    icon: '🏠',
    color: 'green',
  },
  {
    id: 7,
    name: 'Mobile Bill',
    amount: 850,
    dueDate: 'Nov 20, 2025',
    daysLeft: 17,
    status: 'Normal',
    icon: '📱',
    color: 'green',
  },
];

export function PaymentsPage() {
  const totalDueThisWeek = upcomingPayments
    .filter(p => p.daysLeft <= 7)
    .reduce((sum, p) => sum + p.amount, 0);

  const getAlertIcon = (color: string) => {
    switch (color) {
      case 'red':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'yellow':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'red':
        return 'destructive';
      case 'yellow':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-[#002C5F]">Upcoming EMIs & Bills</h2>
            <div className="flex gap-2">
              <Button className="bg-[#002C5F] hover:bg-[#003870]">
                <Plus className="h-4 w-4 mr-2" />
                Add Reminder
              </Button>
              <Button variant="outline" className="border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-white">
                <Repeat className="h-4 w-4 mr-2" />
                Auto Pay
              </Button>
            </div>
          </div>

          {/* Desktop Table View */}
          <Card className="rounded-2xl shadow-lg border-0 overflow-hidden hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#002C5F] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Payment</th>
                    <th className="px-6 py-4 text-left">Due Date</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-center">Alert</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {upcomingPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{payment.icon}</span>
                          <span className="text-[#002C5F]">{payment.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-gray-900">{payment.dueDate}</p>
                          <p className="text-sm text-gray-500">In {payment.daysLeft} days</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-[#002C5F]">
                        ₹{payment.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant={getBadgeVariant(payment.color)}>
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          {getAlertIcon(payment.color)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {upcomingPayments.map((payment) => (
              <Card key={payment.id} className="p-4 rounded-2xl shadow-lg border-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{payment.icon}</span>
                    <div>
                      <p className="text-[#002C5F]">{payment.name}</p>
                      <p className="text-sm text-gray-500">In {payment.daysLeft} days</p>
                    </div>
                  </div>
                  {getAlertIcon(payment.color)}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                    <p className="text-xl text-[#002C5F] mt-1">₹{payment.amount.toLocaleString()}</p>
                  </div>
                  <Badge variant={getBadgeVariant(payment.color)}>
                    {payment.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#F37021] to-[#FF8C42] text-white sticky top-24">
            <h3 className="mb-4 opacity-90">This Week</h3>
            <div className="mb-6">
              <p className="text-sm opacity-90 mb-2">Total Due</p>
              <p className="text-4xl">₹{totalDueThisWeek.toLocaleString()}</p>
            </div>
            <div className="space-y-3 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-90">Urgent</span>
                <span>1 payment</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-90">Medium</span>
                <span>2 payments</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-90">Normal</span>
                <span>4 payments</span>
              </div>
            </div>

            {/* AI Bill Optimizer */}
            <Card className="mt-6 p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-l-purple-500">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-[#002C5F] mb-1">Smart Bill Optimizer</h4>
                  <p className="text-sm text-gray-600">AI-detected savings opportunities</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm text-[#002C5F] mb-1">Insurance Premium</p>
                  <p className="text-xs text-gray-600">Switch to annual payment to save ₹960/year</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm text-[#002C5F] mb-1">Internet Bill</p>
                  <p className="text-xs text-gray-600">Better plan available - Save ₹200/month</p>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                View All Optimizations
              </Button>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
