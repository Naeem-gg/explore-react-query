// SalahTimeTable.js
import React from 'react';

const SalahTimeTable = ({ masjids }:any) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Salah Time Table</h2>
      <div className="flex flex-col">
        <div className="flex flex-row font-bold bg-gray-200 py-2">
          <div className="flex-1">Masjid</div>
          <div className="flex-1">Fajr</div>
          <div className="flex-1">Dhuhr</div>
          <div className="flex-1">Asr</div>
          <div className="flex-1">Maghrib</div>
          <div className="flex-1">Isha</div>
        </div>
        {masjids.map((masjid:any) => (
          <div key={masjid.id} className="flex flex-row py-2 border-b">
            <div className="flex-1">{masjid.name}</div>
            <div className="flex-1">{masjid.fajr}</div>
            <div className="flex-1">{masjid.dhuhr}</div>
            <div className="flex-1">{masjid.asr}</div>
            <div className="flex-1">{masjid.maghrib}</div>
            <div className="flex-1">{masjid.isha}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalahTimeTable;
