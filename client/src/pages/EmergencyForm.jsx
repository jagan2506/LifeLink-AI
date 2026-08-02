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


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const getLocation = () =>
    new Promise((resolve, reject) => {

      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        resolve,
        reject
      );

    });



  const submitEmergency = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);
      setMessage("");


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



      setMessage(
        "Emergency Report Sent Successfully!"
      );


      setForm({

        type: "",
        severity: "",
        description: "",

      });



      setTimeout(() => {

        setMessage("");

      },4000);



    } catch (error) {

      console.error(error);

      setMessage(
        "Failed to send emergency report!"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="emergency-page">


      <div className="emergency-card">


        <div className="emergency-header">

          <AlertTriangle size={34}/>

          <h2>
            Report Emergency
          </h2>

        </div>



        <form onSubmit={submitEmergency}>


          <label>
            Emergency Type
          </label>


          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Emergency Type
            </option>

            <option value="Road Accident">
              Road Accident
            </option>

            <option value="Fire">
              Fire
            </option>

            <option value="Heart Attack">
              Heart Attack
            </option>

            <option value="Stroke">
              Stroke
            </option>

            <option value="Industrial Accident">
              Industrial Accident
            </option>

            <option value="Other">
              Other
            </option>


          </select>





          <label>
            Severity
          </label>


          <select
            name="severity"
            value={form.severity}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Severity
            </option>

            <option value="Low">
              Low
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

            <option value="Critical">
              Critical
            </option>


          </select>





          <label>
            Description
          </label>


          <textarea

            rows="5"

            name="description"

            value={form.description}

            placeholder="Describe the emergency..."

            onChange={handleChange}

            required

          />





          <button

            className="submit-btn"

            disabled={loading}

          >

            {

              loading ?

              (

                <>

                  <span className="loader"></span>

                  Sending...

                </>

              )

              :

              (

                <>

                  <Send size={20}/>

                  Submit Emergency

                </>

              )

            }


          </button>



        </form>





        {

          message && (

            <div

              className={
                message.includes("Successfully")
                ?
                "success-popup"
                :
                "error-popup"
              }

            >

              {message}

            </div>

          )

        }



      </div>


    </div>

  );

}


export default EmergencyForm;