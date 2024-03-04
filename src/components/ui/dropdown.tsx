'use client';
import React, { useState } from 'react';

const Dropdown = ({ options, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: any) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <button onClick={toggleDropdown}>{value || 'Select'}</button>
      {isOpen && (
        <ul className='dropdown-content'>
          {options.map((option: any) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
