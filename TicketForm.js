import React, { useState } from "react";

function TicketForm({ onSubmit }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "Low",
        department: ""
    });

    const submit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={submit}>
            <input placeholder="Issue Title"
                onChange={e => setForm({ ...form, title: e.target.value })} />

            <textarea placeholder="Issue Description"
                onChange={e => setForm({ ...form, description: e.target.value })} />

            <select onChange={e => setForm({ ...form, priority: e.target.value })}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <input placeholder="Department"
                onChange={e => setForm({ ...form, department: e.target.value })} />

            <button type="submit">Submit Ticket</button>
        </form>
    );
}

export default TicketForm;
