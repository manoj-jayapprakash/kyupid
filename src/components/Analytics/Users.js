import './Analytics.css';
import { Bar } from 'react-chartjs-2';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const Users = ({ maleData, femaleData }) => {
  console.log(maleData);
  const labels = ['Male', 'Female'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Number of Users',
        data: [maleData.length, femaleData.length],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.2)'],
      },
    ],
  };
  return (
    <article className="user-data">
      <p className="user-data__title">Number of Users</p>
      <Pie data={data} />;
    </article>
  );
};
