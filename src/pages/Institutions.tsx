import { motion } from "framer-motion";
import { Search, Filter, ChevronRight, MapPin, Users, TrendingUp, TrendingDown, Star, Building2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

const institutions = [
  { id: 1, name: "IIT Delhi", location: "New Delhi", type: "Engineering", students: 12450, employability: 94, salary: "₹18.5L", research: 9.2, grade: "A++", change: 2, ranking: 1, accredited: true },
  { id: 2, name: "IIT Bombay", location: "Mumbai", type: "Engineering", students: 11800, employability: 93, salary: "₹19.2L", research: 9.4, grade: "A++", change: -1, ranking: 2, accredited: true },
  { id: 3, name: "IISc Bangalore", location: "Bangalore", type: "Research", students: 4500, employability: 88, salary: "₹16.8L", research: 9.8, grade: "A++", change: 0, ranking: 3, accredited: true },
  { id: 4, name: "IIT Madras", location: "Chennai", type: "Engineering", students: 10200, employability: 91, salary: "₹17.5L", research: 9.1, grade: "A++", change: 3, ranking: 4, accredited: true },
  { id: 5, name: "JNU Delhi", location: "New Delhi", type: "University", students: 8900, employability: 78, salary: "₹12.4L", research: 8.5, grade: "A+", change: 0, ranking: 5, accredited: true },
  { id: 6, name: "Delhi University", location: "New Delhi", type: "University", students: 68000, employability: 74, salary: "₹10.2L", research: 7.8, grade: "A+", change: -2, ranking: 6, accredited: true },
  { id: 7, name: "BHU Varanasi", location: "Varanasi", type: "University", students: 35000, employability: 72, salary: "₹9.8L", research: 7.5, grade: "A", change: 1, ranking: 7, accredited: true },
  { id: 8, name: "NIT Trichy", location: "Tiruchirappalli", type: "Engineering", students: 6800, employability: 85, salary: "₹14.2L", research: 7.9, grade: "A+", change: 4, ranking: 8, accredited: true },
  { id: 9, name: "AIIMS Delhi", location: "New Delhi", type: "Medical", students: 2100, employability: 98, salary: "₹22.0L", research: 9.6, grade: "A++", change: 0, ranking: 9, accredited: true },
  { id: 10, name: "Jadavpur University", location: "Kolkata", type: "University", students: 11200, employability: 76, salary: "₹11.5L", research: 7.2, grade: "A", change: -1, ranking: 10, accredited: true },
];

const typeDistribution = [
  { type: "Engineering", count: 3400, color: "hsl(255 60% 52%)" },
  { type: "University", count: 1200, color: "hsl(160 60% 45%)" },
  { type: "Medical", count: 580, color: "hsl(38 92% 50%)" },
  { type: "Research", count: 320, color: "hsl(200 80% 55%)" },
  { type: "Vocational", count: 890, color: "hsl(330 65% 55%)" },
];

const filters = ["All", "Engineering", "University", "Medical", "Research", "Vocational"];

const Institutions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? institutions : institutions.filter(i => i.type === activeFilter);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-4 md:p-6 space-y-6">

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Institutions", value: "6,390", icon: Building2, gradient: "gradient-indigo" },
          { label: "Accredited", value: "4,210", icon: Star, gradient: "gradient-emerald" },
          { label: "Total Students", value: "34.5M", icon: Users, gradient: "gradient-indigo" },
          { label: "Avg Employability", value: "74.2%", icon: TrendingUp, gradient: "gradient-amber" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-5">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${s.gradient}`}><s.icon className="w-4 h-4 text-primary-foreground" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart + Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">Institution Type Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={typeDistribution} layout="vertical" barSize={18}>
              <XAxis type="number" tick={{ fill: "hsl(215 20% 55%)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="type" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
              <Tooltip contentStyle={{ background: "hsl(222 41% 12%)", border: "1px solid hsl(222 30% 22%)", borderRadius: "12px", fontSize: 12, color: "hsl(210 40% 96%)" }} />
              <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                {typeDistribution.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input placeholder="Search institutions..." className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-48" />
            </div>
            <div className="flex gap-1.5">
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeFilter === f ? "bg-indigo/20 text-indigo-glow border border-indigo/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>{f}</button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{filtered.length} institutions shown</p>
        </motion.div>
      </div>

      {/* Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {["Rank", "Institution", "Location", "Type", "Students", "Employability", "Avg Salary", "Research", "Grade", "Trend"].map(h => (
                <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((inst, i) => (
              <motion.tr key={inst.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 + i * 0.03 }} className="border-b border-border/50 hover:bg-glass-hover transition-colors cursor-pointer group">
                <td className="py-3 px-3">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${inst.ranking <= 3 ? "gradient-indigo text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{inst.ranking}</span>
                </td>
                <td className="py-3 px-3 font-medium text-foreground">{inst.name}</td>
                <td className="py-3 px-3 text-muted-foreground"><span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{inst.location}</span></td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-secondary text-muted-foreground">{inst.type}</span></td>
                <td className="py-3 px-3 text-foreground">{inst.students.toLocaleString()}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-1.5 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full gradient-emerald" style={{ width: `${inst.employability}%` }} /></div>
                    <span className="text-xs text-emerald font-medium">{inst.employability}%</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-foreground">{inst.salary}</td>
                <td className="py-3 px-3"><span className="text-indigo-glow font-medium">{inst.research}</span>/10</td>
                <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo/15 text-indigo-glow">{inst.grade}</span></td>
                <td className="py-3 px-3">
                  {inst.change > 0 && <span className="flex items-center gap-1 text-emerald text-xs"><TrendingUp className="w-3.5 h-3.5" />+{inst.change}</span>}
                  {inst.change < 0 && <span className="flex items-center gap-1 text-destructive text-xs"><TrendingDown className="w-3.5 h-3.5" />{inst.change}</span>}
                  {inst.change === 0 && <span className="text-muted-foreground text-xs">—</span>}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Institutions;
