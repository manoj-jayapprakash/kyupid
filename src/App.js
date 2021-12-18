import './App.css';
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { MapArea } from './components/MapArea/MapArea';
function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const res = await Promise.all([
        fetch('https://kyupid-api.vercel.app/api/areas'),
        fetch('https://kyupid-api.vercel.app/api/users'),
      ]);
      const d = await Promise.all([res[0].json(), res[1].json()]);
      setData({ user: d[0], area: d[1] });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="app">
      <Dashboard area={data.area} users={data.users} />
      <MapArea area={data.area} users={data.users} />
    </div>
  );
}

export default App;
