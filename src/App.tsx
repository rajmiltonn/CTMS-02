import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';

// Import pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import {
  AcademicsPage,
  FacilitiesPage,
  AdmissionsPage,
  NewsEventsPage
} from './pages/stub-pages';

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="school-theme">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
