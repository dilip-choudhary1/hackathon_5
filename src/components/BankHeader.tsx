import { Search, Heart, Gift, Phone, ChevronDown } from 'lucide-react';

export function BankHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-orange-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="text-orange-600 text-xl">ICICI Bank</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-orange-600 border-b-2 border-orange-600 pb-1">Personal</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">NRI</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Business</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">iShop</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Resources</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">About</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Help</a>
              <a href="#" className="text-gray-700 hover:text-orange-600">Complaints</a>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>1800 1080</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Gift className="w-5 h-5 text-gray-700" />
            </button>
            <button className="hidden md:flex items-center gap-1 p-2 hover:bg-gray-100 rounded">
              <span className="text-gray-700">🇮🇳</span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 flex items-center gap-1">
              <span>Login</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
