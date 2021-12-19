import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Revenue = ({ revenue, areaNames }) => {
  // console.log(users.features);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue per area',
      },
    },
  };

  const labels = Object.values(areaNames);

  const revenueData = {
    labels,
    datasets: [
      {
        label: 'Number of Premium Users',
        data: Object.values(revenue),
        backgroundColor: '#ECB365',
      },
    ],
  };

  return (
    <section className="revenue">
      <article className="area-data">
        <p className="user-data__title">Number of Premium Users Per Area</p>
        <Bar data={revenueData} />
      </article>
    </section>
  );
};
