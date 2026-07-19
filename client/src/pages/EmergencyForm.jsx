import { useState } from "react";
import { AlertTriangle, Send } from "lucide-react";
import "../styles/form.css";
import { db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function EmergencyForm() {
  const [form, setForm] = useState({
    type: "",
    severity: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const getLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

 const submitEmergency = async (e) => {
  e.preventDefault();

  try {
    const position = await getLocation();

    await addDoc(collection(db, "emergencies"), {
      type: form.type,
      severity: form.severity,
      description: form.description,

      latitude: position.coords.latitude,
      longitude: position.coords.longitude,

      status: "Pending",

      createdAt: serverTimestamp(),
    });

    alert("Emergency Report Sent!");

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

  return (
    <div className="emergency-page">
      <div className="emergency-card">
        <div className="emergency-header">
          <AlertTriangle size={34} />
          <h2>Report Emergency</h2>
        </div>

        <form onSubmit={submitEmergency}>
          <label>Emergency Type</label>

          <select
            name="type"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Road Accident</option>
            <option>Fire</option>
            <option>Heart Attack</option>
            <option>Stroke</option>
            <option>Industrial Accident</option>
            <option>Other</option>
          </select>

          <label>Severity</label>

          <select
            name="severity"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <label>Description</label>

          <textarea
            rows="5"
            name="description"
            placeholder="Describe the emergency..."
            onChange={handleChange}
          />

          <button className="submit-btn">
            <Send size={20} />
            Submit Emergency
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmergencyForm;