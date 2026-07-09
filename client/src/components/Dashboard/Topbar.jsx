import { Bell, Search } from "lucide-react";

function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white shadow-sm rounded-xl p-5 flex justify-between items-center">

      {/* Search Bar */}
      <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg w-96">

        <Search size={20} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-3 w-full"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative">

          <Bell size={24} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>

        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

            {user?.fullName?.charAt(0)}

          </div>

          <div>

            <h3 className="font-semibold">
              {user?.fullName}
            </h3>

            <p className="text-sm text-slate-500">
              {user?.email}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;