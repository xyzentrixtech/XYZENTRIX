import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Mail,
  Briefcase,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getDashboardStats } from "../services/api";

type DashboardStats = {
  total: number;
  new: number;
  contacted: number;
  closed: number;
};

function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState<DashboardStats>({
    total: 0,
    new: 0,
    contacted: 0,
    closed: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      }
    }

    loadStats();
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/admin-login");
  };

  const cards = [
    { title: "Total Leads", value: stats.total, icon: Mail },
    { title: "New Leads", value: stats.new, icon: LayoutDashboard },
    { title: "Contacted", value: stats.contacted, icon: Users },
    { title: "Closed", value: stats.closed, icon: Briefcase },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#39FF14]/20 bg-[#0a0a0a] p-6">
        <h1 className="mb-8 text-3xl font-bold text-[#39FF14]">
          XYZENTRIX
        </h1>

        <nav className="space-y-3">
          <button className="flex w-full items-center gap-3 rounded-lg bg-[#39FF14]/10 px-4 py-3 text-[#39FF14]">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-[#39FF14]">
            <Mail size={20} />
            Leads
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-[#39FF14]">
            <Briefcase size={20} />
            Projects
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-[#39FF14]">
            <Users size={20} />
            Clients
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-[#39FF14]">
            <Settings size={20} />
            Settings
          </button>
        </nav>

        <button
          onClick={logout}
          className="mt-10 flex w-full items-center gap-3 rounded-lg border border-red-500/40 px-4 py-3 text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold">Admin Dashboard</h2>

        <p className="mt-2 text-gray-400">
          Welcome back to XYZENTRIX.
        </p>

        {/* Statistics Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#39FF14]/20 bg-[#111] p-6 transition hover:-translate-y-1 hover:border-[#39FF14]"
            >
              <div className="flex items-center justify-between">
                <card.icon className="text-[#39FF14]" size={28} />

                <span className="text-3xl font-bold">
                  {card.value}
                </span>
              </div>

              <p className="mt-4 text-gray-400">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-10 rounded-2xl border border-[#39FF14]/20 bg-[#111] p-8">
          <h3 className="text-2xl font-semibold text-[#39FF14]">
            Recent Activity
          </h3>

          <p className="mt-4 text-gray-400">
            Live CRM widgets, charts, and analytics will appear here in the next update.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;