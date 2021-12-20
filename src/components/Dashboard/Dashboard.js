import { Revenue } from '../Analytics/Revenue';
import { Users } from '../Analytics/Users';

export const Dashboard = ({ area, user }) => {
  return (
    <section className="dashboard">
      <p>Dashboard</p>
      <Revenue revenue={area} />
      <Users maleData={user.male} femaleData={user.female} areaUsers={area} />
    </section>
  );
};
