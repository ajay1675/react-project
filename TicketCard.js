import React from "react";

function TicketCard({ ticket, isAdmin, updateStatus }) {
    return (
        <div className="card">
            <p><b>ID:</b> {ticket.id}</p>
            <p><b>Title:</b> {ticket.title}</p>
            <p><b>Priority:</b> {ticket.priority}</p>
            <p><b>Status:</b> {ticket.status}</p>

            {isAdmin && (
                <select onChange={e => updateStatus(ticket.id, e.target.value)}>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Closed</option>
                </select>
            )}
        </div>
    );
}

export default TicketCard;
