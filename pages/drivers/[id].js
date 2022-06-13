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

  const driver = driverList.find((driver) => driver.driverId === id);
  console.log(id);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div key={driver.driverId}>
          <img
            // get the image url from localStorage
            src={localStorage.getItem(
              `driver_images:${driver?.givenName}_${driver?.familyName}`
            )}
            className="w-150 h-auto"
          />
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
