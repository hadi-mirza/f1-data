import "../styles/globals.css";
import Layout from "../components/Layout";
import useStore from "./drivers/fetchDriversAsync";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const fetchDrivers = useStore((state) => state.fetchDrivers);

  useEffect(() => {
    setInterval(fetchDrivers, 1000);
  }, [fetchDrivers]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
