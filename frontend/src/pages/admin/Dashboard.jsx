function AdminDashboard() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Total Doctors</h2>
            <p className="text-3xl mt-2">45</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Total Patients</h2>
            <p className="text-3xl mt-2">120</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Pending Appointments</h2>
            <p className="text-3xl mt-2">18</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AdminDashboard;
  