export const formatData = (data) => {
  const male = [];
  const female = [];
  const others = [];
  const areaInfo = {};

  const userInfo = data.userData?.users;

  const populateAreaDetails = (currentArea, currentUser) => {
    //Increase the user count for the given area
    currentArea[currentUser.area_id].totalUserCount++;

    //Update the male/female/others value based on the gender of the user
    if (currentUser.gender === 'M') currentArea[currentUser.area_id].male++;
    else if (currentUser.gender === 'F')
      currentArea[currentUser.area_id].female++;
    else currentArea[currentUser.area_id].others++;

    //Update the premium users count for the given area
    if (currentUser.is_pro_user) {
      currentArea[currentUser.area_id].premiumUser++;
    }
  };

  if (userInfo.length) {
    for (let i = 0; i < userInfo.length; i++) {
      //Retrieves Gender Info
      if (userInfo[i].gender === 'M') male.push(userInfo[i]);
      else if (userInfo[i].gender === 'F') female.push(userInfo[i]);
      else others.push(userInfo[i]);

      //Retrieves area information
      if (!areaInfo[userInfo[i].area_id]) {
        areaInfo[userInfo[i].area_id] = {
          //Initialize area with default values if the area didn't exist already
          totalUserCount: 0,
          premiumUser: 0,
          male: 0,
          female: 0,
          others: 0,
        };
      }
      populateAreaDetails(areaInfo, userInfo[i]);
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
    else return {};
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
