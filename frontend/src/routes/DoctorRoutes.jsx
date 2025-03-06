import { Routes, Route } from "react-router-dom";
import DoctorLayout from "../layouts/doctorLayout";
import Dashboard from "../pages/doctor/Dashboard";
import PatientList from "../pages/doctor/PatientList";
import AppointmentSchedule from "../pages/doctor/AppointmentSchedule";
import PatientDetails from "../pages/doctor/PatientDetails";
import MedicalReports from "../pages/doctor/MedicalReports";
import Profile from "../pages/doctor/Profile";
import Settings from "../pages/doctor/Settings";

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
