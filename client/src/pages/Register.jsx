import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleRegister=(e)=>{
    e.preventDefault();

    // Firebase Register
  }

  return (
    <div className="auth-page">

      <div className="glass-card">

        <h1>Create Account</h1>

        <form onSubmit={handleRegister}>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button>
            Register
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;