import './App.css';
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { MapArea } from './components/MapArea/MapArea';
import { formatData } from './components/data';

function App() {
  const [apiData, setApiData] = useState(null);

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

  if (!apiData) return <p className="loading">Loading</p>;

  const data = formatData(apiData);

  return (
    <div className="app">
      <Dashboard area={data.areaInfo} user={data.usersInfo} />
      <MapArea area={data.areaInfo} />
    </div>
  );
}

export default App;
