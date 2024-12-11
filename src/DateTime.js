import React, { useState, useEffect } from 'react';
import './DateTime.css';
const DateTime = () => {
  const [curDateTime, setCurDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className='date' id='date'>{curDateTime}</p>
    </div>
  );
};

export default DateTime;
