import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import useStore from "./fetchDriversAsync";

export default function Drivers() {
  const driverList = useStore((state) => state.drivers);
  const loading = useStore((state) => state.loading);

  function deUmlaut(value) {
    value = value.toLowerCase();
    value = value.replace(/ü/g, "u");
    return value;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Drivers
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {driverList.map((driver) => {
            const { givenName, familyName, permanentNumber } = driver;

            const string = `${givenName.charAt(0)}/${givenName
              .substring(0, 3)
              .toUpperCase()}${familyName
              .substring(0, 3)
              .toUpperCase()}01_${givenName}_${familyName}/${givenName
              .substring(0, 3)
              .toLowerCase()}${familyName.substring(0, 3).toLowerCase()}01`;

            const url = `https://www.formula1.com/content/dam/fom-website/drivers/${string}.png`;

            return (
              <div key={permanentNumber} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={url}
                    alt={driver.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/drivers/${deUmlaut(familyName)}`}>
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {givenName} {familyName}
                        </a>
                      </Link>
                      {/* <a href={driver.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {givenName} {familyName}
                      </a> */}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{driver.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    #{permanentNumber}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
