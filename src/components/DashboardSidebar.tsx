import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  Award,
  TrendingUp,
  BarChart3,
  Landmark,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/" },
  { label: "Institutions", icon: GraduationCap, path: "/institutions" },
  { label: "Scholarships", icon: Award, path: "/scholarships" },
  { label: "Impact", icon: TrendingUp, path: "/impact" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
  { label: "Governance", icon: Landmark, path: "/governance" },
  { label: "Reports", icon: FileBarChart, path: "/reports" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-[220px] h-full flex flex-col border-r border-border bg-sidebar gradient-navy overflow-y-auto scrollbar-thin">
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-indigo flex items-center justify-center glow-indigo">
              <Landmark className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground tracking-tight">EduGov</h2>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest">National Portal</p>
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative ${isActive
                ? "text-primary-foreground"
                : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent"
                }`}
              activeClassName=""
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-xl gradient-indigo glow-indigo"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <item.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 space-y-0.5 border-t border-border">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent transition-all w-full">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground hover:text-destructive hover:bg-destructive/10 transition-all w-full">
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
