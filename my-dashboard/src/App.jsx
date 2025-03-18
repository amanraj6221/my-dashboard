import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, Home, BarChart3, Settings } from "lucide-react";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 600 },
];

function Sidebar({ isOpen }) {
  return (
    <div className={`bg-gray-900 text-white p-4 w-60 h-screen fixed ${isOpen ? "block" : "hidden"} md:block`}>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <Home className="mr-2" /> Home
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <BarChart3 className="mr-2" /> Analytics
        </li>
        <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <Settings className="mr-2" /> Settings
        </li>
      </ul>
    </div>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 min-h-screen bg-gray-100 ml-0 md:ml-60">
        <nav className="bg-white p-4 shadow flex justify-between items-center">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu />
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </nav>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Analytics Overview</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
