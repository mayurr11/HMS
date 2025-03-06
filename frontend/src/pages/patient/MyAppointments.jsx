import { useState } from "react";

function MyAppointments() {
  const [appointments] = useState([
    { id: 5001, doctor: "Dr. John Doe", date: "March 15, 2025", time: "10:00 AM", status: "Upcoming" },
    { id: 5002, doctor: "Dr. Jane Smith", date: "March 5, 2025", time: "2:00 PM", status: "Completed" },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Doctor</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Time</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="text-center">
              <td className="border border-gray-300 p-2">{appointment.id}</td>
              <td className="border border-gray-300 p-2">{appointment.doctor}</td>
              <td className="border border-gray-300 p-2">{appointment.date}</td>
              <td className="border border-gray-300 p-2">{appointment.time}</td>
              <td className={`border border-gray-300 p-2 ${appointment.status === "Upcoming" ? "text-blue-500" : "text-green-500"}`}>
                {appointment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyAppointments;
