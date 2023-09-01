import React from "react";

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="mb-10">
      <button
        className="bg-gray-100 hover:bg-gray-300 text-black py-1 px-3 ml-4 rounded"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Önceki
      </button>
      <span className="px-4 text-black font-bold items-center">
        {currentPage}
      </span>
      <button
        className="bg-gray-100 hover:bg-gray-300 text-black py-1 px-3 mr-4 rounded"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Sonraki
      </button>
    </div>
  );
};

export default Pagination;
