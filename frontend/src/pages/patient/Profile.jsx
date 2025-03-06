import { useState } from "react";

function Profile() {
  const [patient, setPatient] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <p className="text-lg"><strong>Name:</strong> {patient.name}</p>
        <p className="text-lg"><strong>Email:</strong> {patient.email}</p>
        <p className="text-lg"><strong>Age:</strong> {patient.age}</p>
      </div>
    </div>
  );
}

export default Profile;
