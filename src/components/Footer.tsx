import { Switch } from './ui/switch';

export function Footer() {
  return (
    <footer className="bg-[#002C5F] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">© 2024 ICICI Bank. All Rights Reserved.</p>
            <p className="text-sm opacity-75 mt-1">
              AI-Powered Balance Forecasting and Smart Financial Guidance.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">
            <span className="text-sm">Enable Smart Auto Guidance Mode</span>
            <Switch defaultChecked />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-6 text-sm opacity-75">
          <a href="#" className="hover:text-[#F37021] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#F37021] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#F37021] transition-colors">Security</a>
          <a href="#" className="hover:text-[#F37021] transition-colors">Help Center</a>
          <a href="#" className="hover:text-[#F37021] transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
