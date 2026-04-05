import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '@/components/pages/LandingPage';
import { LoginPage } from '@/components/pages/LoginPage';
import { SalonDashboard } from '@/components/pages/SalonDashboard';
import { FeaturesPage } from '@/components/pages/FeaturesPage';
import { HowItWorksPage } from '@/components/pages/HowItWorksPage';
import { PricingPage } from '@/components/pages/PricingPage';
import { NeonBackground } from '@/components/layout/NeonBackground';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white font-sans selection:bg-primary/20 bg-background overflow-x-hidden">
        <NeonBackground />
        <Toaster position="top-right" theme="dark" closeButton richColors />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recursos" element={<FeaturesPage />} />
          <Route path="/como-funciona" element={<HowItWorksPage />} />
          <Route path="/precos" element={<PricingPage />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage type="client" />} />
          <Route path="/login/cliente" element={<LoginPage type="client" />} />
          <Route path="/login/salao" element={<LoginPage type="salon" />} />
          <Route path="/login/admin" element={<LoginPage type="admin" />} />
          
          <Route path="/register" element={<LoginPage type="client" />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/salon" element={<SalonDashboard />} />
          <Route path="/dashboard/client" element={<div>Painel do Cliente (Em breve)</div>} />
          <Route path="/dashboard/admin" element={<div>Painel Admin (Em breve)</div>} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
