"use client"
import Link from 'next/link';
import React, { useState } from 'react';
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

const SearchableList = ({data,currentSalah}:{data:Item[],currentSalah:string}) => {
  

  
  const [items, setItems] = useState<Item[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>();

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
        items.map((item:Item) => (
          <Link href={`/masjid/${item.route}`} key={item.id} className="bg-gray-200 p-3 mb-2 rounded-md hover:bg-gray-400 flex justify-between">
            <span>{_.startCase(item.name)} Masjid</span> 
            {currentSalah==="fajr" &&<span className='text-green-700'>{"Fajr"} {convertTime(item.fajr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="zohr" &&<span className='text-green-700'>{"Zohr"} {convertTime(item.zohr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="asr" &&<span className='text-green-700'>{"Asr"} {convertTime(item.asr.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="maghrib" &&<span className='text-green-700'>{"Maghrib"} {convertTime(item.maghrib.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="isha" &&<span className='text-green-700'>{"Isha"} {convertTime(item.isha.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
            {currentSalah==="juma" &&<span className='text-green-700'> {"Juma"} {convertTime(item.juma.split(" ")[0])}{item.asr.split(" ")[1]}</span>}
          </Link>
        ))
      ) : (
        <div className="bg-gray-200 p-3 mb-2 rounded-md hover:bg-gray-400">No matching items found</div>
      )}
    </div>
  );
};

export default SearchableList;

