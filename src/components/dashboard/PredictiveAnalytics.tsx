import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Sliders } from "lucide-react";
import { getChartTheme, getTooltipStyle } from "@/lib/chart-theme";

const forecastData = [
  { year: "2024", scholarships: 2.4, enrollment: 345, budget: 18500 },
  { year: "2025", scholarships: 2.8, enrollment: 368, budget: 20200 },
  { year: "2026", scholarships: 3.2, enrollment: 392, budget: 22100 },
  { year: "2027", scholarships: 3.5, enrollment: 410, budget: 24500 },
  { year: "2028", scholarships: 3.9, enrollment: 435, budget: 27000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card p-3 !rounded-xl text-xs">
      <p className="font-semibold text-text-primary mb-1">{label}</p>
      <p className="text-text-secondary">
        Scholarships: <span className="text-text-primary font-medium font-tabular">{payload[0]?.value}M</span>
      </p>
    </div>
  );
};

const PredictiveAnalytics = () => {
  const theme = getChartTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Predictive Analytics</h3>
          <p className="text-xs text-text-secondary mt-0.5">AI-powered 5-year forecasting</p>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-elevated text-xs font-medium text-text-secondary hover:text-text-primary transition-colors glow-hover">
          <Sliders className="w-3.5 h-3.5" /> Scenario
        </button>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={forecastData} barSize={32}>
          <XAxis dataKey="year" tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="scholarships" radius={[8, 8, 0, 0]}>
            {forecastData.map((_, i) => (
              <Cell key={i} fill={theme.primary} fillOpacity={0.5 + i * 0.12} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {[
          { label: "Scholarship Demand", value: "+28%", sub: "Next FY" },
          { label: "Enrollment Growth", value: "+6.7%", sub: "Projected" },
          { label: "Budget Required", value: "₹27,000Cr", sub: "By 2028" },
        ].map((m) => (
          <div key={m.label} className="text-center p-3 rounded-xl bg-elevated/50">
            <p className="text-lg font-bold text-gradient-primary font-tabular">{m.value}</p>
            <p className="text-[10px] text-text-secondary mt-0.5">{m.label}</p>
            <p className="text-[9px] text-text-secondary">{m.sub}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PredictiveAnalytics;
