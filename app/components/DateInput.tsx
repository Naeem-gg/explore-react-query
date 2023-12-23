"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const HijriDate = ({date}:any) => {

  const [inputDate, setInputDate] = useState('');
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputDate)
    const data = inputDate.split('-')
    const userDate = `${data[2]}-${data[1]}-${data[0]}`
    console.log(userDate)
    console.log(date)
    router.push(`/?date=${userDate}`)
  };


  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Hijri Date Converter</h2>
      <form className="flex items-center mb-4" onSubmit={handleSubmit}>
      <label htmlFor="dateInput" className="mr-2">
        Enter a date:
      </label>
      <input
        type="date"
        id="dateInput"
        value={inputDate}
        onChange={e=>setInputDate(e.target.value)}
        placeholder="dd-mm-yyyy"
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-1 rounded">
        Submit
      </button>
    </form>
      {true && (
        <p className="text-lg mt-4">
          <span className="font-bold">Hijri Date:</span> {true}
        </p>
      )}
    </div>
  );
};

export default HijriDate;


      // useEffect(()=>{
      //   if('geolocation' in navigator) {
      //     navigator.geolocation.getCurrentPosition(({ coords }) => {
      //         const { latitude, longitude } = coords;
      //         console.log({ latitude, longitude })
      //     })
      // }
      // },[])