import React from 'react';
import { Link } from '@tanstack/react-router';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
  className = '',
}) => {
  // Function to generate pagination array with ellipsis for long page counts
  const getPaginationArray = () => {
    let paginationArray = [];

    // Always include first page
    paginationArray.push(1);

    // For small number of pages, show all pages
    if (totalPages <= 7) {
      for (let i = 2; i <= totalPages; i++) {
        paginationArray.push(i);
      }
    } else {
      // For larger number of pages, use ellipsis

      // If current page is close to the beginning
      if (currentPage < 5) {
        paginationArray = [1, 2, 3, 4, 5, '...', totalPages];
      }
      // If current page is close to the end
      else if (currentPage > totalPages - 4) {
        paginationArray = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      }
      // If current page is in the middle
      else {
        paginationArray = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }

    return paginationArray;
  };

  return (
    <div className={`flex justify-center my-6 ${className}`}>
      <div className="flex items-center space-x-1 rounded-lg bg-[var(--background-lighter)] p-1 shadow-md">
        {/* Previous Button */}
				<Link
					// @ts-ignore
          to={`${basePath}/${currentPage > 1 ? currentPage - 1 : 1}`}
          className={`flex items-center px-3 py-2 rounded-md transition-colors ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'hover:bg-[var(--background)] text-[var(--text-color)]'
          }`}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="ml-1 hidden sm:inline">Prev</span>
        </Link>

        {/* Page Numbers - Only visible on medium screens and larger */}
        <div className="hidden md:flex items-center space-x-1">
          {getPaginationArray().map((pageNum, index) => (
            <React.Fragment key={index}>
              {pageNum === '...' ? (
                <span className="px-3 py-2 text-[var(--text-color-lighter)]">...</span>
              ) : (
								<Link
									// @ts-ignore
                  to={`${basePath}/${pageNum}`}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    pageNum === currentPage
                      ? 'bg-[var(--primary-pink)] text-white'
                      : 'hover:bg-[var(--background)] text-[var(--text-color)]'
                  }`}
                >
                  {pageNum}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Page indicator for small screens */}
        <div className="md:hidden px-3 py-2 text-[var(--text-color)]">
          {currentPage} / {totalPages}
        </div>

        {/* Next Button */}
				<Link
					// @ts-ignore
          to={`${basePath}/${currentPage < totalPages ? currentPage + 1 : totalPages}`}
          className={`flex items-center px-3 py-2 rounded-md transition-colors ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'hover:bg-[var(--background)] text-[var(--text-color)]'
          }`}
          disabled={currentPage === totalPages}
        >
          <span className="mr-1 hidden sm:inline">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;