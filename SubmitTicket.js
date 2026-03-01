import React from "react";
import TicketForm from "../TicketForm/TicketForm";

function SubmitTicket({ user }) {
    const addTicket = (data) => {
        const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
        tickets.push({
            ...data,
            id: Date.now(),
            status: "Open",
            email: user.email
        });
        localStorage.setItem("tickets", JSON.stringify(tickets));
        alert("Ticket Submitted Successfully");
    };

    return <TicketForm onSubmit={addTicket} />;
}

export default SubmitTicket;
