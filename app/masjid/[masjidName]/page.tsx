import SingleTable from '@/app/masjid/SingleTable'
import { convertTime } from '@/app/utils/funs'
import prisma from '@/prisma/client'

const getData = async(masjidName:string)=>{
  try {
    const res = await prisma.time.findUnique({where:{name:masjidName}})
    
    return res
  } catch (error) {
    console.log(error)
  }
}

const page = async({params}:{params:{masjidName:string}}) => {
  const timings = await getData(params.masjidName)
  if(timings === null || timings === undefined)return
  
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-gray-800 dark:text-white text-2xl font-semibold mb-4 text-center">
      {params.masjidName} Masjid
    </h2>
    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
      <thead className="bg-gray-200 dark:bg-gray-700">
        <tr>
          <th className="text-left py-2 px-4">Prayer</th>
          <th className="text-left py-2 px-4">Time</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
        {/* {timings.map((timing, index) => ( */}
          <tr >
            <td className="py-2 px-4">Fajr</td>
            <td className="py-2 px-4">{convertTime(timings.fajr.split(" ")[0])} {timings.fajr.split(" ")[1]}</td>
          </tr>
          <tr >
            <td className="py-2 px-4">Zohr</td>
            <td className="py-2 px-4">{convertTime(timings.zohr.split(" ")[0])} {timings.zohr.split(" ")[1]}</td>
          </tr>
          <tr >
            <td className="py-2 px-4">Asr</td>
            <td className="py-2 px-4">{convertTime(timings.asr.split(" ")[0])} {timings.asr.split(" ")[1]}</td>
          </tr>
          <tr >
            <td className="py-2 px-4">Maghrib</td>
            <td className="py-2 px-4">{convertTime(timings.maghrib.split(" ")[0])} {timings.maghrib.split(" ")[1]}</td>
          </tr>
          <tr >
            <td className="py-2 px-4">Isha</td>
            <td className="py-2 px-4">{convertTime(timings.isha.split(" ")[0])} {timings.isha.split(" ")[1]}</td>
          </tr>
          <tr >
            <td className="py-2 px-4">Juma</td>
            <td className="py-2 px-4">{convertTime(timings.juma.split(" ")[0])} {timings.juma.split(" ")[1]}</td>
          </tr>
        {/* ))} */}
      </tbody>
    </table>
  
  </div>
  </div>
  )
}

export default page
