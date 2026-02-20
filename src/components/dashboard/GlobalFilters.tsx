import { useFilters } from "@/contexts/FilterContext";
import { Calendar, MapPin, BookOpen, IndianRupee, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const years = ["2022-23", "2023-24", "2024-25", "2025-26", "2026-27"];
const regions = ["All Regions", "North", "South", "East", "West", "Central", "North-East"];
const programs = ["All Programs", "Primary", "Secondary", "High School", "College", "University"];
const budgetCategories = ["All Categories", "Infrastructure", "Scholarships", "Faculty", "Research", "Digital"];

const selectClasses = "w-full glass-card pl-8 pr-3 py-2 text-xs font-medium text-text-primary bg-transparent border-glass-border rounded-xl appearance-none cursor-pointer hover:border-primary/30 transition-colors focus:outline-none focus:ring-1 focus:ring-primary/50";

interface GlobalFiltersProps {
    mobile?: boolean;
}

const GlobalFilters = ({ mobile = false }: GlobalFiltersProps) => {
    const { filters, setFilter, resetFilters } = useFilters();

    return (
        <div className={cn(
            "flex items-center gap-2",
            mobile ? "flex-col items-stretch" : "flex-wrap"
        )}>
            {/* Year */}
            <div className={cn("relative", mobile ? "w-full" : "w-[120px]")}>
                <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary pointer-events-none" />
                <select
                    value={filters.year}
                    onChange={(e) => setFilter("year", e.target.value)}
                    className={selectClasses}
                >
                    {years.map((y) => (
                        <option key={y} value={y} className="bg-surface text-text-primary">{y}</option>
                    ))}
                </select>
            </div>

            {/* Region */}
            <div className={cn("relative", mobile ? "w-full" : "w-[140px]")}>
                <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary pointer-events-none" />
                <select
                    value={filters.region}
                    onChange={(e) => setFilter("region", e.target.value)}
                    className={selectClasses}
                >
                    {regions.map((r) => (
                        <option key={r} value={r} className="bg-surface text-text-primary">{r}</option>
                    ))}
                </select>
            </div>

            {/* Program */}
            <div className={cn("relative", !mobile && "hidden md:block", mobile ? "w-full" : "w-[140px]")}>
                <BookOpen className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary pointer-events-none" />
                <select
                    value={filters.programType}
                    onChange={(e) => setFilter("programType", e.target.value)}
                    className={selectClasses}
                >
                    {programs.map((p) => (
                        <option key={p} value={p} className="bg-surface text-text-primary">{p}</option>
                    ))}
                </select>
            </div>

            {/* Budget */}
            <div className={cn("relative", !mobile && "hidden lg:block", mobile ? "w-full" : "w-[160px]")}>
                <IndianRupee className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary pointer-events-none" />
                <select
                    value={filters.budgetCategory}
                    onChange={(e) => setFilter("budgetCategory", e.target.value)}
                    className={selectClasses}
                >
                    {budgetCategories.map((b) => (
                        <option key={b} value={b} className="bg-surface text-text-primary">{b}</option>
                    ))}
                </select>
            </div>

            {/* Reset */}
            <button
                onClick={resetFilters}
                className={cn(
                    "flex items-center justify-center p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-elevated transition-colors",
                    mobile && "bg-elevated w-full mt-2"
                )}
                title="Reset filters"
            >
                <RotateCcw className="w-3.5 h-3.5" />
                {mobile && <span className="ml-2 text-xs font-medium">Reset All Filters</span>}
            </button>
        </div>
    );
};

export default GlobalFilters;
