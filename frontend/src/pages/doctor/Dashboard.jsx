function DoctorDashboard() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Doctor Dashboard</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <p className="text-3xl mt-2">7</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Total Patients</h2>
            <p className="text-3xl mt-2">80</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default DoctorDashboard;
  