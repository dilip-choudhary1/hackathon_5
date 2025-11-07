import { Bell, CreditCard, TrendingDown, TrendingUp, Volume2, Check, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';

const allAlerts = [
  {
    id: 1,
    type: 'Payments',
    icon: CreditCard,
    title: 'EMI Payment Due Soon',
    message: 'Your EMI of ₹15,000 is due in 3 days.',
    time: '2 hours ago',
    priority: 'high',
    unread: true,
  },
  {
    id: 2,
    type: 'Balance',
    icon: TrendingDown,
    title: 'Low Balance Risk Detected',
    message: 'Low balance risk detected for 7th Nov. Ensure sufficient funds.',
    time: '5 hours ago',
    priority: 'high',
    unread: true,
  },
  {
    id: 3,
    type: 'Balance',
    icon: TrendingUp,
    title: 'Surplus Available for Investment',
    message: 'Surplus ₹8,000 available for investment. Check recommendations.',
    time: '1 day ago',
    priority: 'medium',
    unread: true,
  },
  {
    id: 4,
    type: 'Payments',
    icon: CreditCard,
    title: 'Credit Card Bill Reminder',
    message: 'Your credit card bill of ₹12,500 is due on Nov 10.',
    time: '1 day ago',
    priority: 'medium',
    unread: false,
  },
  {
    id: 5,
    type: 'Offers',
    icon: Bell,
    title: 'Special FD Rate Available',
    message: 'Get 7.5% p.a. on Fixed Deposit. Limited time offer.',
    time: '2 days ago',
    priority: 'low',
    unread: false,
  },
  {
    id: 6,
    type: 'Balance',
    icon: TrendingUp,
    title: 'Salary Credited',
    message: 'Your salary of ₹85,000 has been credited to your account.',
    time: '3 days ago',
    priority: 'low',
    unread: false,
  },
  {
    id: 7,
    type: 'Payments',
    icon: CreditCard,
    title: 'Electricity Bill Due',
    message: 'Your electricity bill of ₹2,800 is due on Nov 12.',
    time: '3 days ago',
    priority: 'medium',
    unread: false,
  },
];

export function AlertsPage() {
  const [filter, setFilter] = useState('All');
  const [alerts, setAlerts] = useState(allAlerts);

  const filters = ['All', 'Payments', 'Balance', 'Offers'];

  const filteredAlerts = filter === 'All' 
    ? alerts 
    : alerts.filter(alert => alert.type === filter);

  const markAsRead = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, unread: false } : alert
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      default:
        return 'border-l-green-500';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">Urgent</Badge>;
      case 'medium':
        return <Badge variant="default" className="bg-yellow-500">Medium</Badge>;
      default:
        return <Badge variant="secondary">Low</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <Card className="p-4 rounded-2xl shadow-lg border-0 sticky top-24">
            <h3 className="text-[#002C5F] mb-4">Filters</h3>
            <div className="space-y-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                    filter === f
                      ? 'bg-[#F37021] text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {f}
                  {f !== 'All' && (
                    <span className="ml-2 text-sm opacity-75">
                      ({allAlerts.filter(a => a.type === f).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-gradient-to-br from-[#002C5F] to-[#004080] p-4 rounded-xl text-white">
                <Bell className="h-6 w-6 mb-2" />
                <p className="text-sm mb-1">Unread Alerts</p>
                <p className="text-2xl">{alerts.filter(a => a.unread).length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Alerts Feed */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-[#002C5F]">Alerts & Notifications</h2>
            <Button variant="outline" className="border-[#002C5F] text-[#002C5F]">
              <Check className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
          </div>

          <div className="space-y-4">
            {filteredAlerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <Card 
                  key={alert.id} 
                  className={`p-5 rounded-2xl shadow-lg border-l-4 ${getPriorityColor(alert.priority)} ${
                    alert.unread ? 'bg-blue-50/50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      alert.priority === 'high' 
                        ? 'bg-red-100' 
                        : alert.priority === 'medium' 
                        ? 'bg-yellow-100' 
                        : 'bg-green-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        alert.priority === 'high' 
                          ? 'text-red-600' 
                          : alert.priority === 'medium' 
                          ? 'text-yellow-600' 
                          : 'text-green-600'
                      }`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-[#002C5F]">{alert.title}</h3>
                            {alert.unread && (
                              <span className="w-2 h-2 bg-[#F37021] rounded-full"></span>
                            )}
                          </div>
                          <p className="text-gray-600">{alert.message}</p>
                        </div>
                        {getPriorityBadge(alert.priority)}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.time}
                        </span>
                        <div className="flex items-center gap-2">
                          {alert.unread && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(alert.id)}
                              className="text-[#002C5F]"
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Mark as Read
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600"
                          >
                            <Clock className="h-4 w-4 mr-1" />
                            Snooze
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#F37021]"
                          >
                            <Volume2 className="h-4 w-4 mr-1" />
                            Audio
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredAlerts.length === 0 && (
            <Card className="p-12 rounded-2xl shadow-lg border-0 text-center">
              <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No alerts in this category</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
