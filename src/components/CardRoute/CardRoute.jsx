import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function CardRoute({ arr }) {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {arr.map((item) => (
          <div key={item.title} className=" w-60 rounded-lg border bg-white my-4 md:mx-4  p-6 shadow-lg shadow-gray-300">
            <h5 className="mb-2 text-xl font-medium">{item.title}</h5>
            <p className="py-6 text-base  text-gray-700  ">{item.cap}</p>
            <button
              type="button"
              className="w-full  rounded bg-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600"
            >
              <Link to={item.link}>{item.btn}</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardRoute;
