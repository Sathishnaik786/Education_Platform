import { motion } from "framer-motion";
import { Brain, TrendingUp, Sliders } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { getChartTheme, getTooltipStyle } from "@/lib/chart-theme";
import { cn } from "@/lib/utils";

const enrollmentForecast = [
  { year: "2020", actual: 290, predicted: null },
  { year: "2021", actual: 310, predicted: null },
  { year: "2022", actual: 328, predicted: null },
  { year: "2023", actual: 345, predicted: null },
  { year: "2024", actual: 345, predicted: 348 },
  { year: "2025", actual: null, predicted: 368 },
  { year: "2026", actual: null, predicted: 392 },
  { year: "2027", actual: null, predicted: 410 },
  { year: "2028", actual: null, predicted: 435 },
  { year: "2029", actual: null, predicted: 458 },
];

const skillDemand = [
  { skill: "AI/ML", current: 45, "2025": 62, "2028": 88 },
  { skill: "Cloud", current: 55, "2025": 68, "2028": 82 },
  { skill: "Cybersecurity", current: 38, "2025": 55, "2028": 78 },
  { skill: "Data Science", current: 50, "2025": 65, "2028": 85 },
  { skill: "IoT", current: 30, "2025": 48, "2028": 70 },
  { skill: "Blockchain", current: 20, "2025": 35, "2028": 55 },
];

const budgetScenarios = [
  { category: "Infrastructure", conservative: 4200, moderate: 5800, aggressive: 7500 },
  { category: "Scholarships", conservative: 3800, moderate: 5200, aggressive: 6800 },
  { category: "Faculty", conservative: 2200, moderate: 3100, aggressive: 4200 },
  { category: "Research", conservative: 1800, moderate: 2600, aggressive: 3800 },
  { category: "Digital", conservative: 1200, moderate: 2000, aggressive: 3200 },
];

const stateGrowth = [
  { state: "Maharashtra", growth: 8.2, risk: "low" },
  { state: "Karnataka", growth: 9.1, risk: "low" },
  { state: "Tamil Nadu", growth: 7.5, risk: "low" },
  { state: "UP", growth: 4.2, risk: "medium" },
  { state: "Bihar", growth: 3.1, risk: "high" },
  { state: "Rajasthan", growth: 5.4, risk: "medium" },
  { state: "MP", growth: 4.8, risk: "medium" },
  { state: "West Bengal", growth: 6.2, risk: "low" },
];

const riskColors: Record<string, string> = {
  low: "bg-accent/15 text-accent",
  medium: "bg-amber/15 text-amber",
  high: "bg-destructive/15 text-destructive",
};

const Analytics = () => {
  const theme = getChartTheme();
  const tooltipStyle = getTooltipStyle();

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-4 md:p-6 space-y-6">

      {/* Forecast Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          { label: "Enrollment Forecast 2029", value: "458M", confidence: "94%", trend: "+32.7%" },
          { label: "Scholarship Demand FY25", value: "2.8M", confidence: "91%", trend: "+28%" },
          { label: "Budget Requirement 2028", value: "₹27,000Cr", confidence: "87%", trend: "+46%" },
        ].map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-5 md:p-6">
            <p className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider">{m.label}</p>
            <p className="text-xl md:text-2xl font-bold text-gradient-primary mt-1 font-tabular">{m.value}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] md:text-xs text-accent font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3" />{m.trend}</span>
              <span className="text-[9px] md:text-[10px] text-text-secondary">Conf: {m.confidence}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enrollment Forecast */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Enrollment Growth Prediction</h3>
            <p className="text-xs text-text-secondary mt-0.5">Historical data + AI forecast (in millions)</p>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-elevated text-xs font-medium text-text-secondary hover:text-text-primary transition-colors glow-hover"><Sliders className="w-3.5 h-3.5" />Adjust Model</button>
        </div>
        <div className="h-[250px] md:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={enrollmentForecast}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: theme.axis, fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: theme.axis, fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="actual" stroke={theme.primary} strokeWidth={2.5} dot={{ fill: theme.primary, r: 4 }} connectNulls={false} name="Actual" />
              <Line type="monotone" dataKey="predicted" stroke={theme.accent} strokeWidth={2.5} strokeDasharray="8 4" dot={{ fill: theme.accent, r: 4 }} connectNulls={false} name="Predicted" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Skill Demand + State Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-4 md:p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-1">Skill Demand Forecast (5-Year)</h3>
          <p className="text-xs text-text-secondary mb-6">Industry demand index</p>
          <div className="h-[240px] md:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillDemand} barSize={12}>
                <XAxis dataKey="skill" tick={{ fill: theme.axis, fontSize: 9 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: theme.axis, fontSize: 9 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="current" fill={theme.muted} radius={[4, 4, 0, 0]} name="Current" />
                <Bar dataKey="2025" fill={theme.primary} radius={[4, 4, 0, 0]} name="2025" />
                <Bar dataKey="2028" fill={theme.accent} radius={[4, 4, 0, 0]} name="2028" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-4 md:p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">State-wise Growth & Risk</h3>
          <div className="space-y-3">
            {stateGrowth.map((s, i) => (
              <div key={s.state} className="flex items-center justify-between p-2.5 rounded-xl bg-elevated/40 hover:bg-glass-hover transition-colors">
                <span className="text-xs font-medium text-text-primary w-24 truncate">{s.state}</span>
                <div className="flex-1 mx-3 h-1.5 rounded-full bg-elevated overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${s.growth * 10}%` }} transition={{ delay: 0.5 + i * 0.06, duration: 0.8 }} className="h-full rounded-full gradient-primary" />
                </div>
                <span className="text-[10px] text-text-primary font-medium w-8 text-right font-tabular">{s.growth}%</span>
                <span className={cn("hidden sm:inline-block px-2 py-0.5 rounded-md text-[9px] font-semibold ml-2", riskColors[s.risk])}>{s.risk}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Budget Scenarios */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-4 md:p-6 pb-2">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Budget Requirement Simulation (₹ Crores)</h3>
        <div className="overflow-x-auto scrollbar-thin -mx-2 px-2">
          <table className="w-full text-sm min-w-[600px] sm:min-w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-3 text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Category</th>
                <th className="text-left py-3 px-3 text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Conservative</th>
                <th className="text-left py-3 px-3 text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Moderate</th>
                <th className="text-left py-3 px-3 text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Aggressive</th>
              </tr>
            </thead>
            <tbody>
              {budgetScenarios.map((b) => (
                <tr key={b.category} className="border-b border-border/50 hover:bg-glass-hover transition-colors">
                  <td className="py-3 px-3 font-medium text-text-primary text-xs">{b.category}</td>
                  <td className="py-3 px-3 text-text-secondary font-tabular text-xs">₹{b.conservative.toLocaleString()}</td>
                  <td className="py-3 px-3 text-primary font-semibold font-tabular text-xs">₹{b.moderate.toLocaleString()}</td>
                  <td className="py-3 px-3 text-accent font-semibold font-tabular text-xs">₹{b.aggressive.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
