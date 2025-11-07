# AI-Powered Split Expense Tracking System

## 🎯 Overview

An intelligent Splitwise-like feature integrated into the Smart Balance Navigator that uses AI to automatically detect potential split payments, track settlements, and provide smart insights.

## 🤖 Key AI Features

### 1. **Automatic Split Detection**
The AI analyzes every transaction and identifies potential group expenses based on:

- **Transaction Amount Patterns**: Detects round amounts typical of group payments (₹900, ₹1,500, ₹2,400, etc.)
- **Merchant Analysis**: Recognizes restaurants, movie theaters, and other social venues
- **Timing Patterns**: Weekend and evening transactions more likely to be group expenses
- **Historical Learning**: Learns from your past split expense patterns
- **Social Context**: Identifies bills that match typical group sizes (2-5 people)

**Confidence Scoring**: Each detection comes with a confidence percentage (75-95%) based on:
- Similarity to past split transactions
- Merchant category relevance
- Amount divisibility
- Time and day patterns
- Frequency of similar transactions

### 2. **Smart Split Suggestions**
For each detected transaction, AI suggests:
- **Number of people**: Based on amount and historical patterns
- **Per-person amount**: Automatic equal split calculation
- **Category classification**: Food, Entertainment, Transportation, etc.
- **Similar past transactions**: References to help confirm

### 3. **Predictive Settlement Tracking**
- Tracks who owes what to whom
- Monitors settlement patterns
- Predicts likelihood of timely payment
- Sends smart reminders at optimal times

## 📱 Core Features

### Split Expense Page Components

#### 1. **AI Detection Banner**
- Real-time count of auto-detected splits
- Total amount owed to you
- Number of pending settlements
- Confidence level indicators

#### 2. **Summary Cards**
- **You Are Owed**: Total pending receivables
- **You Owe**: Total pending payables  
- **Net Balance**: Overall position (positive/negative)

#### 3. **Friends & Balances**
- Visual friend list with avatars
- Net balance per friend (color-coded)
- Quick settle/remind actions
- Settled vs pending status
- Click to view detailed history

#### 4. **Transaction History**
Each split transaction shows:
- Transaction description and date
- AI detection badge with confidence %
- Category classification
- Total amount and your share
- Split participants with settlement status
- Individual amounts per person
- Mark as settled option

#### 5. **Quick Actions**
- Generate payment QR codes
- Multiple settlement methods (UPI, Bank, Cash)
- Send payment reminders
- Add new friends to network

### Real-World Use Cases

#### Example 1: Restaurant Dinner
```
Transaction: ₹3,000 at The Spice Route
AI Detection: 95% confidence
Analysis: "Amount matches typical 3-person dinner. Similar to your Oct 28 split."
Suggestion: Split ₹1,000 each with 2 friends
Result: Track ₹2,000 receivable from Rahul and Priya
```

#### Example 2: Movie Night
```
Transaction: ₹2,400 at PVR Cinemas
AI Detection: 92% confidence
Analysis: "Round amount typical for 4 movie tickets. Weekend transaction pattern."
Suggestion: Split ₹600 each with 3 friends
Result: Track settlements, send reminders
```

#### Example 3: Ride Sharing
```
Transaction: ₹1,200 Uber ride
AI Detection: 88% confidence
Analysis: "Airport ride typically shared. Matches your travel patterns."
Suggestion: Split ₹600 with 1 friend
Result: You owe Rahul ₹600 for ride he paid
```

## 🎨 User Experience Flow

### 1. **Automatic Detection**
- User makes a payment
- AI instantly analyzes transaction
- If split-likely, appears in AI Split Detector on Dashboard
- User sees suggestion with confidence level

### 2. **Confirmation**
- User reviews AI suggestion
- Options: "Create Split" or "Not a Split"
- If accepted, prompted to select friends
- System creates split record automatically

### 3. **Tracking**
- Split appears in Split Expense page
- Shows as pending settlement
- Displays in summary cards
- Reflected in spending analysis

### 4. **Settlement**
- User marks transaction as settled when paid
- Updates friend balances automatically
- Removes from pending list
- Updates all summaries

### 5. **Reminders**
- System suggests sending reminders
- Optimal timing based on payment patterns
- Multiple reminder methods (in-app, push)
- Tracks reminder history

## 📊 Integration with Other Features

### Dashboard Integration
- **Split expense summary card**: Shows total owed to you
- **AI Split Detector widget**: Real-time suggestions for recent transactions
- **Quick stats**: Includes split expenses in overview

### Spending Analysis Integration
- **Adjusted spending**: Shows actual cost vs. paid amount
- **Split expense badge**: Highlights transactions with splits
- **Category breakdown**: Notes split amounts separately
- **Insights**: "₹3,600 of spending is split expenses - actual cost is ₹2,400 lower"

### Alerts Integration
- Settlement reminders
- "Friend paid you" notifications
- "Pending split detected" alerts
- "Settlement overdue" warnings

### Goals Integration
- Excludes expected receivables from safe balance calculations
- Factors in split expenses when calculating spending limits
- Adjusts investment recommendations based on pending settlements

## 🔍 AI Detection Algorithm

### Pattern Recognition
1. **Amount Analysis**
   - Checks if amount is divisible by 2, 3, 4, or 5
   - Identifies round numbers (multiples of 100, 500)
   - Compares to historical split amounts

2. **Merchant Intelligence**
   - Restaurant names → High split probability
   - Cinema chains → High split probability
   - Uber/Ola → Moderate split probability
   - Grocery stores → Context-dependent

3. **Temporal Patterns**
   - Weekend → Higher probability
   - Evening (6pm-11pm) → Higher probability
   - Late night → Higher probability for food
   - Weekday lunch → Lower probability

4. **Historical Learning**
   - Tracks which merchants you typically split
   - Learns your friend group patterns
   - Identifies recurring split scenarios
   - Adapts confidence scores over time

### Confidence Scoring Formula
```
Confidence = (
  Amount Pattern Score (30%) +
  Merchant Category Score (25%) +
  Time Pattern Score (20%) +
  Historical Similarity Score (25%)
)

High: 85-100% → Strong suggestion
Medium: 70-84% → Moderate suggestion
Low: <70% → Don't suggest (learn silently)
```

## 💡 Smart Features

### 1. **Auto-Settlement Detection**
- Monitors bank transactions for incoming payments
- Matches amounts to pending splits
- Auto-marks as settled when payment received
- Sends confirmation notification

### 2. **Group Optimization**
- Suggests simplified settlements (A owes B, B owes C → A owes C directly)
- Minimizes number of transactions needed
- Calculates optimal payment routing

### 3. **Payment Method Integration**
- QR code generation for UPI
- Direct UPI link creation
- Bank transfer details auto-fill
- Cash settlement tracking

### 4. **Social Features**
- Friend suggestions based on frequent splits
- Group creation for recurring expenses
- Split templates for regular events
- Expense history with each friend

### 5. **Privacy & Security**
- End-to-end encryption for split data
- Secure payment links
- Privacy controls for visibility
- Optional anonymous splits

## 📈 Analytics & Insights

### For Users
- Total split expenses this month
- Most frequent split partners
- Average split amount
- Settlement speed metrics
- Category-wise split breakdown

### AI Insights
- "You split 40% of your dining expenses"
- "Rahul owes you most frequently (8 pending)"
- "Your split expenses increased 20% this month"
- "Weekend splits are 3x higher than weekdays"
- "Cinema splits always settled within 2 days"

## 🎯 Benefits

### For Users
1. **Never forget to split bills** - Automatic detection
2. **Track who owes what** - Clear balance view
3. **Simplify settlements** - One-tap reminders
4. **Understand spending better** - See actual vs. paid amounts
5. **Save time** - No manual entry needed

### Financial Intelligence
1. **Accurate budget tracking** - Knows your real spending
2. **Better predictions** - Factors in receivables
3. **Improved insights** - Separates split vs. personal expenses
4. **Smarter recommendations** - Considers pending settlements

## 🔮 Future Enhancements

1. **Group Trips & Events**
   - Create events with multiple expenses
   - Track complex multi-person splits
   - Itemized bill splitting

2. **OCR Receipt Scanning**
   - Photo bill and auto-split items
   - Individual item allocation
   - Tip and tax distribution

3. **International Splits**
   - Multi-currency support
   - Real-time exchange rates
   - Cross-border settlements

4. **Integration with Payment Apps**
   - Direct integration with Google Pay, PhonePe, Paytm
   - One-click payment from split screen
   - Auto-verification of settlements

5. **Recurring Splits**
   - Rent, utilities auto-split
   - Subscription sharing tracking
   - Monthly settlement automation

## 📱 Technical Implementation

### Components
- `SplitExpensePage.tsx` - Main split tracking interface
- `AISplitDetector.tsx` - AI detection widget for Dashboard
- Integration in `DashboardPage.tsx`, `SpendingAnalysisPage.tsx`

### Data Structure
```typescript
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
```

### AI Detection Process
1. Transaction occurs
2. Background analysis (< 100ms)
3. Confidence calculation
4. If > 75%, show suggestion
5. User confirms or dismisses
6. Learn from user action
7. Update model weights

## 🎨 Design Highlights

- **Purple/Pink gradient** for split-related cards
- **AI badge with confidence %** on detected splits
- **Color-coded balances** (Green: owed to you, Red: you owe)
- **Avatar-based friend list** for quick recognition
- **Settlement status icons** (Clock for pending, Check for settled)
- **Smooth animations** for suggestions appearing/dismissing

---

**Result**: A seamless, intelligent split expense system that feels magical - detecting splits before you even think about them, tracking everything automatically, and making settlements effortless! 🎉
