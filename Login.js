import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="Login">
        <h2>Login Page</h2>
        <form>
          <input type="email" placeholder="Username" required /><br></br>
          <input type="password" placeholder="Password" required />
          <br /><br />

          <Link to="/home">
            <button type="button">Login</button>
          </Link>

          <br /><br />

          <Link to="/signup">
            <button type="button">Register</button>
          </Link>
        </form>
      </div>
    </>
  );
}
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login({ setUser }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const login = () => {
//     if (email === "admin@techserve.com" && password === "admin123") {
//       navigate("/admin");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("employees")) || [];
//     const found = users.find(
//       u => u.email === email && u.password === password
//     );

//     if (found) {
//       setUser(found);
//       navigate("/dashboard");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <>
//     <form>
//       <h2>Login</h2>

//       <input placeholder="Email"
//         onChange={e => setEmail(e.target.value)} />

//       <input type="password" placeholder="Password"
//         onChange={e => setPassword(e.target.value)} />

//       <button type="button" onClick={login}>Login</button>
//     </form>
//     </>
//   );
// }

// export default Login;
