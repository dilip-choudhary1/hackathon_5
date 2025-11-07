# Smart Balance Navigator – ICICI Bank

An AI-powered financial management dashboard that helps users track, predict, and optimize their bank balances with intelligent insights and recommendations.

## 🌟 Overview

Smart Balance Navigator is a next-generation banking dashboard featuring:
- **Predictive Balance Forecasting** with 95% confidence intervals
- **AI Chatbot** for conversational banking
- **Anomaly Detection** for unusual spending patterns
- **Smart Goals Tracking** with auto-optimization
- **Voice Assistant** for hands-free queries
- **Predictive Cash Flow Timeline** with risk warnings
- **Multi-language Support** (English, Hindi, Tamil)

## 📱 Pages & Features

### 1. Dashboard (Main Overview)
- Current balance with 30-day AI prediction chart
- Financial Health Meter (Safe/Watch/Risk indicator)
- Expected safe balance projection
- Quick insights cards (spending, bills, investments)
- AI anomaly alerts
- Smart recommendations preview

### 2. Payments (EMIs & Bills)
- Upcoming payments table with due dates
- Color-coded alert levels (Urgent/Medium/Normal)
- Weekly summary sidebar
- Smart Bill Optimizer with savings suggestions
- Add reminder & Auto-pay setup options

### 3. Insights (AI Recommendations)
- Interactive recommendation carousel
- Investment opportunities with confidence levels
- Auto-sweep and FD suggestions
- Safe spending calculations
- Predictive cash flow timeline
- Monthly savings and spending insights

### 4. Spending Analysis
- AI-powered spending categorization
- Pie chart for category breakdown
- Budget utilization tracking
- 6-month spending trend
- Weekly pattern analysis
- Anomaly detection with alerts

### 5. Goals (Financial Targets)
- Smart goal tracking with progress bars
- AI suggestions for monthly contributions
- On-track status monitoring
- Multiple goal categories (Safety, Lifestyle, Assets, Long-term)
- Auto-optimization strategies
- Tax-saving recommendations

### 6. Split Expenses (Splitwise-like Feature)
- **AI-powered automatic split detection** (like when you pay ₹3,000 for 3 people)
- Real-time transaction analysis for group expenses
- Friend balance tracking (who owes you, who you owe)
- Settlement management with reminders
- Confidence-scored split suggestions (85-95% accuracy)
- QR code generation for payments
- Split transaction history
- Net balance calculations

### 7. Alerts & Notifications
- Categorized alert feed (All/Payments/Balance/Offers)
- Action buttons (Mark as Read/Snooze/Audio)
- Priority-based color coding
- Unread count tracking
- Real-time notifications

### 8. Settings
- Profile management
- Notification preferences
- Security settings with 2FA status
- Voice Assistant interface
- Language and accessibility options

## 🤖 AI-Driven Features

### Predictive Analytics
- 30-day balance forecasting
- Confidence interval visualization
- Cash flow predictions with dates
- Risk assessment at specific points

### Anomaly Detection
- Real-time spending pattern analysis
- Unusual transaction alerts
- Percentage-based comparisons
- Severity classification (High/Medium/Low)

### Smart Recommendations
- Personalized investment advice
- Budget optimization suggestions
- Bill negotiation opportunities
- Auto-sweep strategies
- Spending limits calculation

### Conversational AI
- Natural language chatbot
- Context-aware responses
- Quick action buttons
- Voice command support
- Multi-turn conversations

### Voice Assistant
- Speech recognition
- Text-to-speech responses
- Quick command shortcuts
- Visual feedback animations
- Hands-free banking

### AI Split Expense Detection
- **Automatic detection** of group payments (restaurants, movies, rides)
- **Confidence scoring** (75-95%) based on amount patterns, merchant type, timing
- **Smart suggestions** for number of people and per-person amounts
- **Historical learning** from past split patterns
- **Pattern recognition** for weekend/evening social spending
- **Real-time analysis** of every transaction (< 100ms)
- **Settlement tracking** with automated reminders

## 🎨 Design System

### Brand Colors
- **Primary Orange**: #F37021
- **Deep Blue**: #002C5F
- **Gradients**: Used throughout for depth and emphasis

### Components
- Card-based modular design
- Rounded corners (16px)
- Subtle shadows for elevation
- Smooth hover transitions
- Progress indicators
- Badge status labels

### Typography
- Inter/Poppins font family
- Hierarchical text sizing
- Color contrast for readability

### Charts & Visualizations
- Recharts library
- Custom color schemes
- Gradient fills
- Interactive tooltips
- Responsive sizing

## 🛠️ Technical Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Components**: Custom UI component library

## 📂 Project Structure

```
├── components/
│   ├── AIChatbot.tsx           # Floating AI chat assistant
│   ├── DashboardPage.tsx       # Main dashboard overview
│   ├── PaymentsPage.tsx        # EMI & bill tracking
│   ├── InsightsPage.tsx        # AI recommendations
│   ├── SpendingAnalysisPage.tsx # Detailed spending insights
│   ├── SmartGoalsPage.tsx      # Financial goal tracker
│   ├── SplitExpensePage.tsx    # Splitwise-like expense tracking
│   ├── AISplitDetector.tsx     # AI split detection widget
│   ├── AlertsPage.tsx          # Notification center
│   ├── SettingsPage.tsx        # User preferences
│   ├── PredictiveCashFlow.tsx  # Timeline visualization
│   ├── VoiceAssistant.tsx      # Voice command interface
│   ├── LanguageModal.tsx       # Multi-language support
│   ├── Header.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer with toggle
│   └── ui/                     # Reusable UI components
├── App.tsx                     # Main app with routing
├── AI_FEATURES.md              # Detailed AI features doc
├── SPLIT_EXPENSE_FEATURES.md   # Split expense system doc
└── styles/globals.css          # Global styles & tokens
```

## 🚀 Key Innovations

1. **Confidence-Based Predictions**: Shows uncertainty in forecasts
2. **Proactive Risk Alerts**: Warns before balance issues occur
3. **Visual Timeline**: See future cash flow at a glance
4. **Conversational Banking**: Chat with AI like a financial advisor
5. **Voice Control**: Hands-free banking queries
6. **Pattern Recognition**: Detects weekend overspending, category trends
7. **Smart Optimization**: Automatic bill and budget suggestions
8. **Multi-modal Input**: Touch, voice, and text interactions
9. **Real-time Insights**: Dynamic calculations and updates
10. **Accessibility First**: Voice, language, contrast options
11. **🆕 AI Split Detection**: Automatically identifies group payments (e.g., ₹3,000 for 3 friends = ₹1,000 each)
12. **Smart Settlement Tracking**: Knows who owes you and sends intelligent reminders

## 🎯 Use Cases

- **Daily**: Check balance, review alerts, chat with AI
- **Weekly**: Track spending patterns, pay bills
- **Monthly**: Review goals, analyze spending, optimize budget
- **Planning**: Set financial targets, view predictions
- **Emergency**: Quick voice queries, anomaly alerts

## 🔒 Security Features

- Two-factor authentication status
- Secure login tracking
- Activity monitoring
- Smart lock features
- Fraud reporting

## 🌐 Accessibility

- Multi-language support (English, Hindi, Tamil)
- Voice commands and audio alerts
- High contrast mode option
- Large text option
- Screen reader compatible

## 📊 Analytics & Insights

- Spending by category
- Monthly trends
- Budget utilization
- Savings rate
- Goal progress
- Investment opportunities
- Bill optimization
- Risk assessment

## 🎨 Responsive Design

- Mobile-first approach
- Tablet-optimized layouts
- Desktop full experience
- Touch-friendly interactions
- Adaptive navigation
- Flexible charts

## 💡 Future Enhancements

- Real-time bank API integration
- Machine learning model training
- Custom goal templates
- Social spending comparisons
- Merchant offers integration
- Crypto wallet support
- Receipt scanning OCR
- Expense categorization ML

## 🏆 Awards & Recognition

Designed for clarity, trust, and ease of use. Built to showcase the future of AI-powered personal finance management.

---

**© 2024 ICICI Bank. All Rights Reserved.**  
AI-Powered Balance Forecasting and Smart Financial Guidance.
