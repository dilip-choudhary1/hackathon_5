import { Building2, CreditCard, Landmark, Wallet, TrendingUp, Phone, Search, Mic } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-white text-5xl">Truth, Trust, Transparency</h1>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3 max-w-md shadow-lg">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder='Search for "Savings Account"'
                className="flex-1 outline-none bg-transparent"
              />
              <button className="p-1">
                <Mic className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3 max-w-md">
              <button className="bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow hover:shadow-lg transition-shadow">
                <Building2 className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Accounts</span>
              </button>
              <button className="bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow hover:shadow-lg transition-shadow">
                <CreditCard className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Cards</span>
              </button>
              <button className="bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow hover:shadow-lg transition-shadow">
                <Landmark className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Loans</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md">
              <button className="bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow hover:shadow-lg transition-shadow">
                <Wallet className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Deposits</span>
              </button>
              <button className="bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow hover:shadow-lg transition-shadow">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700">Investment</span>
              </button>
              <button className="bg-orange-600 rounded-full px-4 py-3 flex items-center gap-2 shadow hover:shadow-lg transition-shadow">
                <Phone className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-white text-xs">Get Support</div>
                  <div className="text-white text-xs">1800 1080</div>
                </div>
              </button>
            </div>

            {/* Offers Section */}
            <div className="bg-white rounded-2xl p-6 max-w-md shadow-lg">
              <h3 className="text-orange-600 mb-4">Offers for you!</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="mb-2">Credit Card for you!</h4>
                  <p className="text-gray-600 text-sm mb-4">Enjoy discounts on BookMyShow, electronics, dining & more!</p>
                  <div className="flex gap-3">
                    <button className="text-orange-600 hover:underline">APPLY</button>
                    <button className="text-orange-600 hover:underline">DETAILS</button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Hot Selling</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="flex justify-end">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                Open 3-in-1 Account
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-400/30 to-orange-600/30 backdrop-blur-sm rounded-3xl p-8">
              {/* Three Circles */}
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                  <Wallet className="w-8 h-8 mb-1" />
                  <span className="text-sm">Savings</span>
                </div>
                <div className="w-24 h-24 bg-pink-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                  <CreditCard className="w-8 h-8 mb-1" />
                  <span className="text-sm">Demat</span>
                </div>
                <div className="w-24 h-24 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                  <TrendingUp className="w-8 h-8 mb-1" />
                  <span className="text-sm">Trading</span>
                </div>
              </div>

              {/* Person Image */}
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1758274252144-6421f856e770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwaG9uZSUyMG1vYmlsZSUyMGJhbmtpbmd8ZW58MXx8fHwxNzYyMTYyMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Person using mobile banking"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Text */}
              <div className="text-white space-y-4">
                <h2 className="text-3xl">Savings, Demat and Trading made easy!</h2>
                <p className="text-white/90">Simplify finances, start trading today.</p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:shadow-lg transition-shadow">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick Links */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <button className="p-4 hover:bg-gray-50 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Search className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="text-sm">Track</div>
                <div className="text-sm text-gray-600">Applications</div>
              </div>
            </button>
            <button className="p-4 hover:bg-gray-50 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm">Smart Lock</div>
              </div>
            </button>
            <button className="p-4 hover:bg-gray-50 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="text-sm">Block Card</div>
              </div>
            </button>
            <button className="p-4 hover:bg-gray-50 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm">Report Fraud</div>
              </div>
            </button>
          </div>
        </div>

        {/* Cookie Banner */}
        <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
          <p className="text-sm text-gray-700 mb-2">
            To enhance your experience, we use cookies.{' '}
            <a href="#" className="text-orange-600 underline">Know more</a>
          </p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
