import { motion } from "framer-motion";
import { FileBarChart, Download, Calendar, Filter, Eye, Share2 } from "lucide-react";
import { useState } from "react";

const reportCategories = ["All", "Financial", "Academic", "Scholarship", "Audit", "Performance"];

const reports = [
  { id: 1, title: "Annual Education Budget Report FY 2023-24", category: "Financial", date: "15 Jan 2024", status: "published", pages: 124, downloads: 1420, format: "PDF" },
  { id: 2, title: "National Enrollment Statistics Report", category: "Academic", date: "10 Jan 2024", status: "published", pages: 86, downloads: 2310, format: "PDF" },
  { id: 3, title: "Scholarship Disbursement Analysis Q4", category: "Scholarship", date: "05 Jan 2024", status: "published", pages: 45, downloads: 890, format: "PDF" },
  { id: 4, title: "State-wise Education Audit Report", category: "Audit", date: "28 Dec 2023", status: "published", pages: 210, downloads: 1650, format: "PDF" },
  { id: 5, title: "Institutional Performance Index 2023", category: "Performance", date: "20 Dec 2023", status: "published", pages: 156, downloads: 3200, format: "PDF" },
  { id: 6, title: "Teacher Training & Development Report", category: "Academic", date: "15 Dec 2023", status: "published", pages: 72, downloads: 780, format: "PDF" },
  { id: 7, title: "Digital Infrastructure Assessment", category: "Performance", date: "10 Dec 2023", status: "draft", pages: 98, downloads: 0, format: "PDF" },
  { id: 8, title: "Gender Parity Index Report", category: "Academic", date: "05 Dec 2023", status: "published", pages: 64, downloads: 1100, format: "PDF" },
  { id: 9, title: "Budget Utilization Audit FY23", category: "Audit", date: "01 Dec 2023", status: "published", pages: 180, downloads: 920, format: "PDF" },
  { id: 10, title: "Scholarship Fraud Investigation Summary", category: "Audit", date: "25 Nov 2023", status: "restricted", pages: 34, downloads: 45, format: "PDF" },
];

const scheduledReports = [
  { title: "Monthly Enrollment Update", frequency: "Monthly", nextDue: "01 Feb 2024", assignee: "Statistics Division" },
  { title: "Quarterly Budget Review", frequency: "Quarterly", nextDue: "31 Mar 2024", assignee: "Finance Wing" },
  { title: "Annual Accreditation Report", frequency: "Annual", nextDue: "30 Jun 2024", assignee: "NAAC" },
  { title: "Scholarship Impact Assessment", frequency: "Biannual", nextDue: "30 Jun 2024", assignee: "Scholarship Cell" },
];

const statusStyles: Record<string, string> = {
  published: "bg-emerald/15 text-emerald",
  draft: "bg-amber/15 text-amber",
  restricted: "bg-destructive/15 text-destructive",
};

const Reports = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? reports : reports.filter(r => r.category === activeCategory);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-4 md:p-6 space-y-6">
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl gradient-indigo text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
          <FileBarChart className="w-4 h-4" /> Generate Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Reports", value: "248" },
          { label: "Published", value: "231" },
          { label: "Downloads (FY24)", value: "45.2K" },
          { label: "Scheduled", value: "12" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-5 text-center">
            <p className="text-2xl font-bold text-gradient-indigo">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        {reportCategories.map(c => (
          <button key={c} onClick={() => setActiveCategory(c)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCategory === c ? "bg-indigo/20 text-indigo-glow border border-indigo/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>{c}</button>
        ))}
      </motion.div>

      {/* Reports List */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
        <div className="space-y-2">
          {filtered.map((report, i) => (
            <motion.div key={report.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 + i * 0.03 }} className="flex items-center justify-between p-4 rounded-xl hover:bg-glass-hover transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-secondary">
                  <FileBarChart className="w-5 h-5 text-indigo" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{report.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{report.date}</span>
                    <span className="text-[10px] text-muted-foreground">{report.pages} pages</span>
                    <span className="text-[10px] text-muted-foreground">{report.downloads.toLocaleString()} downloads</span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${statusStyles[report.status]}`}>{report.status}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Download className="w-4 h-4 text-muted-foreground" /></button>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors"><Share2 className="w-4 h-4 text-muted-foreground" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scheduled Reports */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Scheduled Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {scheduledReports.map(sr => (
            <div key={sr.title} className="p-4 rounded-xl bg-secondary/40 hover:bg-glass-hover transition-colors">
              <p className="text-sm font-medium text-foreground">{sr.title}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[10px] text-muted-foreground">Frequency: <span className="text-foreground font-medium">{sr.frequency}</span></span>
                <span className="text-[10px] text-muted-foreground">Due: <span className="text-foreground font-medium">{sr.nextDue}</span></span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 block">Assigned: {sr.assignee}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;
