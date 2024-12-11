import React, { useState } from 'react';
import {FaMoon,FaSun} from 'react-icons/fa';
function ToggleScreen() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            document.body.style.backgroundColor = newMode ? '#121212' : '#ffffff';
            document.body.style.color = newMode ? '#ffffff' : '#000000';
            return newMode;
        });
    };

    return (
        <div>
            
            <button
                className='btn btn-default'
                onClick={toggleDarkMode}
                id="toggle"
            >
                {darkMode ? "Light" : "Dark"}
            
            {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
}

export default ToggleScreen;
