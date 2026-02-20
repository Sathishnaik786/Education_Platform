import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/components/NavLink";
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
    Menu,
    X,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const navItems = [
    { label: "Overview", icon: LayoutDashboard, path: "/" },
    { label: "Institutions", icon: GraduationCap, path: "/institutions" },
    { label: "Scholarships", icon: Award, path: "/scholarships" },
    { label: "Impact", icon: TrendingUp, path: "/impact" },
    { label: "Analytics", icon: BarChart3, path: "/analytics" },
    { label: "Governance", icon: Landmark, path: "/governance" },
    { label: "Reports", icon: FileBarChart, path: "/reports" },
];

const pageTitles: Record<string, string> = {
    "/": "Welcome, Minister",
    "/institutions": "Institutions",
    "/scholarships": "Scholarships",
    "/impact": "National Impact",
    "/analytics": "Advanced Analytics",
    "/governance": "Governance",
    "/reports": "Strategic Reports",
};

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pageTitle = pageTitles[location.pathname] || "EduGov Portal";

    const SidebarContent = () => (
        <>
            {/* Logo */}
            <div className="p-6 pb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center glow-primary">
                        <Landmark className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-text-primary tracking-tight">EduGov</h2>
                        <p className="text-[9px] text-text-secondary uppercase tracking-widest">National Portal</p>
                    </div>
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
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative ${isActive
                                ? "text-primary-foreground"
                                : "text-sidebar-foreground hover:text-text-primary hover:bg-sidebar-accent"
                                }`}
                            activeClassName=""
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute inset-0 rounded-xl gradient-primary glow-primary"
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
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground hover:text-text-primary hover:bg-sidebar-accent transition-all w-full">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                </button>
                <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground hover:text-destructive hover:bg-destructive/10 transition-all w-full">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                </button>
            </div>
        </>
    );

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Desktop sidebar — fixed height, independent scroll */}
            <aside className="hidden lg:flex w-[220px] h-full flex-col border-r border-border bg-sidebar gradient-surface flex-shrink-0 overflow-y-auto scrollbar-thin">
                <SidebarContent />
            </aside>

            {/* Mobile sidebar overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="lg:hidden fixed top-0 left-0 z-50 w-[260px] h-full flex flex-col border-r border-border bg-sidebar gradient-surface"
                        >
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-elevated transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-4 h-4 text-text-secondary" />
                            </button>
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main content — sole scroll container */}
            <main className="flex-1 h-full overflow-y-auto scrollbar-thin flex flex-col">
                <DashboardHeader
                    title={pageTitle}
                    onMenuClick={() => setSidebarOpen(true)}
                />
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
