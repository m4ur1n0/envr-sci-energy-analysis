// components/LineChart.tsx
'use client';
import { Chart } from 'react-google-charts';
import { useEffect, useState } from 'react';
import { loadAndParseCSV } from '@/lib/csvLoader';
import { ChartData, LineChartProps, ChartOptions } from '@/types/chartTypes';
import Papa from 'papaparse';

export default function LineChart({
  chartData,
  title = 'Data Visualization',
  width = 600,
  height = 400,
  curveType = 'function',
  legendPosition = 'bottom'
}: LineChartProps) {
  


  if (!chartData) {
    return <div className="p-4 text-gray-600">No data available</div>;
  }

  // console.log(JSON.stringify(chartData));

  // time to get creative with our data

  const options: ChartOptions = {
    title,
    curveType,
    legend: { position: legendPosition },
    hAxis: {
      title: "Year",
      format: "yyyy",
    },
    vAxis: {
      title: 'Energy (Quads)',
      minValue: 0
    },
    width,
    height,

  };

  return (
    <div className=" bg-white">
      <Chart
        chartType="LineChart"
        data={chartData}
        options={options}
        width={width}
        height={height}
        legendToggle={true}
        className=""
      />
    </div>
  );
}