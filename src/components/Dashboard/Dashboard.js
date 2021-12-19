import { Revenue } from '../Analytics/Revenue';
import { Users } from '../Analytics/Users';

export const Dashboard = ({ data }) => {
  console.log(data.userData);
  const male = data.userData.users.filter((u) => u.gender === 'M');
  const female = data.userData.users.filter((u) => u.gender === 'F');

  return (
    <section className="dashboard">
      <p>Dashboard</p>
      {/* <Revenue areas={data.areas} users={data.users} /> */}
      <Users maleData={male} femaleData={female} />
    </section>
  );
};
