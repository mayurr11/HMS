import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder authentication logic
    if (email === "admin@hospital.com") {
      navigate("/admin");
    } else if (email === "doctor@hospital.com") {
      navigate("/doctor");
    } else {
      navigate("/patient");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-700">Login</h2>
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded-lg p-6 mt-4 w-80">
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
