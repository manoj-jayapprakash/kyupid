export const formatData = (data) => {
  const male = [];
  const female = [];
  const others = [];
  const areaInfo = {};

  const userInfo = data.userData?.users;

  if (userInfo.length) {
    for (let i = 0; i < userInfo.length; i++) {
      //Retrieves Gender Info
      if (userInfo[i].gender === 'M') male.push(userInfo[i]);
      else if (userInfo[i].gender === 'F') female.push(userInfo[i]);
      else others.push(userInfo[i]);

      //Retrieves area information
      if (!areaInfo[userInfo[i].area_id]) {
        areaInfo[userInfo[i].area_id] = {
          totalUserCount: 0,
          premiumUser: 0,
          male: 0,
          female: 0,
          others: 0,
        };
        areaInfo[userInfo[i].area_id].totalUserCount++;
        if (userInfo[i].gender === 'M') areaInfo[userInfo[i].area_id].male++;
        else if (userInfo[i].gender === 'F')
          areaInfo[userInfo[i].area_id].female++;
        else areaInfo[userInfo[i].area_id].others++;
        if (userInfo[i].is_pro_user) {
          areaInfo[userInfo[i].area_id].premiumUser++;
        }
      } else {
        areaInfo[userInfo[i].area_id].totalUserCount++;
        if (userInfo[i].gender === 'M') areaInfo[userInfo[i].area_id].male++;
        else if (userInfo[i].gender === 'F')
          areaInfo[userInfo[i].area_id].female++;
        else areaInfo[userInfo[i].area_id].others++;
        if (userInfo[i].is_pro_user) {
          areaInfo[userInfo[i].area_id].premiumUser++;
        }
      }
    }
  }

  const areaDetails = data.areaData?.features.map((area) => {
    if (areaInfo[area.properties.area_id])
      return {
        areaId: area.properties.area_id,
        name: area.properties.name,
        userCount: areaInfo[area.properties.area_id].totalUserCount,
        premiumUsers: areaInfo[area.properties.area_id].premiumUser,
        male: areaInfo[area.properties.area_id].male,
        female: areaInfo[area.properties.area_id].female,
        others: areaInfo[area.properties.area_id].others,
        coordinates: area.geometry.coordinates[0][0],
      };
  });

  return {
    areaInfo: areaDetails,
    usersInfo: {
      male: male.length,
      female: female.length,
      others: others.length,
    },
  };
};
