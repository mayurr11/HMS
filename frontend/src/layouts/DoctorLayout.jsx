import { Outlet, Link } from "react-router-dom";

function DoctorLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar on Left */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Doctor Panel</h2>
        <nav>
          <ul className="space-y-3">
            <li><Link to="" className="block px-3 py-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
            <li><Link to="patients" className="block px-3 py-2 hover:bg-gray-700 rounded">Patients</Link></li>
            <li><Link to="appointments" className="block px-3 py-2 hover:bg-gray-700 rounded">Appointments</Link></li>
            <li><Link to="medical-reports" className="block px-3 py-2 hover:bg-gray-700 rounded">Medical Reports</Link></li>
            <li><Link to="profile" className="block px-3 py-2 hover:bg-gray-700 rounded">Profile</Link></li>
            <li><Link to="settings" className="block px-3 py-2 hover:bg-gray-700 rounded">Settings</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default DoctorLayout;
