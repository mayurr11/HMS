import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Placeholder for registration logic
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-700">Register</h2>
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded-lg p-6 mt-4 w-80">
        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="block mb-2 text-gray-700">Role</label>
        <select
          className="w-full p-2 border rounded-lg mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
