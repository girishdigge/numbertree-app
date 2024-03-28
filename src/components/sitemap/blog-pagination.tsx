'use client';
import * as React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const BlogPagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
        )}
        {currentPage > 2 && <PaginationItem>...</PaginationItem>}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === currentPage}
              onClick={() => paginate(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < totalPages - 1 && <PaginationItem>...</PaginationItem>}
        {currentPage < totalPages && (
          <PaginationNext onClick={() => paginate(currentPage + 1)} />
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
