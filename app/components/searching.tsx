"use client"
import Link from 'next/link';
import React, { useState } from 'react';

interface Item {
  id: number;
  text: string;
}

const SearchableList: React.FC = () => {
  const initialItems: Item[] = [
    { id: 1, text: 'Shahi Masjid' },
    { id: 2, text: 'Hamidia Masjid' },
    { id: 3, text: 'Rabia Abdulgafoor' },
    { id: 4, text: 'Tawakkul Masjid' },
    { id: 5, text: 'Jama Masjid' },
    { id: 6, text: 'Arqam Masjid' },
    { id: 7, text: 'Makka Masjid' },
    // Add more items as needed
  ];

  const [items, setItems] = useState<Item[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filteredItems = initialItems.filter((item) =>
      item.text.toLowerCase().includes(e.target.value.toLowerCase())
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
        items.map((item) => (
          <Link href={`/masjid/${item.text.split(" ")[0]}`} key={item.id} className="bg-gray-200 p-3 mb-2 rounded-md hover:bg-gray-400 flex justify-between">
            <span>{item.text}</span> <span>Isha 8:00pm</span>
          </Link>
        ))
      ) : (
        <div className="bg-gray-200 p-3 mb-2 rounded-md hover:bg-gray-400">No matching items found</div>
      )}
    </div>
  );
};

export default SearchableList;
