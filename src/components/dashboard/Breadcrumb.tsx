import { motion } from "framer-motion";
import { ChevronRight, Home, RotateCcw } from "lucide-react";
import { useDashboardStore } from "@/store/dashboardStore";

const Breadcrumb = () => {
    const { selectedLevel, setLevel } = useDashboardStore();

    const levelLabels: Record<string, string> = {
        ALL: "National Overview",
        PRIMARY: "Primary Education",
        SECONDARY: "Secondary Education",
        HIGHSCHOOL: "High School Education",
        COLLEGE: "College Education",
        UNIVERSITY: "University Education",
    };

    return (
        <div className="flex items-center justify-between py-2 px-1">
            <nav className="flex items-center space-x-2 text-sm">
                <div
                    className="flex items-center text-text-secondary hover:text-primary transition-colors cursor-pointer"
                    onClick={() => setLevel("ALL")}
                >
                    <Home className="w-4 h-4 mr-1" />
                    <span>National</span>
                </div>

                {selectedLevel !== "ALL" && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <ChevronRight className="w-4 h-4 text-text-secondary" />
                        <span className="ml-2 font-semibold text-primary">
                            {levelLabels[selectedLevel]}
                        </span>
                    </motion.div>
                )}
            </nav>

            {selectedLevel !== "ALL" && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLevel("ALL")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-bold text-text-secondary hover:text-primary transition-all group overflow-hidden"
                >
                    <RotateCcw className="w-3.5 h-3.5 group-hover:rotate-[-45deg] transition-transform flex-shrink-0" />
                    <span className="hidden sm:inline">Reset to National View</span>
                    <span className="sm:hidden">Reset</span>
                </motion.button>
            )}
        </div>
    );
};

export default Breadcrumb;
