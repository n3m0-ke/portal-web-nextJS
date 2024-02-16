'use client';

import { useState } from 'react';
import { MdFilterList } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <MdFilterList className='w-6 h-6'/>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 top-full left-0 bg-gray-800 text-white shadow-md rounded-md mt-2">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Option 1</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Option 2</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
