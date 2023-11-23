import { useState, useEffect } from 'react';

interface PaginationSelectProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (selectedPage: number) => void;
}

const PaginationSelect: React.FC<PaginationSelectProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex items-center space-x-2">
      <select
        id="pagination-select"
        name="pagination-select"
        value={currentPage}
        onChange={handlePageChange}
        className="block px-2 py-2 border-2 border-green-500 rounded-md focus:outline-none focus:border-blue-300 focus:shadow-outline-blue bg-white"
      >
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaginationSelect;
