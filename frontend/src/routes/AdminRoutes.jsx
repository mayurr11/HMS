import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard";
import ManageDoctors from "../pages/Admin/ManageDoctors";
import ManagePatients from "../pages/Admin/ManagePatients";
import ManageAppointments from "../pages/Admin/ManageAppointments";
import Profile from "../pages/Admin/Profile";
import Settings from "../pages/Admin/Settings";

function AdminRoutes() {
  return (
    <Routes>
      {/* Wrap all admin routes inside AdminLayout */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="manage-doctors" element={<ManageDoctors />} />
        <Route path="manage-patients" element={<ManagePatients />} />
        <Route path="manage-appointments" element={<ManageAppointments />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
