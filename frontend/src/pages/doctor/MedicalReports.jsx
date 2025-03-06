import { useState } from "react";

function MedicalReports() {
  const [reports, setReports] = useState([
    { id: 3001, patient: "Alice Johnson", diagnosis: "Hypertension", lastUpdated: "Feb 25, 2025" },
    { id: 3002, patient: "Bob Williams", diagnosis: "Diabetes", lastUpdated: "Feb 20, 2025" },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Medical Reports</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Patient</th>
            <th className="border border-gray-300 p-2">Diagnosis</th>
            <th className="border border-gray-300 p-2">Last Updated</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="text-center">
              <td className="border border-gray-300 p-2">{report.id}</td>
              <td className="border border-gray-300 p-2">{report.patient}</td>
              <td className="border border-gray-300 p-2">{report.diagnosis}</td>
              <td className="border border-gray-300 p-2">{report.lastUpdated}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicalReports;
