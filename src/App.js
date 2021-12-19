import './App.css';
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { MapArea } from './components/MapArea/MapArea';
function App() {
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    try {
      const areaRes = await fetch('https://kyupid-api.vercel.app/api/areas');
      const areaData = await areaRes.json();
      const userRes = await fetch('https://kyupid-api.vercel.app/api/users');
      const userData = await userRes.json();
      setApiData({ userData, areaData });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(apiData);

  return (
    <div className="app">
      <Dashboard data={apiData} />
      <MapArea data={apiData} />
    </div>
  );
}

export default App;
