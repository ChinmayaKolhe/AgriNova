import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Layout Components
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import FarmerDashboard from './pages/FarmerDashboard';
import DashboardHome from './pages/DashboardHome';
import CropPredictions from './pages/CropPredictions';
import MarketTrends from './pages/MarketTrends';
import WeatherPage from './pages/WeatherPage';
import IrrigationPage from './pages/IrrigationPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={
            <DashboardLayout 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
            />
          }
        >
          <Route index element={<DashboardHome darkMode={darkMode} />} />
          <Route path="home" element={<DashboardHome darkMode={darkMode} />} />
          <Route path="crop-predictions" element={<CropPredictions darkMode={darkMode} />} />
          <Route path="market-trends" element={<MarketTrends darkMode={darkMode} />} />
          <Route path="weather" element={<WeatherPage darkMode={darkMode} />} />
          <Route path="irrigation" element={<IrrigationPage darkMode={darkMode} />} />
          <Route path="profile" element={<ProfilePage darkMode={darkMode} />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;