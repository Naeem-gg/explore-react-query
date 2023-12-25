import SingleTable from '@/app/masjid/SingleTable'
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
  const data = await getData(params.masjidName)
  console.log(data)
  return (
    <div>
      <h1 className='text-5xl text-center pt-4'>{params.masjidName} Masjid</h1>
      <SingleTable data={data}/>
    </div>
  )
}

export default page
