import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from '../public/myimg.png';
import Image from 'next/image';
import rk from "../public/myimg.png"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <main className='bg-white p-8   '>
      <nav className='py-4 flex justify-between'>
          <div className='text-4xl md:justify-start py-4 px-4 gap-10 flex text-gray-500'>
                    {/* Add your social icons here */}
                    {/* For example: */}
                    <AiFillLinkedin /> 
                    <AiFillGithub /> 
                  </div>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'></BsFillMoonStarsFill>
            </li>
            <li>
              <a
                className='bg-gradient-to-r from-purple-300 to-purple-700 text-white font-dmsans font-medium px-4 py-2 rounded-md ml-8'
                href='#'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav >
        <section className=' min-h-screen  flex justify-center flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 col-start-1 py-20'>
            {/* Text Content */}
            <div className=' p-4 m-6 flex flex-col justify-center items-left order2 md:order-2'>
              <div className='text-xl xl:text-2xl sm:text-xl xs:text-4xl py-2 text-purple-500 font-dmsans '>Hello I am</div>
              <h1 className='text-6xl  xl:text-6xl sm:py-2 xs:text-6xl xs:py-2 py-2 font-black font-playfair'>Rishabh Kamath</h1>
              <div className='px-1 py-4 text-lg xl:text-lg sm:text-xl xs:text-lg text-justify tracking-tighter font-dmsans'>Experienced in Deep Learning, I am dedicated to applying cutting-edge Neural Network designs to practical challenges. With a strong foundation in data science and computer vision, I prioritize teamwork, clear communication, and continuous learning. Let us connect and innovate together!</div>
             
            </div>
            
            {/* Image */}
            <div className=" p-2 m-2 flex justify-center items-center order-1 md:order-1 ">
            <Image src={rk} className='bg-gradient-to-r from-purple-300 to-purple-700 rounded-full w-full md:w-60 h-100'  alt="dev-img"/>

            </div>
          </div>
        </section>




    </main>
  );
}
