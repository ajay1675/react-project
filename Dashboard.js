import React from "react";

function Dashboard({ user }) {
    return (
        <>
        <div className="card">
            <h2>Welcome, {user?.name}</h2>
            <p><b>Department:</b> {user?.department}</p>
            <p><b>Employee ID:</b> {user?.empId}</p>
        </div>
        </>
    );
}

export default Dashboard;
