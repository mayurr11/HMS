import { Routes, Route } from "react-router-dom";
import PatientLayout from "../layouts/PatientLayout";
import Dashboard from "../pages/Patient/Dashboard";
import BookAppointment from "../pages/Patient/BookAppointment";
import AppointmentDetails from "../pages/Patient/AppointmentDetails";
import MedicalHistory from "../pages/Patient/MedicalHistory";
import Prescriptions from "../pages/Patient/Prescriptions.jsx";
import Profile from "../pages/Patient/Profile";
import Settings from "../pages/Patient/Settings";

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
