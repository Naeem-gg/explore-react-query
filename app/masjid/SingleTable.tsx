"use client"
import React from 'react';

interface PrayerTiming {
  name: string;
  time: string;
}

interface PrayerTimingsProps {
  timings: PrayerTiming[];
}

const PrayerTimings: React.FC<PrayerTimingsProps> = ({ timings }) => {
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
          {timings.map((timing, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{timing.name}</td>
              <td className="py-2 px-4">{timing.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

const timingsData: PrayerTiming[] = [
  { name: 'Fajr', time: '5:30 AM' },
  { name: 'Dhuhr', time: '1:15 PM' },
  { name: 'Asr', time: '4:30 PM' },
  { name: 'Maghrib', time: '6:45 PM' },
  { name: 'Isha', time: '8:00 PM' },
  { name: 'Juma', time: '1:30 PM' },
];

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PrayerTimings timings={timingsData} />
    </div>
  );
};

export default App;
