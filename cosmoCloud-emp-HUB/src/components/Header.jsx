import React from 'react';

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Cosmocloud Employee Hub</h1>
            <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
        </header>
    );
}

export default Header;
