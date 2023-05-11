import React, { useState, useEffect } from "react";
import axios from "axios";

const ListComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredItems = currentItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterTerm === "" || item.completed.toString() === filterTerm)
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="w-full py-6 flex justify-between">
        <input
          className="w-1/3 p-2 rounded-xl "
          type="text"
          placeholder="search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={filterTerm} onChange={handleFilterChange} className="rounded-xl">
          <option value="">همه</option>
          <option value="true">تمام شده</option>
          <option value="false">تمام نشده</option>
        </select>
      </div>
      <ul className="grid grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <li key={index} className="p-4 bg-gray-200 rounded-md">
            {item.title}
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-4 py-2 mx-1 rounded-md cursor-pointer ${
              currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListComponent;
