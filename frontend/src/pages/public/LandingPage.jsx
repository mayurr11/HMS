import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600">Hospital Management System</h1>
      <p className="mt-4 text-gray-700 text-lg">
        A complete solution for managing hospital operations efficiently.
      </p>
      <div className="mt-6 flex gap-4">
        <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Login
        </Link>
        <Link to="/register" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Register
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
