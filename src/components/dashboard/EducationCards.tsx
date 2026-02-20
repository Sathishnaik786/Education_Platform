import { motion } from "framer-motion";
import { School, GraduationCap, Building2, BookOpen, UserCheck, ArrowRight } from "lucide-react";
import { useDashboardStore, EducationLevel } from "@/store/dashboardStore";

const levels = [
    {
        id: "PRIMARY",
        label: "Primary Education",
        stats: { enrollment: "124M", completion: "92%", dropout: "4.2%" },
        icon: BookOpen,
        color: "indigo",
        metric: "Literacy Rate: 88%"
    },
    {
        id: "SECONDARY",
        label: "Secondary Education",
        stats: { enrollment: "84M", completion: "88%", dropout: "8.5%" },
        icon: School,
        color: "emerald",
        metric: "Proficiency: 74%"
    },
    {
        id: "HIGHSCHOOL",
        label: "High School Education",
        stats: { enrollment: "42M", completion: "76%", dropout: "12.4%" },
        icon: GraduationCap,
        color: "blue",
        metric: "Pass Percentage: 82%"
    },
    {
        id: "COLLEGE",
        label: "College Education",
        stats: { enrollment: "12.4M", completion: "72%", outcomes: "65%" },
        icon: Building2,
        color: "purple",
        metric: "Employment: 68%"
    },
    {
        id: "UNIVERSITY",
        label: "University Education",
        stats: { enrollment: "3.2M", completion: "64%", outcomes: "82%" },
        icon: UserCheck,
        color: "amber",
        metric: "Research: 840/yr"
    }
];

const EducationCards = () => {
    const { selectedLevel, setLevel } = useDashboardStore();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {levels.map((level, i) => {
                const isActive = selectedLevel === level.id;
                return (
                    <motion.div
                        key={level.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setLevel(isActive ? "ALL" : level.id as EducationLevel)}
                        className={`glass-card p-5 group hover:border-primary/50 transition-all cursor-pointer overflow-hidden relative ${isActive
                            ? "ring-2 ring-primary border-primary bg-primary/5 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                            : "hover:shadow-lg"
                            }`}
                    >
                        <div className="flex flex-col h-full relative z-10">
                            <div className={`p-2.5 rounded-xl bg-gradient-to-br from-${level.color}-glow/10 to-${level.color}-glow/5 mb-4 w-fit transition-transform group-hover:scale-110`}>
                                <level.icon className={`w-5 h-5 text-${level.color === 'indigo' ? 'primary' : level.color}`} />
                            </div>
                            <h4 className="font-bold text-text-primary text-sm mb-3">{level.label}</h4>

                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-text-secondary">Enrollment</span>
                                    <span className="font-semibold text-text-primary">{level.stats.enrollment}</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                    <span className="text-text-secondary">Completion</span>
                                    <span className="font-semibold text-text-primary">{level.stats.completion}</span>
                                </div>
                                {level.stats.dropout ? (
                                    <div className="flex justify-between text-[11px]">
                                        <span className="text-text-secondary">Dropout</span>
                                        <span className="font-semibold text-destructive">{level.stats.dropout}</span>
                                    </div>
                                ) : (
                                    <div className="flex justify-between text-[11px]">
                                        <span className="text-text-secondary">Outcomes</span>
                                        <span className="font-semibold text-accent">{level.stats.outcomes}</span>
                                    </div>
                                )}
                            </div>

                            <div className="mt-auto pt-3 border-t border-border/50">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{level.metric}</span>
                                <div className={`flex items-center gap-1 mt-2 text-[10px] font-bold transition-colors ${isActive ? "text-primary" : "text-text-secondary"}`}>
                                    {isActive ? "Currently Viewing" : "Drill down"}
                                    <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className={`absolute -right-4 -bottom-4 w-16 h-16 bg-${level.color === 'indigo' ? 'primary' : (level.color === 'emerald' ? 'emerald' : 'blue')}/10 rounded-full blur-2xl group-hover:scale-150 transition-transform ${isActive ? "opacity-100 scale-150" : "opacity-0"}`} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default EducationCards;
