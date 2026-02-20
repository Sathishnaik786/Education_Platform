import { motion } from "framer-motion";
import { AlertTriangle, Info, AlertCircle } from "lucide-react";

const alerts = [
  {
    title: "Bihar Cluster — Critical Dropout Surge",
    description: "15 districts reporting >15% dropout rate. Immediate intervention needed.",
    severity: "critical" as const,
    time: "2 hours ago",
  },
  {
    title: "Budget Deadline Alert — Q4 Lapsing",
    description: "₹576Cr remains unutilized across 3 states. 21 days to deadline.",
    severity: "warning" as const,
    time: "5 hours ago",
  },
  {
    title: "NAAC Accreditation Cycle Open",
    description: "142 institutions due for re-accreditation by March 2024.",
    severity: "info" as const,
    time: "1 day ago",
  },
  {
    title: "PM SHRI Schools — Phase 2 Approved",
    description: "4,000 new schools approved for upgradation under NEP 2020.",
    severity: "info" as const,
    time: "2 days ago",
  },
];

const severityMap = {
  critical: {
    icon: AlertTriangle,
    border: "border-l-destructive",
    badge: "bg-destructive/15 text-destructive",
    label: "Critical",
  },
  warning: {
    icon: AlertCircle,
    border: "border-l-amber",
    badge: "bg-amber/15 text-amber",
    label: "Warning",
  },
  info: {
    icon: Info,
    border: "border-l-primary",
    badge: "bg-primary/15 text-primary",
    label: "Info",
  },
};

const AlertPanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="glass-card p-4 md:p-6"
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3">
      <div>
        <h3 className="text-lg font-semibold text-text-primary">Active Alerts</h3>
        <p className="text-xs text-text-secondary mt-0.5">Real-time policy & operations alerts</p>
      </div>
      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-destructive/15 text-destructive sm:ml-auto">
        {alerts.filter((a) => a.severity === "critical").length} Critical
      </span>
    </div>

    <div className="space-y-3">
      {alerts.map((alert, i) => {
        const config = severityMap[alert.severity];
        const Icon = config.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className={`flex items-start gap-3 p-3 rounded-xl border-l-4 ${config.border} bg-elevated/40 hover:bg-glass-hover transition-colors cursor-pointer group`}
          >
            <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-secondary" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-text-primary leading-tight line-clamp-1 group-hover:line-clamp-none transition-all">{alert.title}</p>
                <span className="text-[9px] text-text-secondary whitespace-nowrap opacity-60">{alert.time}</span>
              </div>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed line-clamp-2 md:line-clamp-1 group-hover:line-clamp-none">{alert.description}</p>
              <div className="mt-2 flex items-center gap-1.5 md:hidden">
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${config.badge}`}>
                  {config.label}
                </span>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1.5 flex-shrink-0">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${config.badge}`}>
                {config.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

export default AlertPanel;
