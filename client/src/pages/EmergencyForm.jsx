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

setForm({
  type: "",
  severity: "",
  description: "",
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
  value={form.type}
  required
>
  <option value="">Select Emergency Type</option>
  <option value="Road Accident">Road Accident</option>
  <option value="Fire">Fire</option>
  <option value="Heart Attack">Heart Attack</option>
  <option value="Stroke">Stroke</option>
  <option value="Industrial Accident">Industrial Accident</option>
  <option value="Other">Other</option>
</select>

          <label>Severity</label>

         <select
  name="severity"
  value={form.severity}
  onChange={handleChange}
  required
>
  <option value="">Select Severity</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
  <option value="Critical">Critical</option>
</select>

          <label>Description</label>
<textarea
 rows="5"
 name="description"
 value={form.description}
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