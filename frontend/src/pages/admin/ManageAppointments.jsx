import { useState } from "react";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([
    { id: 1001, patient: "Alice Johnson", doctor: "Dr. John Doe", date: "March 8, 2025" },
    { id: 1002, patient: "Bob Williams", doctor: "Dr. Jane Smith", date: "March 10, 2025" },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Manage Appointments</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Patient</th>
            <th className="border border-gray-300 p-2">Doctor</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="text-center">
              <td className="border border-gray-300 p-2">{appointment.id}</td>
              <td className="border border-gray-300 p-2">{appointment.patient}</td>
              <td className="border border-gray-300 p-2">{appointment.doctor}</td>
              <td className="border border-gray-300 p-2">{appointment.date}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Reschedule</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageAppointments;
