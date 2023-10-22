import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Stack } from '@mui/material';


function Result({ data }) {

  const { homeValue, downPayment, loanAmount, loanTerm, intrest } = data;

  const monthlyPayment = ((loanAmount + loanAmount * (intrest / 100) * loanTerm) / (loanTerm * 12));

  const totalIntrest = loanAmount * (intrest / 100) * loanTerm;

  const totalAmount = loanAmount + loanAmount * (intrest / 100) * loanTerm;

  ChartJS.register(ArcElement, Tooltip, Legend);
  const pieChartData = {
    labels: ['Principle', 'Intrest'],
    datasets: [
      {
        label: 'Ratio of Principle and Intrest',
        data: [homeValue, totalIntrest],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };


  return (
    <>
      <div >
        <h2>Monthly Payment = ${monthlyPayment.toFixed(2)}</h2>
      </div>
      <div style={{ width: '300px', margin: 'auto', marginTop: '5px',marginBottom:'25px' }}>
        <Pie data={pieChartData}></Pie>
      </div>
      <div>
        <p>Actual loan amount = {loanAmount}</p>
        <p>Intrest added = {totalIntrest}</p>
        <p>Total amount with intrest = {totalAmount}</p>
      </div>
    </>
  )
}

export default Result
