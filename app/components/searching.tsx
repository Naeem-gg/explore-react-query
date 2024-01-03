"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { convertTime } from '../utils/funs';
import _ from 'lodash';

type Item = {
  id: string;
  name: string;
  fajr:string;
  zohr: string;
  asr: string;
  maghrib: string;
  isha: string;
  juma: string;
  route:string
}

const SearchableList = ({data}:{data:Item[]}) => {
  
  const [currentSalah, setCurrentSalah] = useState<string>("");
  useEffect(()=>{
    
    const currentDate = new Date();
    const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
    const currentTime = hours * 100 + minutes;
  if (currentTime >= 2200 || currentTime < 645) {
    setCurrentSalah("fajr");
  } else if (currentTime >= 646 && currentTime <= 1500) {
    setCurrentSalah("zohr");
  } else if (currentTime >= 1501 && currentTime <= 1855) {
    setCurrentSalah("asr");
  } else if (currentTime >= 1856 && currentTime <= 1925) {
    setCurrentSalah("maghrib");
  } else if (currentTime >= 1926 && currentTime <= 2159) {
    setCurrentSalah("isha");
  }
},[])
  const [items, setItems] = useState<Item[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>('zohr');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItems(filteredItems);
  };

  return (
    <div className="mx-auto max-w-lg p-4 flex flex-col">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
      />
      {items.length > 0 ? (
        items.map((item,index) => (
          <Link href={`/masjid/${item.route}`} key={item.id} className="bg-gray-200 p-3 mb-2 rounded-md hover:bg-gray-400 flex justify-between">
            <span>{_.startCase(item.name)} Masjid</span> 
            {currentSalah==="fajr" &&<span className='text-green-700'>{"Fajr"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="zohr" &&<span className='text-green-700'>{"Zohr"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="asr" &&<span className='text-green-700'>{"Asr"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="maghrib" &&<span className='text-green-700'>{"Maghrib"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="isha" &&<span className='text-green-700'>{"Isha"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="juma" &&<span className='text-green-700'> {"Juma"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
          </Link>
        ))
      ) : (
        <div className="bg-gray-200 p-3 mb-2 rounded-md hover:bg-gray-400">No matching items found</div>
      )}
    </div>
  );
};

export default SearchableList;

