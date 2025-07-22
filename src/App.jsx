import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import CookiesPolicy from "./pages/CookiesPolicy";
import AdminLogin from './admin/pages/Login';
//import AdminLayout from './admin/components/AdminLayout';
//import PortfolioAdmin from './admin/pages/PortfolioAdmin';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/admin/pages/login" element={<AdminLogin />} />
          {/*<Route path="/admin" element={<Navigate to="/admin/portfolio" replace />} />*/}
          {/**
            <Route path="/admin" element={<AdminLayout />} >
              <Route path="portfolio"  element={<PortfolioAdmin />} />
            </Route>
          */}
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;