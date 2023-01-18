import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart ({ chartData }) {
  
  return (
    <div className="chart-container" style= {{width:"700px", height:"500px"}}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Average Patients per Day"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};
export default BarChart;