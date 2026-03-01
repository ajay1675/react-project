// import { useNavigate } from "react-router-dom";
// import "./Signup.css";
// function Signup() {
//   const navigate = useNavigate();
//   const handleSignup = (e) => {
//     e.preventDefault();
//     navigate("/login");
//   };
//   return (
//     <>
//     <div className="Signup">
//       <form onSubmit={handleSignup}>
//         <h2>Signup</h2>
//         <input type="text" placeholder="Username" required />
//         <br></br>
//         <input type="password" placeholder="Password" required />
//         <br></br>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//     </>
//   );
// }
// export default Signup;
import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    empId: ""
  });

  const submit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("employees")) || [];
    users.push(form);
    localStorage.setItem("employees", JSON.stringify(users));
    alert("Employee Registered Successfully");
  };

  return (
    <form onSubmit={submit}>
      <h2>Employee Registration</h2>

      <input placeholder="Full Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email Address"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />

      <input placeholder="Department"
        onChange={e => setForm({ ...form, department: e.target.value })} />

      <input placeholder="Employee ID"
        onChange={e => setForm({ ...form, empId: e.target.value })} />

      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
