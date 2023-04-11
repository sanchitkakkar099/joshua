import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, numPages, pageUrl }) => {
  const [pages, setPages] = useState([]);

  // Generate an array of page numbers based on the number of pages
  useEffect(() => {
    const pageArr = [];
    for (let i = 1; i <= numPages; i++) {
      pageArr.push(i);
    }
    setPages(pageArr);
  }, [numPages]);

  // Get the current page number from the router query
  const router = useRouter();
  const { page } = router.query;
  const currentPageNumber = page ? parseInt(page) : 1;

  // Generate the pagination links
  const prevPage = currentPageNumber > 1 ? currentPageNumber - 1 : null;
  const nextPage = currentPageNumber < numPages ? currentPageNumber + 1 : null;

  return (
    <BootstrapPagination>
      {/* Previous page link */}
      {prevPage && (
        <Link href={`${pageUrl}?page=${prevPage}`}>
          <BootstrapPagination.Prev />
        </Link>
      )}

      {/* Page links */}
      {pages.map((pageNumber) => (
        <Link key={pageNumber} href={`${pageUrl}?page=${pageNumber}`}>
          <BootstrapPagination.Item active={pageNumber === currentPageNumber}>
            {pageNumber}
          </BootstrapPagination.Item>
        </Link>
      ))}

      {/* Next page link */}
      {nextPage && (
        <Link href={`${pageUrl}?page=${nextPage}`}>
          <BootstrapPagination.Next />
        </Link>
      )}
    </BootstrapPagination>
  );
};

export default Pagination;
