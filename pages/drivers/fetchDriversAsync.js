import create from "zustand";
import Drivers from ".";
const url = "http://ergast.com/api/f1/2022/drivers.json";

const useStore = create((set) => ({
  drivers: [],
  loading: true,

  fetchDrivers: async () => {
    const resp = await fetch(url);
    resp = await resp.json();
    set({ drivers: resp.MRData.DriverTable.Drivers, loading: false });
  },

  removeDriver: (driver) =>
    set((state) => ({
      drivers: state.drivers.filter(
        (driverList) => driverList.driverId !== driver
      ),
    })),
}));

export default useStore;
