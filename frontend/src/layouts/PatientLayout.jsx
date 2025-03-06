import { Outlet, Link } from "react-router-dom";

function PatientLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Patient Panel</h2>
        <nav>
          <ul className="space-y-3">
            <li><Link to="" className="block px-3 py-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
            <li><Link to="book-appointment" className="block px-3 py-2 hover:bg-gray-700 rounded">Book Appointment</Link></li>
            <li><Link to="appointment-details" className="block px-3 py-2 hover:bg-gray-700 rounded">My Appointments</Link></li>
            <li><Link to="medical-history" className="block px-3 py-2 hover:bg-gray-700 rounded">Medical History</Link></li>
            <li><Link to="prescriptions" className="block px-3 py-2 hover:bg-gray-700 rounded">Prescriptions</Link></li>
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

export default PatientLayout;
