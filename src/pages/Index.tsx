import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ExecutiveInsightPanel from "@/components/dashboard/ExecutiveInsightPanel";
import EnrollmentChart from "@/components/dashboard/EnrollmentChart";
import AlertPanel from "@/components/dashboard/AlertPanel";
import PredictiveAnalytics from "@/components/dashboard/PredictiveAnalytics";
import ScholarshipFunnel from "@/components/dashboard/ScholarshipFunnel";
import SkillsRadar from "@/components/dashboard/SkillsRadar";
import InstitutionRankings from "@/components/dashboard/InstitutionRankings";
import GovernancePanel from "@/components/dashboard/GovernancePanel";
import ForecastSimulator from "@/components/dashboard/ForecastSimulator";
import AnimatedKPICards from "@/components/dashboard/AnimatedKPICards";
import EducationCards from "@/components/dashboard/EducationCards";
import Breadcrumb from "@/components/dashboard/Breadcrumb";
import { useDashboardSync } from "@/hooks/useDashboardSync";

const Index = () => {
  // Synchronize store with URL URL
  useDashboardSync();

  return (
    <div className="flex-1 min-h-screen bg-background text-text-primary">
      <div className="px-4 md:px-6 pb-8 space-y-6 md:space-y-8 max-w-[1600px] mx-auto">
        {/* Context Navigation */}
        <Breadcrumb />

        {/* Global Level Switcher (Education Cards) */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary opacity-70">
              Education Level Drill-Down
            </h2>
            <div className="h-px flex-1 bg-border/50 mx-4" />
          </div>
          <EducationCards />
        </section>

        {/* Animated KPI Section */}
        <section className="relative">
          <AnimatedKPICards />
        </section>

        {/* Executive Insights */}
        <ExecutiveInsightPanel />

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EnrollmentChart />
          </div>
          <AlertPanel />
        </div>

        {/* Forecast Simulator + Predictive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ForecastSimulator />
          <PredictiveAnalytics />
        </div>

        {/* Skills + Funnel */}
        <SkillsRadar />

        {/* Rankings + Governance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <InstitutionRankings />
          </div>
          <GovernancePanel />
        </div>

        {/* Scholarship Funnel */}
        <ScholarshipFunnel />
      </div>
    </div>
  );
};

export default Index;
