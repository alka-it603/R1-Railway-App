import React from "react";
import {
  User,
  Bell,
  Shield,
  Save,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">

      {/* =========================
          Profile Settings
      ========================= */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <div className="flex items-center gap-3 mb-6">

          <User className="text-blue-900" size={24} />

          <h2 className="text-2xl font-semibold text-blue-900">
            Profile Settings
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm mb-2 text-slate-600">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="System Administrator"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            />

          </div>

          <div>

            <label className="block text-sm mb-2 text-slate-600">
              Email
            </label>

            <input
              type="email"
              defaultValue="admin@r1.com"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            />

          </div>

        </div>

      </div>

      {/* =========================
          Notification Settings
      ========================= */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <div className="flex items-center gap-3 mb-6">

          <Bell className="text-blue-900" size={24} />

          <h2 className="text-2xl font-semibold text-blue-900">
            Notifications
          </h2>

        </div>

        <div className="space-y-4">

          <label className="flex items-center justify-between">

            <span>Email Notifications</span>

            <input type="checkbox" defaultChecked />

          </label>

          <label className="flex items-center justify-between">

            <span>SMS Notifications</span>

            <input type="checkbox" />

          </label>

          <label className="flex items-center justify-between">

            <span>Emergency Alerts</span>

            <input type="checkbox" defaultChecked />

          </label>

        </div>

      </div>

      {/* =========================
          Security
      ========================= */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <div className="flex items-center gap-3 mb-6">

          <Shield className="text-blue-900" size={24} />

          <h2 className="text-2xl font-semibold text-blue-900">
            Security
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm mb-2 text-slate-600">
              New Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            />

          </div>

          <div>

            <label className="block text-sm mb-2 text-slate-600">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            />

          </div>

        </div>

      </div>

      {/* =========================
          Save Button
      ========================= */}

      <div className="flex justify-end">

        <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">

          <Save size={18} />

          Save Changes

        </button>

      </div>

    </div>
  );
}