import { useState } from "react";

function MedicalHistory() {
  const [records] = useState([
    { id: 6001, doctor: "Dr. John Doe", diagnosis: "Flu", prescription: "Paracetamol, Rest", date: "Feb 20, 2025" },
    { id: 6002, doctor: "Dr. Jane Smith", diagnosis: "Allergy", prescription: "Antihistamines", date: "Jan 10, 2025" },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Medical History</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Doctor</th>
            <th className="border border-gray-300 p-2">Diagnosis</th>
            <th className="border border-gray-300 p-2">Prescription</th>
            <th className="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="text-center">
              <td className="border border-gray-300 p-2">{record.id}</td>
              <td className="border border-gray-300 p-2">{record.doctor}</td>
              <td className="border border-gray-300 p-2">{record.diagnosis}</td>
              <td className="border border-gray-300 p-2">{record.prescription}</td>
              <td className="border border-gray-300 p-2">{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalHistory;
