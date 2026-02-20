import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Award, TrendingUp, AlertTriangle } from "lucide-react";
import { useDashboardStore } from "@/store/dashboardStore";
import { dashboardData } from "@/data/dashboardData";
import KPICard from "./KPICard";

const AnimatedKPICards = () => {
    const { selectedLevel } = useDashboardStore();
    const data = dashboardData[selectedLevel];

    const kpiConfigs = [
        {
            title: "Total Enrollment",
            value: data.enrollment.value,
            suffix: data.enrollment.unit,
            change: data.enrollment.change,
            icon: Users,
            gradient: "indigo" as const
        },
        {
            title: "Completion Rate",
            value: data.completionRate.value,
            suffix: "%",
            change: data.completionRate.change,
            icon: BookOpen,
            gradient: "emerald" as const
        },
        {
            title: "Quality Index",
            value: data.qualityIndex.value,
            suffix: "",
            change: data.qualityIndex.change,
            icon: Award,
            gradient: "indigo" as const
        },
        {
            title: "Budget Util.",
            value: data.budgetUtilization.value,
            suffix: "%",
            change: data.budgetUtilization.change,
            icon: TrendingUp,
            gradient: "amber" as const
        },
        ...(data.employment ? [{
            title: "Employment Outcomes",
            value: data.employment.value,
            suffix: "%",
            change: data.employment.change,
            icon: TrendingUp,
            gradient: "emerald" as const
        }] : []),
        ...(data.research ? [{
            title: "Research Index",
            value: data.research.value,
            suffix: data.research.unit,
            change: data.research.change,
            icon: Award,
            gradient: "indigo" as const
        }] : []),
        {
            title: "Dropout Rate",
            value: data.dropoutRate.value,
            suffix: "%",
            change: data.dropoutRate.change,
            icon: AlertTriangle,
            gradient: "amber" as const
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 min-h-[140px]">
            <AnimatePresence mode="popLayout" initial={false}>
                {kpiConfigs.map((kpi, i) => (
                    <motion.div
                        key={`${selectedLevel}-${kpi.title}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{
                            duration: 0.3,
                            delay: i * 0.05,
                            ease: "easeOut"
                        }}
                        layout
                    >
                        <KPICard
                            {...kpi}
                            progress={kpi.value}
                            sparkData={[kpi.value * 0.9, kpi.value * 1.1, kpi.value]}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedKPICards;
