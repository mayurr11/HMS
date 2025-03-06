import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import AdminRoutes from "./routes/AdminRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";
import PatientRoutes from "./routes/PatientRoutes";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Role-Based Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/doctor/*" element={<DoctorRoutes />} />
      <Route path="/patient/*" element={<PatientRoutes />} />
    </Routes>
  );
}

export default App;
