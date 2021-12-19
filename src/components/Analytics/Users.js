import './Analytics.css';
import { Bar } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
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
  Legend,
  zoomPlugin
);

export const Users = ({ maleData, femaleData, areaUsers, areaNames }) => {
  console.log(maleData[0]);
  const userLabels = ['Male', 'Female'];
  const userData = {
    labels: userLabels,
    datasets: [
      {
        label: 'Number of Users',
        data: [maleData.length, femaleData.length],
        backgroundColor: ['#4C3F91', '#F2789F'],
      },
    ],
  };
  const areaLabels = Object.values(areaNames);
  const areaData = {
    labels: areaLabels,
    datasets: [
      {
        label: 'Number of Users',
        data: Object.values(areaUsers),
        backgroundColor: '#064635',
      },
    ],
  };

  const areaOptions = {
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
      },
    },
  };
  console.log(Object.values(areaUsers));
  return (
    <div className="data">
      <article className="user-data">
        <p className="user-data__title">Number of Users</p>
        <Pie data={userData} />
      </article>
      <article className="area-data">
        <p className="user-data__title">Number of Users Per Area</p>
        <Bar options={areaOptions} data={areaData} />
      </article>
    </div>
  );
};
