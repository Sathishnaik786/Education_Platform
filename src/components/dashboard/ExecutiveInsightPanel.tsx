import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, GraduationCap, ChevronRight } from "lucide-react";

const insights = [
    {
        title: "12 Districts at Critical Dropout Risk",
        description:
            "Bihar and Jharkhand clusters show dropout rates exceeding 15%. Immediate intervention required for 48,000+ students at risk.",
        severity: "critical" as const,
        icon: AlertTriangle,
        metric: "15.2%",
        metricLabel: "Avg Dropout",
    },
    {
        title: "Budget Underutilization in 3 States",
        description:
            "₹1,200Cr allocated but only 52% utilized in MP, Rajasthan, and Chhattisgarh. Funds risk lapsing by Q4.",
        severity: "moderate" as const,
        icon: DollarSign,
        metric: "₹576Cr",
        metricLabel: "Unutilized",
    },
    {
        title: "AI & Data Literacy Skill Gap Widening",
        description:
            "73% gap between industry demand and curriculum output for AI readiness. Only 22% of graduates meet baseline.",
        severity: "critical" as const,
        icon: GraduationCap,
        metric: "73%",
        metricLabel: "Skill Gap",
    },
];

const severityConfig = {
    critical: {
        badge: "bg-destructive/15 text-destructive border-destructive/20",
        label: "Critical",
        glow: "border-l-destructive",
    },
    moderate: {
        badge: "bg-amber/15 text-amber border-amber/20",
        label: "Moderate",
        glow: "border-l-amber",
    },
    stable: {
        badge: "bg-accent/15 text-accent border-accent/20",
        label: "Stable",
        glow: "border-l-accent",
    },
};

const ExecutiveInsightPanel = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card p-4 md:p-6"
    >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-4">
            <div>
                <h3 className="text-lg font-semibold text-text-primary">Executive Insights</h3>
                <p className="text-xs text-text-secondary mt-0.5">
                    AI-generated priority recommendations
                </p>
            </div>
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-destructive/15 text-destructive sm:ml-auto">
                {insights.filter((i) => i.severity === "critical").length} Urgent
            </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {insights.map((insight, i) => {
                const sev = severityConfig[insight.severity];
                return (
                    <motion.div
                        key={insight.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className={`p-4 rounded-2xl border-l-4 ${sev.glow} glass-card-hover cursor-pointer group`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="p-2 rounded-xl bg-elevated">
                                <insight.icon className="w-4 h-4 text-text-primary" />
                            </div>
                            <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${sev.badge}`}
                            >
                                {sev.label}
                            </span>
                        </div>

                        <h4 className="text-sm font-semibold text-text-primary mb-1.5 leading-snug">
                            {insight.title}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed mb-3">
                            {insight.description}
                        </p>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-lg font-bold text-gradient-primary font-tabular">
                                    {insight.metric}
                                </span>
                                <span className="text-[10px] text-text-secondary ml-1.5">
                                    {insight.metricLabel}
                                </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    </motion.div>
);

export default ExecutiveInsightPanel;
