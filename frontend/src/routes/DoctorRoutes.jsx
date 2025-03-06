import { Routes, Route } from "react-router-dom";
import DoctorLayout from "../layouts/DoctorLayout";
import Dashboard from "../pages/Doctor/Dashboard";
import PatientList from "../pages/Doctor/PatientList";
import AppointmentSchedule from "../pages/Doctor/AppointmentSchedule";
import PatientDetails from "../pages/Doctor/PatientDetails";
import MedicalReports from "../pages/Doctor/MedicalReports";
import Profile from "../pages/Doctor/Profile";
import Settings from "../pages/Doctor/Settings";

function DoctorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DoctorLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="patients" element={<PatientList />} />
        <Route path="appointments" element={<AppointmentSchedule />} />
        <Route path="patient/:id" element={<PatientDetails />} />
        <Route path="medical-reports" element={<MedicalReports />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default DoctorRoutes;
