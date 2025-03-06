function PatientDashboard() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Upcoming Appointment</h2>
            <p className="text-lg mt-2">Dr. Smith - March 10, 2025</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Medical Reports</h2>
            <p className="text-lg mt-2">Last Updated: Feb 25, 2025</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PatientDashboard;
  