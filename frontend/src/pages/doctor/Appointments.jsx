import { useState } from "react";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([
    { id: 2001, patient: "Alice Johnson", date: "March 10, 2025", time: "10:00 AM" },
    { id: 2002, patient: "Bob Williams", date: "March 12, 2025", time: "2:00 PM" },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Patient</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Time</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="text-center">
              <td className="border border-gray-300 p-2">{appointment.id}</td>
              <td className="border border-gray-300 p-2">{appointment.patient}</td>
              <td className="border border-gray-300 p-2">{appointment.date}</td>
              <td className="border border-gray-300 p-2">{appointment.time}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">View</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorAppointments;
