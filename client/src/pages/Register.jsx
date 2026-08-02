import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("Citizen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if(password.length < 6){
      alert("Password must be at least 6 characters");
      return;
    }

    try {

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(
        doc(db, "users", userCredential.user.uid),
        {
          name: name,
          email: email,
          role: role,
        }
      );

      alert("Account Created Successfully");

      navigate("/login");

    } catch(error){

      console.log("Firebase Error:", error.code);
      console.log("Firebase Message:", error.message);

      alert(error.message);

    }
  };


  return (

    <div className="auth-container">

      <div className="glass-card">

        <h1>Create Account</h1>

        <form onSubmit={handleRegister}>


          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            autoComplete="name"
            required
          />


          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
          >

            <option value="Citizen">
              Citizen
            </option>

            <option value="Hospital">
              Hospital
            </option>

            <option value="Police">
              Police
            </option>

          </select>


          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />


          <button type="submit">
            Create Account
          </button>


        </form>


        <p className="bottom-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>


      </div>

    </div>

  );

}

export default Register;