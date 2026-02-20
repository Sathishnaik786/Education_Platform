import { useState, useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, School, GraduationCap, Building2 } from "lucide-react";

const institutions = {
  schools: [
    { rank: 1, name: "KV IIT Madras School", type: "Sr. Secondary", accreditation: "CBSE", employability: 88, trending: "up" as const, salary: "N/A", research: "98% Pass" },
    { rank: 2, name: "The Doon School", type: "Sainik", accreditation: "ICSE", employability: 92, trending: "up" as const, salary: "N/A", research: "99% Pass" },
    { rank: 3, name: "Dhirubhai Ambani Intl", type: "Private", accreditation: "IB", employability: 95, trending: "same" as const, salary: "N/A", research: "100% Pass" },
  ],
  colleges: [
    { rank: 1, name: "SRCC Delhi", type: "Commerce", accreditation: "A++", employability: 94, trending: "up" as const, salary: "₹12.4L", research: 140 },
    { rank: 2, name: "St. Stephens", type: "Arts/Science", accreditation: "A++", employability: 91, trending: "up" as const, salary: "₹10.8L", research: 120 },
    { rank: 3, name: "LSR for Women", type: "Humanities", accreditation: "A++", employability: 89, trending: "same" as const, salary: "₹9.2L", research: 95 },
  ],
  universities: [
    { rank: 1, name: "IIT Madras", type: "Engineering", accreditation: "A++", employability: 96, trending: "up" as const, salary: "₹22.4L", research: 840 },
    { rank: 2, name: "IISc Bangalore", type: "Research", accreditation: "A++", employability: 94, trending: "up" as const, salary: "₹18.8L", research: 1240 },
    { rank: 3, name: "IIT Delhi", type: "Engineering", accreditation: "A++", employability: 93, trending: "same" as const, salary: "₹21.2L", research: 780 },
  ]
};

const trendIcons = {
  up: { icon: TrendingUp, color: "text-accent" },
  down: { icon: TrendingDown, color: "text-destructive" },
  same: { icon: Minus, color: "text-text-secondary" },
};

const InstitutionRankings = () => {
  const { selectedLevel } = useDashboardStore();
  const [activeTab, setActiveTab] = useState<keyof typeof institutions>("universities");

  useEffect(() => {
    if (["PRIMARY", "SECONDARY", "HIGHSCHOOL"].includes(selectedLevel)) {
      setActiveTab("schools");
    } else if (selectedLevel === "COLLEGE") {
      setActiveTab("colleges");
    } else if (selectedLevel === "UNIVERSITY") {
      setActiveTab("universities");
    }
  }, [selectedLevel]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="glass-card p-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Institutional Performance</h3>
          <p className="text-xs text-text-secondary mt-0.5">Segregated rankings by education level</p>
        </div>

        <div className="flex bg-secondary/50 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("schools")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === "schools" ? "bg-background text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
          >
            <School className="w-3.5 h-3.5" /> Schools
          </button>
          <button
            onClick={() => setActiveTab("colleges")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === "colleges" ? "bg-background text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Colleges
          </button>
          <button
            onClick={() => setActiveTab("universities")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === "universities" ? "bg-background text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"}`}
          >
            <Building2 className="w-3.5 h-3.5" /> Universities
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-thin -mx-2 px-2">
        <table className="w-full text-sm min-w-[500px] sm:min-w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider w-10">#</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">Institution</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider hidden sm:table-cell">Type</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider hidden lg:table-cell">Grade</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">Employ.</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider hidden md:table-cell">Salary</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider hidden lg:table-cell">Research</th>
              <th className="text-left py-2.5 px-2 text-xs font-semibold text-text-secondary uppercase tracking-wider w-10 text-center">Trend</th>
            </tr>
          </thead>
          <tbody>
            {institutions[activeTab].map((inst, i) => {
              const trend = trendIcons[inst.trending];
              const TrendIcon = trend.icon;
              return (
                <motion.tr
                  key={inst.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="border-b border-border/30 hover:bg-glass-hover transition-colors cursor-pointer group"
                >
                  <td className="py-2.5 px-2 font-tabular">
                    {inst.rank <= 3 ? (
                      <span className="flex items-center justify-center w-6 h-6 rounded-lg gradient-primary text-xs font-bold text-primary-foreground">
                        {inst.rank}
                      </span>
                    ) : (
                      <span className="text-text-secondary text-xs font-medium">{inst.rank}</span>
                    )}
                  </td>
                  <td className="py-2.5 px-2">
                    <div className="font-medium text-text-primary text-sm line-clamp-1">{inst.name}</div>
                    <div className="sm:hidden text-[10px] text-text-secondary">{inst.type}</div>
                  </td>
                  <td className="py-2.5 px-2 text-xs text-text-secondary hidden sm:table-cell">{inst.type}</td>
                  <td className="py-2.5 px-2 hidden lg:table-cell">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-primary/15 text-primary">
                      {inst.accreditation}
                    </span>
                  </td>
                  <td className="py-2.5 px-2 text-sm font-medium text-text-primary font-tabular">{inst.employability}%</td>
                  <td className="py-2.5 px-2 text-sm text-text-secondary font-tabular hidden md:table-cell">
                    {activeTab === "schools" ? "Grade A" : inst.salary}
                  </td>
                  <td className="py-2.5 px-2 text-sm text-text-secondary font-tabular hidden lg:table-cell">{inst.research}</td>
                  <td className="py-2.5 px-2 text-center">
                    <TrendIcon className={`w-4 h-4 mx-auto ${trend.color}`} />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default InstitutionRankings;
