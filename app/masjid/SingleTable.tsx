"use client"
import React from 'react';
import { convertTime } from '../utils/funs';


const PrayerTimings = ({ timings }:any) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-gray-800 dark:text-white text-2xl font-semibold mb-4 text-center">
        Prayer Timings
      </h2>
      <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="text-left py-2 px-4">Prayer</th>
            <th className="text-left py-2 px-4">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
          {/* {timings.map((timing, index) => ( */}
            <tr >
              <td className="py-2 px-4">Fajr</td>
              <td className="py-2 px-4">{convertTime(timings.fajr)}</td>
            </tr>
            <tr >
              <td className="py-2 px-4">Zohr</td>
              <td className="py-2 px-4">{convertTime(timings.zohr)}</td>
            </tr>
            <tr >
              <td className="py-2 px-4">Asr</td>
              <td className="py-2 px-4">{convertTime(timings.asr)}</td>
            </tr>
            <tr >
              <td className="py-2 px-4">Maghrib</td>
              <td className="py-2 px-4">{convertTime(timings.maghrib)}</td>
            </tr>
            <tr >
              <td className="py-2 px-4">Isha</td>
              <td className="py-2 px-4">{convertTime(timings.isha)}</td>
            </tr>
            <tr >
              <td className="py-2 px-4">Juma</td>
              <td className="py-2 px-4">{convertTime(timings.juma)}</td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    
    </div>
  );
};


const App = ({data}:any) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PrayerTimings timings={data} />
    </div>
  );
};

export default App;
