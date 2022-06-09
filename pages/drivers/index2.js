import { useEffect } from "react";
import useStore from "./fetchDrivers";

export default function Drivers2() {
  const fetchDrivers = useStore((state) => state.fetchDrivers);
  const driverList = useStore((state) => state.drivers);
  const removeDriver = useStore((state) => state.removeDriver);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    setInterval(fetchDrivers, 1000);
  }, [fetchDrivers]);

  const drivers = driverList.map((driver) => {
    const {
      permanentNumber,
      driverId,
      givenName: fname,
      familyName: lname,
    } = driver;
    return (
      <li onClick={(e) => removeDriver(driverId)} key={permanentNumber}>
        {fname} {lname}
      </li>
    );
  });

  if (loading) {
    return (
      <div>
        <h1 style={{ marginTop: 50 }}>Loading . . .</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Drivers - 2</h1>
      <ul>{drivers}</ul>
    </div>
  );
}
