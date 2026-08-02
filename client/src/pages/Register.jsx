import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("Citizen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      // TODO: Firebase Register

      console.log({
        name,
        role,
        email,
        password,
      });

      navigate("/login");

    } catch (error) {

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
            required
          />

          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
          >

            <option>Citizen</option>

            <option>Hospital</option>

            <option>Police</option>

          </select>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
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