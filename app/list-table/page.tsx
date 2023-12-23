import React from 'react'
import SalahTimeTable from '../components/SalahTimeTable'

const page = () => {
    const data = [
      {id:crypto.randomUUID(),name:"Shahi Masjid",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
      {id:crypto.randomUUID(),name:"Hamidia Masjid",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
      {id:crypto.randomUUID(),name:"Rabia Abdulgafoor",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
      {id:crypto.randomUUID(),name:"Tawakkul Masjid",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
      {id:crypto.randomUUID(),name:"Jama Masjid",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
      {id:crypto.randomUUID(),name:"Arqam Masjid",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
      {id:crypto.randomUUID(),name:"Makka Masjid",fajr:"6:15 AM",dhuhr:"1:30 PM",asr:"4:45 PM",maghrib:"6:05 PM",isha:"8:00 PM",juma:"1:30 PM"},
  ]
  return (
    <div className='h-screen w-screen p-4'>
    <div className="w-screen h-1/6 text-center p-4 text-3xl">إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ </div>
    <SalahTimeTable masjids={data}/>
    </div>
  )
}

export default page
