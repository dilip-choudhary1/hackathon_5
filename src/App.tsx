import { useState } from 'react';
import { Header } from './components/Header';
import { DashboardPage } from './components/DashboardPage';
import { PaymentsPage } from './components/PaymentsPage';
import { InsightsPage } from './components/InsightsPage';
import { SpendingAnalysisPage } from './components/SpendingAnalysisPage';
import { SmartGoalsPage } from './components/SmartGoalsPage';
import { SplitExpensePage } from './components/SplitExpensePage';
import { AlertsPage } from './components/AlertsPage';
import { SettingsPage } from './components/SettingsPage';
import { LanguageModal } from './components/LanguageModal';
import { AIChatbot } from './components/AIChatbot';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Payments':
        return <PaymentsPage />;
      case 'Insights':
        return <InsightsPage />;
      case 'Spending':
        return <SpendingAnalysisPage />;
      case 'Goals':
        return <SmartGoalsPage />;
      case 'Split':
        return <SplitExpensePage />;
      case 'Alerts':
        return <AlertsPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLanguageClick={() => setIsLanguageModalOpen(true)}
      />
      
      <main className="min-h-[calc(100vh-200px)]">
        {renderPage()}
      </main>

      <Footer />

      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <AIChatbot />
    </div>
  );
}
