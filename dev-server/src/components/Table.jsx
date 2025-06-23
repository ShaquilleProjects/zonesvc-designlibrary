import React, { useState } from 'react';
import styles from './Table.css';
import { useTheme } from '@zone-ui/theme-provider';
import { Button } from '@zone-ui/button';

interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  width?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  title?: string;
  actions?: React.ReactNode;
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  loading?: boolean;
  error?: string;
  className?: string;
}

export function Table<T>({ 
  data, 
  columns, 
  title, 
  actions, 
  pageSize = 10, 
  currentPage = 1, 
  onPageChange,
  loading = false,
  error,
  className = '',
}: TableProps<T>) {
  const theme = useTheme();
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' 
          ? aValue - bValue
          : bValue - aValue;
      }
      
      return 0;
    });
  }, [data, sortConfig]);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const handleSort = (key: keyof T) => {
    if (sortConfig?.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortConfig({ key, direction: 'asc' });
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === currentPage ? 'primary' : 'ghost'}
          onClick={() => onPageChange?.(i)}
          size="small"
        >
          {i}
        </Button>
      );
    }

    return (
      <div className={styles.table__pagination}>
        <div className={styles.table__paginationInfo}>
          Showing {startIndex + 1} to {endIndex} of {data.length} entries
        </div>
        <div>{pages}</div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={`${styles.table} ${className}`}>
        <div className={styles.table__loading}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.table} ${className}`}>
        <div className={styles.table__error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.table} ${className}`}>
      <div className={styles.table__header}>
        {title && <h2 className={styles.table__title}>{title}</h2>}
        {actions && <div className={styles.table__actions}>{actions}</div>}
      </div>
      <div className={styles.table__wrapper}>
        <table className={styles.table__table}>
          <thead className={styles.table__thead}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`${styles.table__th} ${column.sortable ? styles['table__th--sortable'] : ''}`}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className={styles.table__tr}
                onClick={() => console.log('Row clicked')}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={styles.table__td}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );
}
