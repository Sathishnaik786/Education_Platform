import { motion } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import { getChartTheme } from "@/lib/chart-theme";
import { cn } from "@/lib/utils";

const data = [
  { skill: "Data Literacy", demand: 90, curriculum: 55, output: 48 },
  { skill: "Technical", demand: 85, curriculum: 70, output: 65 },
  { skill: "Communication", demand: 78, curriculum: 72, output: 70 },
  { skill: "Critical Thinking", demand: 82, curriculum: 50, output: 45 },
  { skill: "Leadership", demand: 75, curriculum: 40, output: 35 },
  { skill: "AI Readiness", demand: 95, curriculum: 30, output: 22 },
  { skill: "Digital Skills", demand: 88, curriculum: 60, output: 55 },
];

const gapStatus = [
  { skill: "AI Readiness", gap: 73, status: "critical" },
  { skill: "Critical Thinking", gap: 37, status: "critical" },
  { skill: "Leadership", gap: 40, status: "critical" },
  { skill: "Data Literacy", gap: 42, status: "narrowing" },
  { skill: "Digital Skills", gap: 33, status: "narrowing" },
  { skill: "Technical", gap: 20, status: "aligned" },
  { skill: "Communication", gap: 8, status: "aligned" },
];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  critical: { bg: "bg-destructive/15", text: "text-destructive", label: "Critical Gap" },
  narrowing: { bg: "bg-amber/15", text: "text-amber", label: "Narrowing" },
  aligned: { bg: "bg-accent/15", text: "text-accent", label: "Aligned" },
};

const SkillsRadar = () => {
  const theme = getChartTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-4 md:p-6"
    >
      <h3 className="text-lg font-semibold text-text-primary mb-1">Skills Gap & Employability Engine</h3>
      <p className="text-xs text-text-secondary mb-6">Industry demand vs curriculum alignment</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
        <div className="h-[280px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid stroke={theme.grid} />
              <PolarAngleAxis dataKey="skill" tick={{ fill: theme.axis, fontSize: 10 }} />
              <PolarRadiusAxis tick={false} axisLine={false} />
              <Radar name="Industry" dataKey="demand" stroke={theme.primary} fill={theme.primary} fillOpacity={0.15} strokeWidth={2} />
              <Radar name="Curriculum" dataKey="curriculum" stroke={theme.accent} fill={theme.accent} fillOpacity={0.15} strokeWidth={2} />
              <Radar name="Graduate" dataKey="output" stroke={theme.amber} fill={theme.amber} fillOpacity={0.1} strokeWidth={2} />
              <Legend wrapperStyle={{ fontSize: 10, color: theme.textSecondary }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:flex md:flex-col">
          {gapStatus.map((item) => {
            const s = statusColors[item.status];
            return (
              <div key={item.skill} className="flex items-center justify-between p-2.5 rounded-xl bg-elevated/40 hover:bg-glass-hover transition-colors">
                <span className="text-[11px] font-medium text-text-primary truncate mr-2">{item.skill}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[10px] text-text-secondary font-tabular">{item.gap}%</span>
                  <span className={cn("px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider", s.bg, s.text)}>
                    {s.label.split(' ')[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsRadar;
