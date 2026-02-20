import { motion } from "framer-motion";
import { Award, Users, IndianRupee, TrendingUp, CheckCircle, Clock, XCircle, AlertTriangle, ChevronRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const statusData = [
  { name: "Approved", value: 1820000, color: "hsl(160 60% 45%)" },
  { name: "Pending", value: 420000, color: "hsl(38 92% 50%)" },
  { name: "Rejected", value: 210000, color: "hsl(0 72% 51%)" },
];

const trendData = [
  { month: "Jul", applications: 180, approved: 140, disbursed: 120 },
  { month: "Aug", applications: 210, approved: 165, disbursed: 145 },
  { month: "Sep", applications: 320, approved: 250, disbursed: 200 },
  { month: "Oct", applications: 280, approved: 220, disbursed: 195 },
  { month: "Nov", applications: 190, approved: 160, disbursed: 150 },
  { month: "Dec", applications: 160, approved: 130, disbursed: 125 },
  { month: "Jan", applications: 240, approved: 200, disbursed: 180 },
  { month: "Feb", applications: 290, approved: 235, disbursed: 210 },
];

const schemes = [
  { name: "National Merit Scholarship", beneficiaries: "4,20,000", budget: "₹3,200Cr", utilization: 78, status: "active" },
  { name: "PM Vidya Lakshmi", beneficiaries: "3,80,000", budget: "₹2,800Cr", utilization: 85, status: "active" },
  { name: "SC/ST Scholarship", beneficiaries: "5,60,000", budget: "₹4,500Cr", utilization: 92, status: "active" },
  { name: "Minority Scholarship", beneficiaries: "2,10,000", budget: "₹1,600Cr", utilization: 67, status: "active" },
  { name: "Girls Education Fund", beneficiaries: "1,80,000", budget: "₹1,200Cr", utilization: 71, status: "active" },
  { name: "Research Fellowship", beneficiaries: "45,000", budget: "₹800Cr", utilization: 55, status: "review" },
];

const recentApplications = [
  { id: "SCH-2024-001", name: "Priya Sharma", scheme: "National Merit", amount: "₹1,20,000", status: "approved", date: "2 hours ago" },
  { id: "SCH-2024-002", name: "Rahul Kumar", scheme: "SC/ST Scholarship", amount: "₹85,000", status: "pending", date: "3 hours ago" },
  { id: "SCH-2024-003", name: "Anita Desai", scheme: "Girls Education", amount: "₹60,000", status: "approved", date: "5 hours ago" },
  { id: "SCH-2024-004", name: "Mohammed Ali", scheme: "Minority", amount: "₹75,000", status: "pending", date: "6 hours ago" },
  { id: "SCH-2024-005", name: "Deepak Singh", scheme: "PM Vidya Lakshmi", amount: "₹1,50,000", status: "rejected", date: "8 hours ago" },
];

const statusIcons: Record<string, { icon: typeof CheckCircle; color: string }> = {
  approved: { icon: CheckCircle, color: "text-emerald" },
  pending: { icon: Clock, color: "text-amber" },
  rejected: { icon: XCircle, color: "text-destructive" },
};

const Scholarships = () => {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-4 md:p-6 space-y-6">

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Beneficiaries", value: "18.2L", icon: Users, gradient: "gradient-indigo", change: "+12.4%" },
          { label: "Budget Allocated", value: "₹14,100Cr", icon: IndianRupee, gradient: "gradient-emerald", change: "+8.2%" },
          { label: "Disbursed", value: "₹11,800Cr", icon: Award, gradient: "gradient-indigo", change: "83.7%" },
          { label: "Pending Review", value: "4.2L", icon: Clock, gradient: "gradient-amber", change: "-15%" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
                <p className="text-xs text-emerald mt-1 font-medium">{s.change}</p>
              </div>
              <div className={`p-2.5 rounded-xl ${s.gradient}`}><s.icon className="w-5 h-5 text-primary-foreground" /></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Application Trend */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass-card p-6">
          <h3 className="text-sm font-semibold text-foreground mb-1">Application & Disbursement Trends</h3>
          <p className="text-xs text-muted-foreground mb-4">Monthly volume (in thousands)</p>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="appGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(255 60% 52%)" stopOpacity={0.3} /><stop offset="100%" stopColor="hsl(255 60% 52%)" stopOpacity={0} /></linearGradient>
                <linearGradient id="disGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(160 60% 45%)" stopOpacity={0.3} /><stop offset="100%" stopColor="hsl(160 60% 45%)" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 18%)" />
              <XAxis dataKey="month" tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(222 41% 12%)", border: "1px solid hsl(222 30% 22%)", borderRadius: "12px", fontSize: 12, color: "hsl(210 40% 96%)" }} />
              <Area type="monotone" dataKey="applications" stroke="hsl(255 60% 52%)" fill="url(#appGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="disbursed" stroke="hsl(160 60% 45%)" fill="url(#disGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Status Pie */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">Application Status</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={statusData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value">
                {statusData.map((d, i) => <Cell key={i} fill={d.color} stroke="none" />)}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(222 41% 12%)", border: "1px solid hsl(222 30% 22%)", borderRadius: "12px", fontSize: 12, color: "hsl(210 40% 96%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {statusData.map(d => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />{d.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Schemes Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Active Scholarship Schemes</h3>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {["Scheme", "Beneficiaries", "Budget", "Utilization", "Status"].map(h => (
                  <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schemes.map((s, i) => (
                <motion.tr key={s.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 + i * 0.04 }} className="border-b border-border/50 hover:bg-glass-hover transition-colors cursor-pointer">
                  <td className="py-3 px-3 font-medium text-foreground">{s.name}</td>
                  <td className="py-3 px-3 text-muted-foreground">{s.beneficiaries}</td>
                  <td className="py-3 px-3 text-foreground">{s.budget}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 rounded-full bg-secondary overflow-hidden"><div className={`h-full rounded-full ${s.utilization > 80 ? "gradient-emerald" : s.utilization > 60 ? "gradient-indigo" : "gradient-amber"}`} style={{ width: `${s.utilization}%` }} /></div>
                      <span className="text-xs font-medium text-foreground">{s.utilization}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3"><span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${s.status === "active" ? "bg-emerald/15 text-emerald" : "bg-amber/15 text-amber"}`}>{s.status === "active" ? "Active" : "Under Review"}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Recent Applications */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">Recent Applications</h3>
          <button className="text-xs text-indigo hover:text-indigo-glow transition-colors font-medium flex items-center gap-1">View All <ChevronRight className="w-3 h-3" /></button>
        </div>
        <div className="space-y-2">
          {recentApplications.map((app, i) => {
            const s = statusIcons[app.status];
            return (
              <div key={app.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-glass-hover transition-colors">
                <div className="flex items-center gap-3">
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{app.name}</p>
                    <p className="text-[10px] text-muted-foreground">{app.id} · {app.scheme}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{app.amount}</p>
                  <p className="text-[10px] text-muted-foreground">{app.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Scholarships;
