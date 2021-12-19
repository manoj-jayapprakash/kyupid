import { Revenue } from '../Analytics/Revenue';
import { Users } from '../Analytics/Users';

export const Dashboard = ({ data }) => {
  console.log(data.userData.users[0]);
  console.log(data.areaData.features[0]);
  const male = data.userData.users.filter((u) => u.gender === 'M');
  const female = data.userData.users.filter((u) => u.gender === 'F');
  const areaIdNameData = data.areaData.features.reduce((areaData, area) => {
    const areaId = area.properties.area_id;
    if (areaData[areaId] == null) areaData[areaId] = area.properties.name;
    return areaData;
  }, {});

  const usersPerArea = data.userData.users.reduce((areaObj, user) => {
    const areaId = user.area_id;
    if (areaObj[areaId] == null) areaObj[areaId] = 0;
    areaObj[areaId] = areaObj[areaId] + 1;
    return areaObj;
  }, {});

  const premuiumUsersPerArea = data.userData.users.reduce((areaObj, user) => {
    const areaId = user.area_id;
    if (areaObj[areaId] == null) areaObj[areaId] = 0;
    if (user.is_pro_user) areaObj[areaId] = areaObj[areaId] + 1;
    return areaObj;
  }, {});
  console.log(usersPerArea);
  console.log(premuiumUsersPerArea);

  return (
    <section className="dashboard">
      <p>Dashboard</p>
      <Revenue revenue={premuiumUsersPerArea} areaNames={areaIdNameData} />
      <Users
        maleData={male}
        femaleData={female}
        areaUsers={usersPerArea}
        areaNames={areaIdNameData}
      />
    </section>
  );
};
