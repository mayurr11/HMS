import { useState } from "react";

function Profile() {
  const [doctor, setDoctor] = useState({
    name: "Dr. John Smith",
    email: "dr.john@example.com",
    specialization: "Cardiology",
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <p className="text-lg"><strong>Name:</strong> {doctor.name}</p>
        <p className="text-lg"><strong>Email:</strong> {doctor.email}</p>
        <p className="text-lg"><strong>Specialization:</strong> {doctor.specialization}</p>
      </div>
    </div>
  );
}

export default Profile;
