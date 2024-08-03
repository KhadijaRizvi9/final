import React, { useState } from 'react';

function Add({ handleAdd, setIsAdding }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState({ line1: '', city: '', country: '', zipcode: '' });
    const [contacts, setContacts] = useState([{ contact_method: 'EMAIL', value: '' }]);

    
    <h1>CosmoCoud</h1>
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = { name, address, contacts };
        handleAdd(newEmployee);
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
            <button type="submit">Add Employee</button>
            <button onClick={() => setIsAdding(false)}>Cancel</button>
        </form>
    );
}

export default Add;
