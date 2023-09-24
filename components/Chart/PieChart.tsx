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
        data: [80, 20],
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

  }
function PieChart({}: Props) {
    return (
        <Pie data={data} />
    )
}

export default PieChart
  
  