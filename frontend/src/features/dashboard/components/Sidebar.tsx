import {
  LayoutDashboard,
  Sparkles,
  Hash,
  TrendingUp,
  History,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  
  {
    name: "Prediction",
    path: "/dashboard/prediction",
    icon: TrendingUp,
  },

  {
    name: "Caption Generator",
    path: "/dashboard/captions",
    icon: Sparkles,
  },
  {
    name: "Hashtag Generator",
    path: "/dashboard/hashtags",
    icon: Hash,
  },
  
  {
    name: "Prediction History",
    path: "/dashboard/history",
    icon: History,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-purple-500/10 bg-black/40 backdrop-blur-xl">

      <div className="border-b border-purple-500/10 p-8">
        <h1 className="gradient-text text-3xl font-bold">
          EngageAI
        </h1>
      </div>

      <nav className="space-y-2 p-5">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/20"
                    : "text-foreground/70 hover:bg-purple-500/10 hover:text-white"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
}