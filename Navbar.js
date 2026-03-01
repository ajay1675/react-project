import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h2>IT HelpDesk Portal</h2>
            <div className="nav-links">
                {!user && (
                    <>
                        <Link to="/">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
                {user && (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/submit-ticket">Submit Ticket</Link>
                        <Link to="/my-tickets">My Tickets</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
