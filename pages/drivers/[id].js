import Layout from "../../components/layout";
import { useRouter } from "next/router";
import useStore from "./fetchDriversAsync";
import { useEffect } from "react";

export default function Driver() {
  const driverList = useStore((state) => state.drivers);
  const fetchDrivers = useStore((state) => state.fetchDrivers);
  const setDrivers = useStore((state) => state.setDrivers);
  const loading = useStore((state) => state.loading);
  const router = useRouter();
  const { id } = router.query;

  // if data exists in localStorage, use it else fetch data from API
  useEffect(() => {
    if (localStorage.getItem("drivers")) {
      const drivers = JSON.parse(localStorage.getItem("drivers"));
      setDrivers(drivers);
    } else {
      fetchDrivers();
      localStorage.setItem("drivers", JSON.stringify(driverList));
    }
  }, [fetchDrivers]);

  const driver = driverList.find((driver) => driver.driverId === id);

  // destructure driver
  // const { driverId, givenName, familyName, dateOfBirth, nationality } = driver;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div key={driver.driverId}>
          <h2>
            {driver.givenName} {driver.familyName}
          </h2>
          <p>{driver.nationality}</p>
          <p>{driver.dateOfBirth}</p>
        </div>
      )}
    </div>
  );
}
