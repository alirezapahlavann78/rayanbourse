import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = () => {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(   "https://jsonplaceholder.typicode.com/todos"); // جایگزین کنید
        setOptions(response.data); // فرض بر این است که API شما آرایه‌ای از گزینه‌ها را بر می‌گرداند
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  return (
    <div className="relative py-8">
      <input
        type="text"
        c
        placeholder="search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-64 p-2 border border-gray-300  rounded-xl"
      />
      {searchTerm && filteredOptions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 p-2 bg-white border border-gray-300 rounded">
          {filteredOptions.map(option => (
            <li
              key={option}
              className="cursor-pointer hover:bg-gray-200"
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
