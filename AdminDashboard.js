import React, { useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

function AdminDashboard() {
    const [tickets, setTickets] = useState(
        JSON.parse(localStorage.getItem("tickets")) || []
    );

    const updateStatus = (id, status) => {
        const updated = tickets.map(t =>
            t.id === id ? { ...t, status } : t
        );
        setTickets(updated);
        localStorage.setItem("tickets", JSON.stringify(updated));
    };

    return (
        <div className="admin">
            <AdminSidebar />
            <div>
                <h2>Admin Dashboard</h2>
                {tickets.map(t => (
                    <TicketCard
                        key={t.id}
                        ticket={t}
                        isAdmin
                        updateStatus={updateStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard;
