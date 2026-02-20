import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilterProvider } from "@/contexts/FilterContext";
import DashboardLayout from "@/components/DashboardLayout";
import Index from "./pages/Index";
import Institutions from "./pages/Institutions";
import Scholarships from "./pages/Scholarships";
import Impact from "./pages/Impact";
import Analytics from "./pages/Analytics";
import Governance from "./pages/Governance";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme">
      <FilterProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/institutions" element={<Institutions />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </DashboardLayout>
          </BrowserRouter>
        </TooltipProvider>
      </FilterProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
