import SingleTable from '@/app/masjid/SingleTable'


const page = ({params}:{params:{masjidName:string}}) => {
  return (
    <div>
      <h1 className='text-5xl text-center pt-4'>{params.masjidName} Masjid</h1>
      <SingleTable />
    </div>
  )
}

export default page
