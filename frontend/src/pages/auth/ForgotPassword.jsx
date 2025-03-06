import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email!");
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Send Reset Link</button>
        </form>
        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-500 text-sm">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
