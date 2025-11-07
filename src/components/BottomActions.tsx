import { FileText, Lock, CreditCard, AlertTriangle } from 'lucide-react';

export function BottomActions() {
  return (
    <div className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <FileText className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-gray-800">Track</p>
              <p className="text-gray-600 text-sm">Applications / Accounts</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Lock className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-gray-800">Smart Lock</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <CreditCard className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-gray-800">Block Card</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <AlertTriangle className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-gray-800">Report Fraud</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
