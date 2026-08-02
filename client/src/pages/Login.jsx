import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { auth, db } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    const userRef = doc(db, "users", uid);

    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      alert("User profile not found.");
      return;
    }

    const data = userSnap.data();

    switch (data.role) {
      case "Citizen":
        navigate("/emergency");
        break;

      case "Hospital":
        navigate("/hospital");
        break;

      case "Police":
        navigate("/police");
        break;

      default:
        navigate("/");
    }

  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="auth-container">

      <div className="glass-card">

        <h1>LifeLink AI</h1>

        <p>Emergency Response System</p>

        <form onSubmit={handleLogin}>

         <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  autoComplete="email"
  required
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="current-password"
  required
/>
          <button type="submit">
            Login
          </button>

        </form>

        <p className="bottom-text">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;