import { Routes, Route } from "react-router-dom";
import PatientLayout from "../layouts/PatientLayout";
import Dashboard from "../pages/patient/Dashboard";
import BookAppointment from "../pages/patient/BookAppointment";
import AppointmentDetails from "../pages/patient/AppointmentDetails";
import MedicalHistory from "../pages/patient/MedicalHistory";
import Prescriptions from "../pages/patient/Prescriptions.jsx";
import Profile from "../pages/patient/Profile";
import Settings from "../pages/patient/Settings";

function PatientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PatientLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="appointment-details" element={<AppointmentDetails />} />
        <Route path="medical-history" element={<MedicalHistory />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default PatientRoutes;
