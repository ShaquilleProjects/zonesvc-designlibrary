import React from 'react';
import './LineChart.css';
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
      <div className={`line-chart ${className}`} style={{ width, height }}>
        <div className="line-chart__loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`line-chart ${className}`} style={{ width, height }}>
        <div className="line-chart__error">{error}</div>
      </div>
    );
  }

  return (
    <div className={`line-chart ${className}`} style={{ width, height }}>
      <h3 className="line-chart__title">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} className="line-chart__chart">
          <CartesianGrid strokeDasharray="3 3" className="line-chart__grid" />
          <XAxis dataKey={xAxisKey} className="line-chart__x-axis" />
          <YAxis className="line-chart__y-axis" />
          <Tooltip className="line-chart__tooltip" />
          <Legend className="line-chart__legend" />
          {lines.map((line, idx) => (
            <Line
              key={line.dataKey}
              type={line.type || 'monotone'}
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.stroke || (colors && colors[idx]) || '#0070f3'}
              dot={line.dot}
              className="line-chart__line"
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
      <div className="line-chart__legend">
        {lines.map((line, index) => (
          <div key={line.dataKey} className="line-chart__legendItem">
            <div
              className="line-chart__legendDot"
              style={{ backgroundColor: line.stroke || colors[index % colors.length] }}
            />
            <span>{line.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
