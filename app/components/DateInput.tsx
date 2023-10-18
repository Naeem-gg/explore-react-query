"use client"
// DateInput.js
import React, { useEffect, useState } from 'react';
const DateInput = ({ onDateSubmit }:any) => {
  const [inputDate, setInputDate] = useState('');

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onDateSubmit(inputDate);
  };
  useEffect(()=>{
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          console.log({ latitude, longitude })
      })
  }
  },[])
  return (
    <form className="flex items-center mb-4" onSubmit={handleSubmit}>
      <label htmlFor="dateInput" className="mr-2">
        Enter a date:
      </label>
      <input
        type="text"
        id="dateInput"
        value={inputDate}
        onChange={handleInputChange}
        placeholder="dd-mm-yyyy"
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-1 rounded">
        Submit
      </button>
    </form>
  );
};


const HijriDate = () => {
  const [hijriDate, setHijriDate] = useState('');

  const fetchHijriDate = async (gregorianDate:string) => {
    try {
      const response = await fetch(
        `http://api.aladhan.com/v1/gToH/${gregorianDate}`
      );
      const data = await response.json();
      setHijriDate(data.data.hijri.date);
    } catch (error) {
      console.error('Error fetching Hijri date:', error);
    }
  };

  const handleDateSubmit = (gregorianDate:string) => {
    fetchHijriDate(gregorianDate);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Hijri Date Converter</h2>
      <DateInput onDateSubmit={handleDateSubmit} />
      {hijriDate && (
        <p className="text-lg mt-4">
          <span className="font-bold">Hijri Date:</span> {hijriDate}
        </p>
      )}
    </div>
  );
};

export default HijriDate;

