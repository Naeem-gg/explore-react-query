// pages/SalahTimePage.js
import React from 'react';
import SalahTimeTable from '@/app/components/SalahTimeTable';

const masjids = [
  {
    id: 1,
    name: 'Masjid A',
    fajr: '5:00 AM',
    dhuhr: '1:00 PM',
    asr: '4:30 PM',
    maghrib: '6:45 PM',
    isha: '8:00 PM',
  },
  // Add more masjids as needed
];

const SalahTimePage = () => {
  return (
    <div>
      <SalahTimeTable masjids={masjids} />
    </div>
  );
};

export default SalahTimePage;
