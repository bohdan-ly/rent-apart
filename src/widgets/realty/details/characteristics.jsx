import React from 'react';

export const Characteristics = ({ rooms, area, address, location, status }) => {
  console.log(rooms, area, address, location, status);
  return (
    <div className="lg:col-span-3">
      <table className="w-full mt-5 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="pr-6 py-3">
              Realty Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Rooms {rooms || '(?)'}
            </th>
            <td className="px-6 py-4 font-medium text-gray-900">Size {area || '(?)'}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Address {address || '(?)'}
            </th>
            <td className="px-6 py-4 font-medium text-gray-900">Location {location || '(?)'}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Status <span className="underline">{status || '(?)'}</span>
            </th>
            <td className="px-6 py-4 font-medium text-gray-900">Chaos</td>
          </tr>
          {/* <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2"
            >
              Feb 20, 2022
            </th>
            <td className="px-6 py-4 font-medium text-gray-900">Gray</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
