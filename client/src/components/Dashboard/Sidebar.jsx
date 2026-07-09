import {
  LayoutDashboard,
  Users,
  Mail,
  History,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-800"
    }`;

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          MailPilot AI
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">

        <ul className="space-y-3">

          <li>
            <NavLink
              to="/dashboard"
              className={menuClass}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacts"
              className={menuClass}
            >
              <Users size={20} />
              <span>Contacts</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/campaigns"
              className={menuClass}
            >
              <Mail size={20} />
              <span>Campaigns</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/history"
              className={menuClass}
            >
              <History size={20} />
              <span>History</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={menuClass}
            >
              <Settings size={20} />
              <span>Settings</span>
            </NavLink>
          </li>

        </ul>

      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;