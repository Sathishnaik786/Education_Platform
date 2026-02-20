import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { getChartTheme } from "@/lib/chart-theme";

const data = [
  { year: "2017", enrollment: 248, literacy: 76, dropout: 15, graduation: 70 },
  { year: "2018", enrollment: 260, literacy: 78, dropout: 14, graduation: 73 },
  { year: "2019", enrollment: 275, literacy: 80, dropout: 12, graduation: 76 },
  { year: "2020", enrollment: 265, literacy: 81, dropout: 13, graduation: 74 },
  { year: "2021", enrollment: 290, literacy: 83, dropout: 11, graduation: 78 },
  { year: "2022", enrollment: 310, literacy: 85, dropout: 10, graduation: 81 },
  { year: "2023", enrollment: 328, literacy: 87, dropout: 9, graduation: 84 },
  { year: "2024", enrollment: 345, literacy: 89, dropout: 8, graduation: 87 },
  { year: "2025", enrollment: 358, literacy: 90, dropout: 7, graduation: 89 },
  { year: "2026", enrollment: 372, literacy: 92, dropout: 6, graduation: 91 },
];

const metrics = [
  { key: "enrollment", label: "Enrollment", themeKey: "primary" as const },
  { key: "literacy", label: "Literacy", themeKey: "accent" as const },
  { key: "dropout", label: "Dropout", themeKey: "destructive" as const },
  { key: "graduation", label: "Graduation", themeKey: "amber" as const },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 !rounded-xl text-xs">
      <p className="font-semibold text-text-primary mb-1">{label}</p>
      {payload.map((entry: any) => (
        <p key={entry.dataKey} className="text-text-secondary">
          <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ background: entry.color }} />
          {entry.name}: <span className="font-medium text-text-primary font-tabular">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

const EnrollmentChart = () => {
  const [activeMetric, setActiveMetric] = useState("enrollment");
  const theme = getChartTheme();

  const colorMap: Record<string, string> = {
    primary: theme.primary,
    accent: theme.accent,
    destructive: theme.destructive,
    amber: theme.amber,
  };

  const activeColor = colorMap[metrics.find((m) => m.key === activeMetric)?.themeKey || "primary"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">National Education Intelligence</h3>
          <p className="text-xs text-text-secondary mt-0.5">10-Year Growth Trends (in millions)</p>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {metrics.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveMetric(m.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeMetric === m.key
                ? "bg-primary/20 text-primary border border-primary/30"
                : "text-text-secondary hover:text-text-primary hover:bg-elevated"
                }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            {metrics.map((m) => (
              <linearGradient key={m.key} id={`grad-${m.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorMap[m.themeKey]} stopOpacity={0.3} />
                <stop offset="100%" stopColor={colorMap[m.themeKey]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} />
          <XAxis dataKey="year" tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={activeMetric}
            stroke={activeColor}
            strokeWidth={2.5}
            fill={`url(#grad-${activeMetric})`}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default EnrollmentChart;
