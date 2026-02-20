import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Plus, Landmark } from "lucide-react";

const documents = [
  { name: "Annual Budget Report FY24", date: "15 Jan 2024", type: "PDF", size: "4.2 MB" },
  { name: "NEP Implementation Progress Q4", date: "10 Jan 2024", type: "PDF", size: "8.1 MB" },
  { name: "Accreditation Status Report", date: "28 Dec 2023", type: "XLSX", size: "2.8 MB" },
  { name: "State Education Audit Summary", date: "15 Dec 2023", type: "PDF", size: "12.3 MB" },
];

const GovernancePanel = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="glass-card p-6"
  >
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <Landmark className="w-5 h-5 text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Governance & Documents</h3>
          <p className="text-xs text-text-secondary mt-0.5">Quick access to reports & policies</p>
        </div>
      </div>
      <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl gradient-primary text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-hover">
        <Plus className="w-3.5 h-3.5" /> New Scheme
      </button>
    </div>

    <div className="space-y-2">
      {documents.map((doc, i) => (
        <motion.div
          key={doc.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 + i * 0.05 }}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-glass-hover transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-elevated">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">{doc.name}</p>
              <p className="text-[10px] text-text-secondary">{doc.date} · {doc.type} · {doc.size}</p>
            </div>
          </div>
          <Download className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </div>

    <div className="mt-4 pt-4 border-t border-border">
      <button className="text-xs text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-1 mx-auto">
        Browse All Documents <ExternalLink className="w-3 h-3" />
      </button>
    </div>
  </motion.div>
);

export default GovernancePanel;
