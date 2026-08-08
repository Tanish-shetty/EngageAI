import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">

      <Sidebar />

      <main className="ml-72 min-h-screen">

        <Topbar />

        <div className="p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
}