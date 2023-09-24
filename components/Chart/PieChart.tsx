"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'green'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 80],
        backgroundColor: [
          'rgba(255, 0, 0, 0.7)',
          'rgba(0, 255, 42, 1)',

        ],
        borderColor: [
          'rgba(255, 0, 0, 0.7)',
          'rgba(0, 255, 42, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  type Props = {
    width: number; 
    height: number; 
  }
function PieChart({width,height}: Props) {

  const options = {
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

    return (
        <Pie width={width} height={height} data={data} options={options} />
    )
}

export default PieChart
  
  