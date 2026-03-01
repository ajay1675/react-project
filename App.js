// import { Routes, Route } from "react-router-dom";
// import Home from "./Home/Home";
// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Guns from "./Guns/Guns";
// import Maps from "./Maps/Maps";
// import Login from "./Login/Login";
// import Signup from "./Signup/Signup";
// import Navigation from "./Navigation/Navigation";

// export default function App() {
//   return (
//     <>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/guns" element={<Guns />} />
//         <Route path="/maps" element={<Maps />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import SubmitTicket from "./SubmitTicket/SubmitTicket";
import MyTickets from "./MyTickets/MyTickets";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/submit-ticket" element={<SubmitTicket user={user} />} />
        <Route path="/my-tickets" element={<MyTickets user={user} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
