"use client"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import React from 'react';

const SalahTimeTable = ({ masjids }:any) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Salah Time Table</h2>
      <Table aria-label="Example static collection table">
      <TableHeader>
          <TableColumn> Sr no</TableColumn>
          <TableColumn> Masjid</TableColumn>
          <TableColumn> Fajr</TableColumn>
          <TableColumn> Dhuhr</TableColumn>
          <TableColumn> Asr</TableColumn>
          <TableColumn> Maghrib</TableColumn>
          <TableColumn> Isha</TableColumn>
          <TableColumn> Juma</TableColumn>
        </TableHeader>
        <TableBody>

        {masjids.map((masjid:any,index:number) => (
          <TableRow key={masjid.id}>
            <TableCell className="mx-4">{index+1}</TableCell>
            <TableCell className="flex-1">{masjid.name}</TableCell>
            <TableCell className="flex-1">{masjid.fajr}</TableCell>
            <TableCell className="flex-1">{masjid.dhuhr}</TableCell>
            <TableCell className="flex-1">{masjid.asr}</TableCell>
            <TableCell className="flex-1">{masjid.maghrib}</TableCell>
            <TableCell className="flex-1">{masjid.isha}</TableCell>
            <TableCell className="flex-1">{masjid.juma}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalahTimeTable;
