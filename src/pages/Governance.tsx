import { motion } from "framer-motion";
import { Landmark, FileText, Download, Plus, Calendar, Shield, Users, BookOpen, ChevronRight, ExternalLink } from "lucide-react";

const policies = [
  { title: "National Education Policy 2020", status: "active", lastAmended: "Sep 2023", category: "Framework", impact: "National" },
  { title: "Right to Education Act", status: "active", lastAmended: "Mar 2023", category: "Legislation", impact: "National" },
  { title: "Samagra Shiksha Abhiyan", status: "active", lastAmended: "Jan 2024", category: "Scheme", impact: "National" },
  { title: "PM SHRI Schools", status: "active", lastAmended: "Nov 2023", category: "Scheme", impact: "National" },
  { title: "Digital India Education", status: "review", lastAmended: "Oct 2023", category: "Initiative", impact: "National" },
  { title: "Skill India Mission", status: "active", lastAmended: "Dec 2023", category: "Mission", impact: "National" },
];

const documents = [
  { name: "Annual Budget Report FY24", date: "15 Jan 2024", type: "PDF", size: "4.2 MB", category: "Finance" },
  { name: "NEP Implementation Progress Q4", date: "10 Jan 2024", type: "PDF", size: "8.1 MB", category: "Policy" },
  { name: "Accreditation Status Report", date: "28 Dec 2023", type: "XLSX", size: "2.8 MB", category: "Quality" },
  { name: "Scholarship Beneficiary Data FY24", date: "20 Dec 2023", type: "CSV", size: "15.4 MB", category: "Scholarship" },
  { name: "State-wise Education Audit", date: "15 Dec 2023", type: "PDF", size: "12.3 MB", category: "Audit" },
  { name: "Teacher Training Report", date: "10 Dec 2023", type: "PDF", size: "5.6 MB", category: "HR" },
  { name: "Infrastructure Assessment", date: "05 Dec 2023", type: "PDF", size: "9.2 MB", category: "Infrastructure" },
  { name: "Digital Literacy Survey", date: "01 Dec 2023", type: "PDF", size: "3.4 MB", category: "Research" },
];

const committees = [
  { name: "CABE - Central Advisory Board", members: 42, nextMeeting: "15 Feb 2024", status: "scheduled" },
  { name: "UGC Review Committee", members: 18, nextMeeting: "22 Feb 2024", status: "scheduled" },
  { name: "AICTE Policy Board", members: 24, nextMeeting: "01 Mar 2024", status: "pending" },
  { name: "NCERT Curriculum Review", members: 35, nextMeeting: "10 Mar 2024", status: "pending" },
];

const auditLog = [
  { action: "Policy Amendment Approved", user: "Secretary, MoE", timestamp: "2 hours ago", type: "approval" },
  { action: "Budget Reallocation — ₹200Cr", user: "Finance Controller", timestamp: "5 hours ago", type: "finance" },
  { action: "New Scholarship Scheme Created", user: "Dir. Scholarships", timestamp: "1 day ago", type: "create" },
  { action: "Accreditation Grade Updated", user: "NAAC Chairman", timestamp: "2 days ago", type: "update" },
  { action: "State Report Submitted — Kerala", user: "State Secretary", timestamp: "3 days ago", type: "report" },
];

const Governance = () => (
  <div className="flex-1 overflow-y-auto scrollbar-thin p-4 md:p-6 space-y-6">

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: "Active Policies", value: "24", icon: Shield, gradient: "gradient-indigo" },
        { label: "Documents", value: "1,248", icon: FileText, gradient: "gradient-emerald" },
        { label: "Committees", value: "18", icon: Users, gradient: "gradient-indigo" },
        { label: "Pending Approvals", value: "7", icon: BookOpen, gradient: "gradient-amber" },
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

    {/* Policies + Committees */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Active Policies & Schemes</h3>
        <div className="space-y-2">
          {policies.map((p, i) => (
            <div key={p.title} className="flex items-center justify-between p-3 rounded-xl hover:bg-glass-hover transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary"><Landmark className="w-4 h-4 text-indigo" /></div>
                <div>
                  <p className="text-sm font-medium text-foreground">{p.title}</p>
                  <p className="text-[10px] text-muted-foreground">{p.category} · Last amended: {p.lastAmended}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${p.status === "active" ? "bg-emerald/15 text-emerald" : "bg-amber/15 text-amber"}`}>
                  {p.status === "active" ? "Active" : "Under Review"}
                </span>
                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Committees & Meetings</h3>
        <div className="space-y-3">
          {committees.map(c => (
            <div key={c.name} className="p-3 rounded-xl bg-secondary/40 hover:bg-glass-hover transition-colors">
              <p className="text-sm font-medium text-foreground">{c.name}</p>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3" />{c.members} members</span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{c.nextMeeting}</span>
              </div>
              <span className={`inline-block mt-2 px-2 py-0.5 rounded-md text-[10px] font-semibold ${c.status === "scheduled" ? "bg-indigo/15 text-indigo-glow" : "bg-amber/15 text-amber"}`}>
                {c.status === "scheduled" ? "Scheduled" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Documents */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Document Repository</h3>
        <button className="text-xs text-indigo hover:text-indigo-glow transition-colors font-medium flex items-center gap-1">Browse All <ExternalLink className="w-3 h-3" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {documents.map((doc, i) => (
          <motion.div key={doc.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 + i * 0.03 }} className="flex items-center justify-between p-3 rounded-xl hover:bg-glass-hover transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary"><FileText className="w-4 h-4 text-indigo" /></div>
              <div>
                <p className="text-sm font-medium text-foreground">{doc.name}</p>
                <p className="text-[10px] text-muted-foreground">{doc.date} · {doc.type} · {doc.size}</p>
              </div>
            </div>
            <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Audit Log */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6">
      <h3 className="text-sm font-semibold text-foreground mb-4">Recent Audit Log</h3>
      <div className="space-y-2">
        {auditLog.map((log, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
            <div>
              <p className="text-sm font-medium text-foreground">{log.action}</p>
              <p className="text-[10px] text-muted-foreground">{log.user}</p>
            </div>
            <span className="text-[10px] text-muted-foreground">{log.timestamp}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Governance;
