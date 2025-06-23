import React, { useState, useRef, useEffect } from 'react';
import styles from './Datepicker.css';
import { useTheme } from '@zone-ui/theme-provider';
import { Button } from '@zone-ui/button';
import { Input } from '@zone-ui/input';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DatepickerProps {
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  placeholder?: string;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  error?: string;
  disabled?: boolean;
}

export function Datepicker({
  value,
  onChange,
  placeholder = 'Select date',
  label,
  minDate,
  maxDate,
  className = '',
  error,
  disabled = false,
}: DatepickerProps) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleFocusOutside = (event: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClick = handleFocusOutside;
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMonthChange = (change: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + change);
    setCurrentMonth(newMonth);
  };

  const handleDayClick = (day: Date) => {
    if (isDayDisabled(day)) return;

    onChange?.(day);
    setIsOpen(false);
  };

  const isDayDisabled = (day: Date) => {
    if (minDate && day < minDate) return true;
    if (maxDate && day > maxDate) return true;
    return false;
  };

  const getDayClassName = (day: Date) => {
    const classes = [styles.datepicker__day];

    if (isDayDisabled(day)) {
      classes.push(styles['datepicker__day--disabled']);
    }

    if (value && day.toDateString() === value.toDateString()) {
      classes.push(styles['datepicker__day--selected']);
    }

    if (new Date().toDateString() === day.toDateString()) {
      classes.push(styles['datepicker__day--today']);
    }

    return classes.join(' ');
  };

  const renderCalendar = () => {
    const firstDay = new Date(currentMonth);
    firstDay.setDate(1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    return (
      <div className={styles.datepicker__calendar} ref={calendarRef}>
        <div className={styles.datepicker__header}>
          <Button
            variant="ghost"
            size="small"
            onClick={() => handleMonthChange(-1)}
            disabled={disabled}
          >
            <ChevronLeft />
          </Button>
          <div className={styles.datepicker__month} onClick={() => handleMonthChange(0)}>
            {currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
          </div>
          <Button
            variant="ghost"
            size="small"
            onClick={() => handleMonthChange(1)}
            disabled={disabled}
          >
            <ChevronRight />
          </Button>
        </div>
        <div className={styles.datepicker__days}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className={styles.datepicker__day}>
              {day}
            </div>
          ))}
          {[...Array(startDay)].map((_, i) => (
            <div key={i} className={styles.datepicker__day} />
          ))}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = new Date(currentMonth);
            day.setDate(i + 1);
            return (
              <div
                key={i}
                className={getDayClassName(day)}
                onClick={() => handleDayClick(day)}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.datepicker} ${className}`}>
      <Input
        value={value ? value.toLocaleDateString() : ''}
        placeholder={placeholder}
        label={label}
        error={error}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      />
      {isOpen && renderCalendar()}
    </div>
  );
}
