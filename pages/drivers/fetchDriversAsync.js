import create from "zustand";
const url = "http://ergast.com/api/f1/2022/drivers.json";

const useStore = create((set) => ({
  drivers: [],
  loading: true,

  fetchDrivers: async () => {
    const resp = await fetch(url);
    resp = await resp.json();
    set({ drivers: resp.MRData.DriverTable.Drivers, loading: false });
    addToStorage(resp.MRData.DriverTable.Drivers);
  },

  removeDriver: (driver) =>
    set((state) => ({
      drivers: state.drivers.filter(
        (driverList) => driverList.driverId !== driver
      ),
    })),

  setDrivers: (drivers) => set({ drivers }),
}));

const addToStorage = (drivers) => {
  localStorage.setItem("drivers", JSON.stringify(drivers));
};

export default useStore;
