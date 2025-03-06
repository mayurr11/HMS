import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ManageDoctors from "../pages/admin/ManageDoctors";
import ManagePatients from "../pages/admin/ManagePatients";
import ManageAppointments from "../pages/admin/ManageAppointments";
import Profile from "../pages/admin/Profile";
import Settings from "../pages/admin/Settings";

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
