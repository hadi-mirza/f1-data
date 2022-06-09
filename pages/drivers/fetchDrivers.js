import create from "zustand";
import Drivers from ".";
const url = "http://ergast.com/api/f1/2022/drivers.json";

const useStore = create((set) => ({
  drivers: [],
  loading: true,

  fetchDrivers: () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        set({ drivers: data.MRData.DriverTable.Drivers, loading: false })
      );
  },

  removeDriver: (driver) =>
    set((state) => ({
      drivers: state.drivers.filter(
        (driverList) => driverList.driverId !== driver
      ),
    })),
}));

export default useStore;
