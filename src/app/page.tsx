import Image from 'next/image'
import Navbar from './Components/Navbar';

export default function Home() {
  return (
    <div className=' bg-blue-500'>
      <Navbar></Navbar>
      <Image className='  rounded-full h-40 w-40 flex items-center justify-center mr-4"'
        src="/images/images.jfif" 
        alt="Logo"
        width={400}
        height={3000}
      />
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <h1 className="text-3xl font-bold">Welcome to My website</h1>
    </div>
    </div>
  )
}
