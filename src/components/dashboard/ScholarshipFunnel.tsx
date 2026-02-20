import { motion } from "framer-motion";

const stages = [
  { label: "Total Applicants", value: 2800000, progress: 100 },
  { label: "Verified & Eligible", value: 2100000, progress: 75 },
  { label: "Approved", value: 1820000, progress: 65 },
  { label: "Graduated", value: 1450000, progress: 52 },
  { label: "Gainfully Employed", value: 1160000, progress: 41 },
];

const socialROI = [
  { label: "First-Gen Graduates", value: "38%", change: "+8.2%" },
  { label: "Social Mobility Index", value: "0.76", change: "+12%" },
  { label: "Women Beneficiaries", value: "52%", change: "+4.1%" },
];

const ScholarshipFunnel = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.45 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-text-primary mb-1">Scholarship Impact Funnel</h3>
    <p className="text-xs text-text-secondary mb-6">National Scholarship Portal — Lifecycle Analysis</p>

    <div className="space-y-3 mb-6">
      {stages.map((s, i) => (
        <div key={s.label} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-text-primary">{s.label}</span>
            <span className="text-xs text-text-secondary font-tabular">
              {(s.value / 1000000).toFixed(1)}M
            </span>
          </div>
          <div className="h-2 rounded-full bg-elevated overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${s.progress}%` }}
              transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
              className="h-full rounded-full gradient-primary"
            />
          </div>
        </div>
      ))}
    </div>

    <div className="border-t border-border pt-4">
      <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
        Social ROI Metrics
      </h4>
      <div className="grid grid-cols-3 gap-3">
        {socialROI.map((r) => (
          <div key={r.label} className="text-center p-2.5 rounded-xl bg-elevated/50">
            <p className="text-lg font-bold text-gradient-accent font-tabular">{r.value}</p>
            <p className="text-[10px] text-text-secondary mt-0.5">{r.label}</p>
            <p className="text-[10px] text-accent font-medium">{r.change}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ScholarshipFunnel;
