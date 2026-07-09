import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import StatsCards from "../components/Dashboard/StatsCards";
import RecentCampaigns from "../components/Dashboard/RecentCampaigns";
import QuickActions from "../components/Dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 min-h-screen p-8">

        {/* Top Navigation */}
        <Topbar />

        {/* Welcome Section */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-600 mt-2">
            Welcome to MailPilot AI 🚀
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="mt-8">
          <StatsCards />
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <QuickActions />
        </div>

        {/* Recent Campaigns */}
        <div className="mt-8">
          <RecentCampaigns />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;