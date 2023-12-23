"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import Link from "next/link";

const rows = [
  {
    key: "1",
    name: "Shahi Masjid",
    fajr:"6:15 am",
    zohr:"1:30 pm",
    asr:"4:45 pm",
    maghrib:"6:05 pm",
    isha:"8:00 pm",
    updatedAt:"18 Dec 2023"
  },
  
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key:"fajr",
    label:"Fajr"
  },
  {
    key:"zohr",
    label:"Zohr",
  }
  ,{
    key:"asr",
    label:"Asr",
  },
  {
    key:"maghrib",
    label:"Maghrib"
  },
  {
    key:"isha",
    label:"Isha",
  },
  {
    key:"updatedAt",
    label:"Updated At"
  }

 
];

export default function App() {
  
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns} className="">
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key} className="">
            {(columnKey) => <TableCell><Link href={`/${item.name.split(" ")}`}>{getKeyValue(item, columnKey)}</Link></TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
 