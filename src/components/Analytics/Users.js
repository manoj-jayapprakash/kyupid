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

export const Users = ({ maleData, femaleData, areaUsers }) => {
  const userLabels = ['Male', 'Female'];
  const userData = {
    labels: userLabels,
    datasets: [
      {
        label: 'Number of Users',
        data: [maleData, femaleData],
        backgroundColor: ['#4C3F91', '#F2789F'],
      },
    ],
  };

  let labels = areaUsers.map((area) => area.name);

  const areaData = {
    labels,
    datasets: [
      {
        label: 'Number of Users',
        data: areaUsers.map((area) => area.userCount),
        backgroundColor: '#064635',
      },
    ],
  };

  return (
    <div className="data">
      <article className="user-data">
        <p className="user-data__title">Number of Users</p>
        <Pie data={userData} />
      </article>
      <article className="area-data">
        <p className="user-data__title">Number of Users Per Area</p>
        <Bar data={areaData} />
      </article>
    </div>
  );
};
