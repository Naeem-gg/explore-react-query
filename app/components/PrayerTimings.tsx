"use client"
interface MosqueTimings {
    mosqueName: string;
    timings: { name: string; time: string }[];
  }
  
  interface PrayerTimingsProps {
    mosquesData: MosqueTimings[];
  }
  
  const PrayerTimings: React.FC<PrayerTimingsProps> = ({ mosquesData }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mosquesData.map((mosque, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-gray-800 dark:text-white text-xl font-semibold mb-4">
              {mosque.mosqueName}
            </h2>
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="text-left py-2 px-4">Prayer</th>
                  <th className="text-left py-2 px-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
                {mosque.timings.map((timing, idx) => (
                  <tr key={idx}>
                    <td className="py-2 px-4">{timing.name}</td>
                    <td className="py-2 px-4">{timing.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };
  
  // Usage
  const mosquesData: MosqueTimings[] = [
    {
      mosqueName: 'Masjid 1',
      timings: [
        { name: 'Fajr', time: '5:30 AM' },
        { name: 'Dhuhr', time: '1:15 PM' },
        { name: 'Asr', time: '4:30 PM' },
        // ... other timings
      ],
    },
    {
      mosqueName: 'Masjid 2',
      timings: [
        { name: 'Fajr', time: '5:45 AM' },
        { name: 'Dhuhr', time: '1:30 PM' },
        { name: 'Asr', time: '4:45 PM' },
        // ... other timings
      ],
    },
    // Add more mosques as needed
  ];
  
  const App = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <PrayerTimings mosquesData={mosquesData} />
      </div>
      // <div>
      //   <TimeTable />
      // </div>
    );
  };
  
  export default App;
  