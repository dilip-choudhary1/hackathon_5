import { Users, TrendingUp, Clock, CheckCircle, AlertCircle, Plus, Send, UserPlus, Sparkles, QrCode } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplitTransaction {
  id: number;
  date: string;
  description: string;
  totalAmount: number;
  yourShare: number;
  paidBy: 'you' | string;
  splitWith: Array<{
    name: string;
    amount: number;
    settled: boolean;
    avatar: string;
  }>;
  category: string;
  aiDetected: boolean;
  confidence: number;
}

const splitTransactions: SplitTransaction[] = [
  {
    id: 1,
    date: 'Nov 4, 2025',
    description: 'Dinner at The Spice Route',
    totalAmount: 3000,
    yourShare: 1000,
    paidBy: 'you',
    splitWith: [
      { name: 'Rahul Kumar', amount: 1000, settled: false, avatar: 'RK' },
      { name: 'Priya Sharma', amount: 1000, settled: false, avatar: 'PS' },
    ],
    category: 'Food & Dining',
    aiDetected: true,
    confidence: 95,
  },
  {
    id: 2,
    date: 'Nov 3, 2025',
    description: 'Movie Tickets - Weekend Show',
    totalAmount: 1800,
    yourShare: 600,
    paidBy: 'you',
    splitWith: [
      { name: 'Amit Patel', amount: 600, settled: true, avatar: 'AP' },
      { name: 'Neha Singh', amount: 600, settled: false, avatar: 'NS' },
    ],
    category: 'Entertainment',
    aiDetected: true,
    confidence: 92,
  },
  {
    id: 3,
    date: 'Nov 1, 2025',
    description: 'Uber Ride to Airport',
    totalAmount: 1200,
    yourShare: 600,
    paidBy: 'Rahul Kumar',
    splitWith: [
      { name: 'You', amount: 600, settled: false, avatar: 'ME' },
    ],
    category: 'Transportation',
    aiDetected: true,
    confidence: 88,
  },
  {
    id: 4,
    date: 'Oct 30, 2025',
    description: 'Grocery Shopping',
    totalAmount: 2400,
    yourShare: 800,
    paidBy: 'you',
    splitWith: [
      { name: 'Rahul Kumar', amount: 800, settled: true, avatar: 'RK' },
      { name: 'Amit Patel', amount: 800, settled: true, avatar: 'AP' },
    ],
    category: 'Shopping',
    aiDetected: true,
    confidence: 85,
  },
];

const friends = [
  { name: 'Rahul Kumar', avatar: 'RK', youOwe: 0, owesYou: 2000, netBalance: 2000, color: 'from-green-500 to-emerald-600' },
  { name: 'Priya Sharma', avatar: 'PS', youOwe: 0, owesYou: 1000, netBalance: 1000, color: 'from-blue-500 to-indigo-600' },
  { name: 'Amit Patel', avatar: 'AP', youOwe: 0, owesYou: 0, netBalance: 0, color: 'from-gray-400 to-gray-500' },
  { name: 'Neha Singh', avatar: 'NS', youOwe: 0, owesYou: 600, netBalance: 600, color: 'from-purple-500 to-pink-600' },
];

export function SplitExpensePage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  const totalYouAreOwed = friends.reduce((sum, f) => sum + f.owesYou, 0);
  const totalYouOwe = friends.reduce((sum, f) => sum + f.youOwe, 0);
  const netBalance = totalYouAreOwed - totalYouOwe;

  const pendingSettlements = splitTransactions.filter(t => 
    t.splitWith.some(s => !s.settled)
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl text-[#002C5F] mb-2">Split Expenses</h2>
          <p className="text-gray-600">AI-powered expense splitting and settlement tracking</p>
        </div>
        <Button className="bg-[#F37021] hover:bg-[#E06010]" onClick={() => setShowAddModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Split
        </Button>
      </div>

      {/* AI Detection Banner */}
      <Card className="p-6 rounded-2xl shadow-lg border-0 mb-8 bg-gradient-to-br from-purple-500 to-pink-600">
        <div className="flex items-start gap-4 text-white">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2">AI Split Detection Active</h3>
            <p className="text-white/90 mb-4">
              I've detected {splitTransactions.filter(t => t.aiDetected).length} potential split expenses this month! 
              When you make group payments, I automatically suggest splitting them. 
              You're owed ₹{totalYouAreOwed.toLocaleString()} from friends.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/20 text-white border-0">
                {splitTransactions.filter(t => t.aiDetected).length} Auto-detected
              </Badge>
              <Badge className="bg-white/20 text-white border-0">
                {pendingSettlements} Pending
              </Badge>
              <Badge className="bg-white/20 text-white border-0">
                ₹{totalYouAreOwed.toLocaleString()} Owed to You
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
          <TrendingUp className="h-8 w-8 mb-3 opacity-90" />
          <p className="text-sm opacity-90 mb-2">You Are Owed</p>
          <p className="text-3xl mb-1">₹{totalYouAreOwed.toLocaleString()}</p>
          <p className="text-sm opacity-75">{friends.filter(f => f.owesYou > 0).length} friends owe you</p>
        </Card>

        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-orange-500 to-red-600 text-white">
          <Clock className="h-8 w-8 mb-3 opacity-90" />
          <p className="text-sm opacity-90 mb-2">You Owe</p>
          <p className="text-3xl mb-1">₹{totalYouOwe.toLocaleString()}</p>
          <p className="text-sm opacity-75">{friends.filter(f => f.youOwe > 0).length} pending payments</p>
        </Card>

        <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <Users className="h-8 w-8 mb-3 opacity-90" />
          <p className="text-sm opacity-90 mb-2">Net Balance</p>
          <p className="text-3xl mb-1">₹{Math.abs(netBalance).toLocaleString()}</p>
          <p className="text-sm opacity-75">{netBalance >= 0 ? 'In your favor' : 'You owe overall'}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Friends List */}
        <div className="lg:col-span-2">
          <h3 className="text-xl text-[#002C5F] mb-4">Friends & Balances</h3>
          <div className="space-y-4">
            {friends.map((friend, index) => (
              <Card 
                key={index} 
                className={`p-5 rounded-2xl shadow-lg border-0 cursor-pointer transition-all hover:shadow-xl ${
                  selectedFriend === friend.name ? 'ring-2 ring-[#F37021]' : ''
                }`}
                onClick={() => setSelectedFriend(friend.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className={`h-14 w-14 bg-gradient-to-br ${friend.color}`}>
                      <AvatarFallback className="text-white">
                        {friend.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[#002C5F] mb-1">{friend.name}</p>
                      <div className="flex items-center gap-2">
                        {friend.netBalance > 0 ? (
                          <Badge className="bg-green-100 text-green-700 border-0">
                            Owes you ₹{friend.owesYou.toLocaleString()}
                          </Badge>
                        ) : friend.netBalance < 0 ? (
                          <Badge className="bg-red-100 text-red-700 border-0">
                            You owe ₹{friend.youOwe.toLocaleString()}
                          </Badge>
                        ) : (
                          <Badge variant="secondary">Settled up</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {friend.netBalance !== 0 && (
                    <Button 
                      size="sm" 
                      className={
                        friend.netBalance > 0 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-[#F37021] hover:bg-[#E06010]'
                      }
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {friend.netBalance > 0 ? 'Remind' : 'Settle'}
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4 border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-white">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New Friend
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <h3 className="text-xl text-[#002C5F] mb-4">Quick Actions</h3>
          
          <Card className="p-5 rounded-2xl shadow-lg border-0 mb-4 bg-gradient-to-br from-[#002C5F] to-[#004080] text-white">
            <QrCode className="h-8 w-8 mb-3" />
            <p className="mb-3">Share Your Payment QR</p>
            <Button className="w-full bg-white text-[#002C5F] hover:bg-gray-100">
              Generate QR Code
            </Button>
          </Card>

          <Card className="p-5 rounded-2xl shadow-lg border-0 mb-4">
            <h4 className="text-[#002C5F] mb-3">Settlement Methods</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                UPI Transfer
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Bank Transfer
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Cash Settlement
              </Button>
            </div>
          </Card>

          <Card className="p-5 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
            <AlertCircle className="h-6 w-6 text-orange-600 mb-2" />
            <p className="text-sm text-[#002C5F] mb-2">Pending Reminders</p>
            <p className="text-xs text-gray-600 mb-3">
              You have {pendingSettlements} unsettled expenses. Send reminders to settle faster!
            </p>
            <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
              Send Reminders
            </Button>
          </Card>
        </div>

        {/* Transaction History */}
        <div className="lg:col-span-3">
          <h3 className="text-xl text-[#002C5F] mb-4">Split Transaction History</h3>
          
          <div className="space-y-4">
            {splitTransactions.map((transaction) => (
              <Card key={transaction.id} className="p-5 rounded-2xl shadow-lg border-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[#002C5F]">{transaction.description}</p>
                      {transaction.aiDetected && (
                        <Badge className="bg-purple-100 text-purple-700 border-0">
                          <Sparkles className="h-3 w-3 mr-1" />
                          AI Detected ({transaction.confidence}%)
                        </Badge>
                      )}
                      <Badge variant="secondary">{transaction.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <p className="text-2xl text-[#002C5F]">₹{transaction.totalAmount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mt-1">Your share: ₹{transaction.yourShare.toLocaleString()}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-3">
                    {transaction.paidBy === 'you' ? 'You paid, split with:' : `Paid by ${transaction.paidBy}, split with:`}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {transaction.splitWith.map((person, idx) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-xl flex items-center justify-between ${
                          person.settled 
                            ? 'bg-green-50 border-2 border-green-200' 
                            : 'bg-orange-50 border-2 border-orange-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8 bg-[#002C5F]">
                            <AvatarFallback className="text-white text-xs">
                              {person.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm text-[#002C5F]">{person.name}</p>
                            <p className="text-xs text-gray-600">₹{person.amount.toLocaleString()}</p>
                          </div>
                        </div>
                        {person.settled ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Clock className="h-5 w-5 text-orange-600" />
                        )}
                      </div>
                    ))}
                  </div>

                  {transaction.paidBy === 'you' && transaction.splitWith.some(s => !s.settled) && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-white"
                    >
                      Mark as Settled
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add Split Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="w-full max-w-md rounded-2xl shadow-2xl border-0 p-6">
                <h3 className="text-xl text-[#002C5F] mb-4">Add Split Expense</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Description</label>
                    <input
                      type="text"
                      placeholder="Dinner, Movie, etc."
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F37021] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Total Amount</label>
                    <input
                      type="number"
                      placeholder="₹ 0"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F37021] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Split With</label>
                    <Button variant="outline" className="w-full justify-start">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Select Friends
                    </Button>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowAddModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="flex-1 bg-[#F37021] hover:bg-[#E06010]"
                      onClick={() => setShowAddModal(false)}
                    >
                      Add Split
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
