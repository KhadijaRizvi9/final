import React, { useState, useEffect } from 'react';

function Edit({ selectedEmployee, handleUpdate, setIsEditing }) {
    const [name, setName] = useState(selectedEmployee.name);
    const [address, setAddress] = useState(selectedEmployee.address);
    const [contacts, setContacts] = useState(selectedEmployee.contacts);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = { name, address, contacts };
        handleUpdate(selectedEmployee.id, updatedEmployee);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Address Line 1" value={address.line1} onChange={(e) => setAddress({ ...address, line1: e.target.value })} required />
            <input type="text" placeholder="City" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} required />
            <input type="text" placeholder="Country" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} required />
            <input type="number" placeholder="Zipcode" value={address.zipcode} onChange={(e) => setAddress({ ...address, zipcode: e.target.value })} required />
            {contacts.map((contact, index) => (
                <div key={index}>
                    <select value={contact.contact_method} onChange={(e) => {
                        const newContacts = [...contacts];
                        newContacts[index].contact_method = e.target.value;
                        setContacts(newContacts);
                    }}>
                        <option value="EMAIL">Email</option>
                        <option value="PHONE">Phone</option>
                    </select>
                    <input type="text" placeholder="Value" value={contact.value} onChange={(e) => {
                        const newContacts = [...contacts];
                        newContacts[index].value = e.target.value;
                        setContacts(newContacts);
                    }} required />
                </div>
            ))}
            <button type="submit">Update Employee</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
}

export default Edit;
