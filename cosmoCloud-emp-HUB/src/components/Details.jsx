import React from 'react';

function Details({ employee, setView }) {
    if (!employee) {
        return <p>Loading...</p>;
      }
    return (
        <div>
            <h2>Employee Details</h2>
            <p>Name: {employee.name}</p>
            <p>Address: {employee.address.line1}, {employee.address.city}, {employee.address.country}, {employee.address.zipcode}</p>
            <h3>Contacts</h3>
            <ul>
                {employee.contacts.map((contact, index) => (
                    <li key={index}>{contact.contact_method}: {contact.value}</li>
                ))}
            </ul>
            <button onClick={() => setView(false)}>Back</button>
        </div>
    );
}

export default Details;
