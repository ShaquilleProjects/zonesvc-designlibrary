import React, { useMemo } from 'react';
import styles from './Pagination.css';
import { useTheme } from '@zone-ui/theme-provider';
import { ChevronLeft, ChevronRight, SkipBack, SkipForward } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  className?: string;
  justify?: 'center' | 'start' | 'end';
  rounded?: boolean;
  shadow?: boolean;
  compact?: boolean;
  large?: boolean;
  simple?: boolean;
  showInfo?: boolean;
  infoFormat?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  pageSize = 10,
  onPageChange,
  className = '',
  justify = 'center',
  rounded = false,
  shadow = false,
  compact = false,
  large = false,
  simple = false,
  showInfo = true,
  infoFormat = 'Page {current} of {total}',
}: PaginationProps) {
  const theme = useTheme();

  const classes = [
    styles.pagination,
    className,
    styles[`pagination--${justify}`],
    rounded ? styles['pagination--rounded'] : '',
    shadow ? styles['pagination--shadow'] : '',
    compact ? styles['pagination--compact'] : '',
    large ? styles['pagination--large'] : '',
    simple ? styles['pagination--simple'] : '',
  ].filter(Boolean).join(' ');

  const totalItems = totalPages * pageSize;
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const pagesToShow = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    const showFirst = currentPage > 4;
    const showLast = currentPage < totalPages - 3;

    if (showFirst) pages.push(1);
    if (showFirst) pages.push('...');

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (showLast) pages.push('...');
    if (showLast) pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrev = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const handleFirst = () => {
    handlePageChange(1);
  };

  const handleLast = () => {
    handlePageChange(totalPages);
  };

  return (
    <div className={classes} role="navigation" aria-label="Pagination">
      {showInfo && (
        <span className={styles.pagination__info}>
          {infoFormat
            .replace('{current}', currentPage.toString())
            .replace('{total}', totalPages.toString())
            .replace('{start}', startItem.toString())
            .replace('{end}', endItem.toString())
            .replace('{size}', pageSize.toString())
            .replace('{totalItems}', totalItems.toString())}
        </span>
      )}
      <div className={styles.pagination__nav}>
        <button
          className={`${styles.pagination__button} ${
            currentPage === 1
              ? styles['pagination__button--disabled']
              : ''
          }`}
          onClick={handleFirst}
          disabled={currentPage === 1}
          aria-label="Go to first page"
        >
          <SkipBack size={16} />
        </button>
        <button
          className={`${styles.pagination__button} ${
            currentPage === 1
              ? styles['pagination__button--disabled']
              : ''
          }`}
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          <ChevronLeft size={16} />
        </button>
        {pagesToShow.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className={styles.pagination__ellipsis}>...</span>
            ) : (
              <button
                className={`${styles.pagination__page} ${
                  page === currentPage
                    ? styles['pagination__page--active']
                    : ''
                }`}
                onClick={() => handlePageChange(page)}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        <button
          className={`${styles.pagination__button} ${
            currentPage === totalPages
              ? styles['pagination__button--disabled']
              : ''
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          <ChevronRight size={16} />
        </button>
        <button
          className={`${styles.pagination__button} ${
            currentPage === totalPages
              ? styles['pagination__button--disabled']
              : ''
          }`}
          onClick={handleLast}
          disabled={currentPage === totalPages}
          aria-label="Go to last page"
        >
          <SkipForward size={16} />
        </button>
      </div>
    </div>
  );
}
