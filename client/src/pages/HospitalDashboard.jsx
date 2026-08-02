import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";
import "../styles/hospital.css";

import { db } from "../firebase/firebase";

function HospitalDashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Query emergencies with newest entries first
    const q = query(
      collection(db, "emergencies"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCases(data);
    });

    return () => unsubscribe();
  }, []);

  const acceptEmergency = async (id) => {
    await updateDoc(doc(db, "emergencies", id), {
      status: "Accepted",
    });
  };

  return (
    <div className="hospital-page">
      <h1>Hospital Dashboard</h1>

      {cases.map((item) => (
        <div className="case-card" key={item.id}>
          <h2>{item.type}</h2>

          <p>
            <strong>Severity:</strong> {item.severity}
          </p>

          <p>{item.description}</p>

          <p>
            📍 {item.latitude?.toFixed(5)}, {item.longitude?.toFixed(5)}
          </p>

          <h3>Status: {item.status}</h3>

          <button onClick={() => acceptEmergency(item.id)}>
            Accept Emergency
          </button>

          <button
            onClick={() =>
              window.open(
                `https://www.google.com/maps?q=${item.latitude},${item.longitude}`,
                "_blank"
              )
            }
          >
            Navigate
          </button>
        </div>
      ))}
    </div>
  );
}

export default HospitalDashboard;