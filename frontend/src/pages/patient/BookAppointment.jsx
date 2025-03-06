import { useState } from "react";

function BookAppointment() {
  const [form, setForm] = useState({ name: "", date: "", time: "", doctor: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${form.name} on ${form.date} at ${form.time}`);
    setForm({ name: "", date: "", time: "", doctor: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Doctor</option>
          <option value="Dr. John Doe">Dr. John Doe</option>
          <option value="Dr. Jane Smith">Dr. Jane Smith</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Book Now</button>
      </form>
    </div>
  );
}

export default BookAppointment;
