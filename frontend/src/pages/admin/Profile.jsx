import { useState } from "react";

function Profile() {
  const [admin, setAdmin] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Administrator",
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <p className="text-lg"><strong>Name:</strong> {admin.name}</p>
        <p className="text-lg"><strong>Email:</strong> {admin.email}</p>
        <p className="text-lg"><strong>Role:</strong> {admin.role}</p>
      </div>
    </div>
  );
}

export default Profile;
