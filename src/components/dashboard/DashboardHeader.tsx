import { motion } from "framer-motion";
import { Bell, Shield, AlertTriangle, Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import GlobalFilters from "@/components/dashboard/GlobalFilters";
import ExportMenu from "@/components/dashboard/ExportMenu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface DashboardHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

const DashboardHeader = ({ title, onMenuClick }: DashboardHeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="lg:hidden">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-xl bg-elevated hover:bg-glass-hover transition-colors"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5 text-text-primary" />
            </button>
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tight text-text-primary">
              {title || "Overview"}
            </h1>
            <div className="flex items-center gap-2 mt-0.5 md:mt-1">
              <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
              <span className="text-[10px] md:text-xs font-medium text-text-secondary tracking-wide uppercase">
                National Governance Authority
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Main actions and filters in header on desktop, some in Sheet for mobile */}
          <div className="hidden md:flex items-center gap-3">
            <GlobalFilters />
            <ExportMenu />

            {/* Alerts */}
            <button className="glass-card glow-hover relative p-2.5 hover:border-primary/30 transition-colors" title="Critical Alerts">
              <AlertTriangle className="w-4 h-4 text-amber" />
              <span className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-destructive animate-pulse-glow" />
            </button>

            {/* Notifications */}
            <button className="glass-card glow-hover relative p-2.5 hover:border-primary/30 transition-colors" title="Recent Notifications">
              <Bell className="w-4 h-4 text-text-secondary" />
              <span className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary animate-pulse-glow" />
            </button>
          </div>

          {/* Mobile actions Sheet for secondary header items */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-xl bg-elevated hover:bg-glass-hover transition-colors">
                  <Bell className="w-5 h-5 text-text-secondary" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-card border-glass-border w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-text-primary text-left flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Notifications & Filters
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary opacity-70">Filters</p>
                    <GlobalFilters mobile />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-secondary opacity-70">Actions</p>
                    <div className="flex flex-col gap-3">
                      <ExportMenu />
                      <button className="flex items-center gap-3 glass-card p-3 w-full hover:border-primary/30 transition-colors">
                        <AlertTriangle className="w-4 h-4 text-amber" />
                        <span className="text-sm text-text-primary">Critical Alerts</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
