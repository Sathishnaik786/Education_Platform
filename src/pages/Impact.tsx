import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, Briefcase, GraduationCap, Users, Globe } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

const roiTrend = [
  { year: "2018", roi: 2.8, gdp: 0.4 },
  { year: "2019", roi: 3.1, gdp: 0.5 },
  { year: "2020", roi: 2.9, gdp: 0.45 },
  { year: "2021", roi: 3.4, gdp: 0.55 },
  { year: "2022", roi: 3.8, gdp: 0.65 },
  { year: "2023", roi: 4.0, gdp: 0.72 },
  { year: "2024", roi: 4.2, gdp: 0.80 },
];

const sectorImpact = [
  { sector: "IT & Software", impact: 92, color: "hsl(255 60% 52%)" },
  { sector: "Healthcare", impact: 78, color: "hsl(160 60% 45%)" },
  { sector: "Manufacturing", impact: 65, color: "hsl(38 92% 50%)" },
  { sector: "Agriculture", impact: 55, color: "hsl(200 80% 55%)" },
  { sector: "Education", impact: 70, color: "hsl(330 65% 55%)" },
  { sector: "Finance", impact: 82, color: "hsl(255 80% 65%)" },
];

const impactMetrics = [
  { label: "Economic ROI", value: "1:4.2", sub: "Per ₹1 invested in education", icon: IndianRupee, gradient: "gradient-indigo" },
  { label: "Jobs Created", value: "12.4L", sub: "Direct employment FY24", icon: Briefcase, gradient: "gradient-emerald" },
  { label: "Graduates Employed", value: "84%", sub: "Within 6 months", icon: GraduationCap, gradient: "gradient-indigo" },
  { label: "GDP Contribution", value: "0.8%", sub: "Annual growth attributable", icon: Globe, gradient: "gradient-amber" },
];

const stateImpact = [
  { state: "Maharashtra", investment: "₹2,400Cr", employment: "2.8L", roi: "1:4.8", growth: "+12%" },
  { state: "Karnataka", investment: "₹1,800Cr", employment: "2.2L", roi: "1:5.1", growth: "+15%" },
  { state: "Tamil Nadu", investment: "₹1,600Cr", employment: "1.9L", roi: "1:4.5", growth: "+10%" },
  { state: "Delhi", investment: "₹1,200Cr", employment: "1.4L", roi: "1:4.2", growth: "+8%" },
  { state: "Uttar Pradesh", investment: "₹2,100Cr", employment: "2.1L", roi: "1:3.2", growth: "+6%" },
  { state: "West Bengal", investment: "₹900Cr", employment: "1.1L", roi: "1:3.8", growth: "+9%" },
  { state: "Rajasthan", investment: "₹800Cr", employment: "0.9L", roi: "1:3.5", growth: "+7%" },
];

const Impact = () => (
  <div className="flex-1 overflow-y-auto scrollbar-thin p-4 md:p-6 space-y-6">

    {/* Impact KPIs */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {impactMetrics.map((m, i) => (
        <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-5">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${m.gradient}`}><m.icon className="w-5 h-5 text-primary-foreground" /></div>
            <div>
              <p className="text-2xl font-bold text-gradient-indigo">{m.value}</p>
              <p className="text-xs font-medium text-foreground">{m.label}</p>
              <p className="text-[10px] text-muted-foreground">{m.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ROI Trend + Sector */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-1">ROI & GDP Contribution Trend</h3>
        <p className="text-xs text-muted-foreground mb-4">7-year trajectory</p>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={roiTrend}>
            <defs>
              <linearGradient id="roiG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(255 60% 52%)" stopOpacity={0.3} /><stop offset="100%" stopColor="hsl(255 60% 52%)" stopOpacity={0} /></linearGradient>
              <linearGradient id="gdpG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(160 60% 45%)" stopOpacity={0.3} /><stop offset="100%" stopColor="hsl(160 60% 45%)" stopOpacity={0} /></linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 18%)" />
            <XAxis dataKey="year" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "hsl(222 41% 12%)", border: "1px solid hsl(222 30% 22%)", borderRadius: "12px", fontSize: 12, color: "hsl(210 40% 96%)" }} />
            <Area type="monotone" dataKey="roi" name="ROI (x)" stroke="hsl(255 60% 52%)" fill="url(#roiG)" strokeWidth={2.5} />
            <Area type="monotone" dataKey="gdp" name="GDP %" stroke="hsl(160 60% 45%)" fill="url(#gdpG)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-1">Sector-wise Employment Impact</h3>
        <p className="text-xs text-muted-foreground mb-4">Graduate placement index by sector</p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={sectorImpact} layout="vertical" barSize={16}>
            <XAxis type="number" tick={{ fill: "hsl(215 20% 55%)", fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 100]} />
            <YAxis type="category" dataKey="sector" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} width={100} />
            <Tooltip contentStyle={{ background: "hsl(222 41% 12%)", border: "1px solid hsl(222 30% 22%)", borderRadius: "12px", fontSize: 12, color: "hsl(210 40% 96%)" }} />
            <Bar dataKey="impact" radius={[0, 8, 8, 0]}>
              {sectorImpact.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    {/* State-wise Impact Table */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
      <h3 className="text-sm font-semibold text-foreground mb-4">State-wise Investment Impact</h3>
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {["State", "Investment", "Employment Generated", "ROI", "YoY Growth"].map(h => (
                <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stateImpact.map((s, i) => (
              <motion.tr key={s.state} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 + i * 0.04 }} className="border-b border-border/50 hover:bg-glass-hover transition-colors cursor-pointer">
                <td className="py-3 px-3 font-medium text-foreground">{s.state}</td>
                <td className="py-3 px-3 text-foreground">{s.investment}</td>
                <td className="py-3 px-3 text-foreground">{s.employment}</td>
                <td className="py-3 px-3 text-gradient-indigo font-semibold">{s.roi}</td>
                <td className="py-3 px-3"><span className="text-emerald font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3" />{s.growth}</span></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
);

export default Impact;
