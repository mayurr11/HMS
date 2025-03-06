import { useState } from "react";

function PatientList() {
  const [patients, setPatients] = useState([
    { id: 4001, name: "Alice Johnson", age: 30, condition: "Hypertension" },
    { id: 4002, name: "Bob Williams", age: 45, condition: "Diabetes" },
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Patients</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">Condition</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="text-center">
              <td className="border border-gray-300 p-2">{patient.id}</td>
              <td className="border border-gray-300 p-2">{patient.name}</td>
              <td className="border border-gray-300 p-2">{patient.age}</td>
              <td className="border border-gray-300 p-2">{patient.condition}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">View</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">Prescribe</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
