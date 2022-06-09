import Layout from "../../components/layout";
import { useRouter } from "next/router";
import useStore from "./fetchDriversAsync";
import { useEffect } from "react";

export default function Post(props) {
  const driverList = useStore((state) => state.drivers);
  const loading = useStore((state) => state.loading);
  const router = useRouter();
  const { id } = router.query;

  // let obj = driverList.filter((driver) => {
  //   return driver.driverId === id;
  // });

  // useEffect(() => {
  //   console.log(obj);
  // }, []);

  console.log(driverList);

  return (
    <div>
      <h1>Test</h1>
      {id}
    </div>
  );
}
