import React from "react";
import TicketCard from "../TicketCard/TicketCard";

function MyTickets({ user }) {
    const tickets = (JSON.parse(localStorage.getItem("tickets")) || [])
        .filter(t => t.email === user?.email);

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>My Tickets</h2>
            {tickets.map(t => <TicketCard key={t.id} ticket={t} />)}
        </div>
    );
}

export default MyTickets;
