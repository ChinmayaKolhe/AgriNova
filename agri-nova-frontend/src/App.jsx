import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import ProfilePage from "./pages/ProfilePage";
import CropPredictions from "./pages/CropPredictions";
import CropRecommendations from "./pages/CropRecommendations";
import PlantingCalendar from "./pages/PlantingCalendar";
import MarketTrends from "./pages/marketplace/MarketTrends";
import WeatherPage from "./pages/WeatherPage";
import IrrigationPage from "./pages/IrrigationPage";
import SellProduce from "./pages/marketplace/SellProduce";
import BuyProducts from "./pages/marketplace/BuyProducts";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { Leaf } from "lucide-react";
import SignupPage from "./pages/SignupPage";
import AIAssistant from "./pages/AIAssistant";
import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import BuyerOrders from "./pages/buyer/Orders";
import BuyerMessages from "./pages/buyer/Messages";
import BuyerFavorites from "./pages/buyer/Favorites";
import BuyerLayout from "./layouts/BuyerLayout";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        >
          <Route index element={<DashboardHome darkMode={darkMode} />} />
          <Route path="home" element={<DashboardHome darkMode={darkMode} />} />
          <Route path="profile" element={<ProfilePage darkMode={darkMode} />} />
          <Route
            path="crop-predictions"
            element={<CropPredictions darkMode={darkMode} />}
          />
          <Route
            path="crop-recommendations"
            element={<CropRecommendations darkMode={darkMode} />}
          />
          <Route
            path="ai-assistant"
            element={<AIAssistant darkMode={darkMode} />}
          />
          <Route
            path="planting-calendar"
            element={<PlantingCalendar darkMode={darkMode} />}
          />
          <Route
            path="market-trends"
            element={<MarketTrends darkMode={darkMode} />}
          />
          <Route path="weather" element={<WeatherPage darkMode={darkMode} />} />
          <Route
            path="irrigation"
            element={<IrrigationPage darkMode={darkMode} />}
          />

          {/* Marketplace Routes */}
          <Route
            path="marketplace/sell"
            element={<SellProduce darkMode={darkMode} />}
          />
          <Route
            path="marketplace/buy"
            element={<BuyProducts darkMode={darkMode} />}
          />
        </Route>
        <Route
          path="/buyer"
          element={
            <BuyerLayout darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        >
          <Route
            path="dashboard"
            element={<BuyerDashboard darkMode={darkMode} />}
          />
          <Route path="orders" element={<BuyerOrders darkMode={darkMode} />} />
          <Route
            path="messages"
            element={<BuyerMessages darkMode={darkMode} />}
          />
          <Route
            path="favorites"
            element={<BuyerFavorites darkMode={darkMode} />}
          />
          <Route path="profile" element={<ProfilePage darkMode={darkMode} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
