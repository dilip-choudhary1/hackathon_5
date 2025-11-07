import { Volume2, Globe, User } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLanguageClick: () => void;
}

export function Header({ currentPage, onNavigate, onLanguageClick }: HeaderProps) {
  const navItems = ['Dashboard', 'Payments', 'Insights', 'Spending', 'Goals', 'Split', 'Alerts', 'Settings'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#F37021] px-3 py-1.5 rounded">
              <span className="text-white font-bold">ICICI</span>
            </div>
            <span className="text-[#002C5F] hidden sm:block">Smart Balance Navigator</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item
                    ? 'bg-[#F37021] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Voice assistant"
            >
              <Volume2 className="h-5 w-5 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={onLanguageClick}
              aria-label="Language toggle"
            >
              <Globe className="h-5 w-5 text-gray-600" />
            </Button>
            <Avatar className="h-9 w-9 border-2 border-[#F37021]">
              <AvatarFallback className="bg-[#002C5F] text-white">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex overflow-x-auto pb-3 gap-2 -mx-4 px-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`px-4 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                currentPage === item
                  ? 'bg-[#F37021] text-white'
                  : 'text-gray-700 bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
