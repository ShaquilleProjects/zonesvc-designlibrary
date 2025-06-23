import React from 'react';
import styles from './LineChart.css';
import { useTheme } from '@zone-ui/theme-provider';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface LineChartProps {
  data: Array<Record<string, number | string>>;
  title?: string;
  height?: number;
  width?: number;
  colors?: string[];
  lines: Array<{
    dataKey: string;
    name: string;
    stroke?: string;
    dot?: boolean;
    type?: 'monotone' | 'linear' | 'step';
  }>;
  xAxisKey?: string;
  loading?: boolean;
  error?: string;
  className?: string;
}

export function LineChart({
  data,
  title,
  height = 400,
  width = 800,
  colors = ['var(--zui-primary)', 'var(--zui-success)', 'var(--zui-warning)', 'var(--zui-danger)'],
  lines,
  xAxisKey = 'date',
  loading = false,
  error,
  className = '',
}: LineChartProps) {
  const theme = useTheme();

  if (loading) {
    return (
      <div className={`${styles.lineChart} ${className}`}>
        <div className={styles.lineChart__loading}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.lineChart} ${className}`}>
        <div className={styles.lineChart__error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.lineChart} ${className}`}>
      {title && <h2 className={styles.lineChart__title}>{title}</h2>}
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type={line.type || 'monotone'}
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.stroke || colors[index % colors.length]}
              dot={line.dot}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
      <div className={styles.lineChart__legend}>
        {lines.map((line, index) => (
          <div key={line.dataKey} className={styles.lineChart__legendItem}>
            <div
              className={styles.lineChart__legendDot}
              style={{ backgroundColor: line.stroke || colors[index % colors.length] }}
            />
            <span>{line.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
