import { useEffect, useState } from "react";
import { database } from "./firebase";
import { ref, onValue } from "firebase/database";

export default function Dashboard() {
  const [liveData, setLiveData] = useState({});

  useEffect(() => {
    const liveRef = ref(database, 'devices/device001/live');
    onValue(liveRef, (snapshot) => {
      setLiveData(snapshot.val());
    });
  }, []);

  return (
    <div>
      <h1>Microgrid Live Data</h1>
      <p>Temperature: {liveData.temperature} °C</p>
      <p>Voltage: {liveData.voltage} V</p>
      <p>Current: {liveData.current} A</p>
      <p>Power: {liveData.power} W</p>
    </div>
  );
}
