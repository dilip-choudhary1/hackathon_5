import { User, Bell, Shield, CreditCard, Settings as SettingsIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { VoiceAssistant } from './VoiceAssistant';

export function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl text-[#002C5F] mb-6">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <Card className="lg:col-span-2 p-6 rounded-2xl shadow-lg border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#F37021] rounded-xl">
              <User className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-[#002C5F]">Profile Settings</h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Rajesh Kumar"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F37021] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="rajesh.kumar@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F37021] focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F37021] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Customer ID</label>
                <input
                  type="text"
                  defaultValue="ICICI123456"
                  disabled
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <h3 className="text-xl text-[#002C5F] mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button className="w-full bg-[#002C5F] hover:bg-[#003870]">
              Update Profile
            </Button>
            <Button variant="outline" className="w-full border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-white">
              Change Password
            </Button>
            <Button variant="outline" className="w-full">
              Download Statement
            </Button>
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card className="lg:col-span-2 p-6 rounded-2xl shadow-lg border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#F37021] rounded-xl">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-[#002C5F]">Notification Preferences</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-[#002C5F] mb-1">Payment Reminders</p>
                <p className="text-sm text-gray-600">Get notified before EMI due dates</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-[#002C5F] mb-1">Balance Alerts</p>
                <p className="text-sm text-gray-600">Alerts for low balance warnings</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-[#002C5F] mb-1">Investment Suggestions</p>
                <p className="text-sm text-gray-600">AI-powered investment tips</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-[#002C5F] mb-1">Promotional Offers</p>
                <p className="text-sm text-gray-600">Special offers and deals</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 rounded-2xl shadow-lg border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#002C5F] rounded-xl">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl text-[#002C5F]">Security</h3>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
              <p className="text-sm text-green-700 mb-1">Two-Factor Auth</p>
              <p className="text-xs text-green-600">Enabled</p>
            </div>
            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <p className="text-sm text-blue-700 mb-1">Last Login</p>
              <p className="text-xs text-blue-600">Today, 9:30 AM</p>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Shield className="h-4 w-4 mr-2" />
              Security Center
            </Button>
          </div>
        </Card>

        {/* Voice Assistant */}
        <div className="lg:col-span-3">
          <VoiceAssistant />
        </div>
      </div>
    </div>
  );
}
