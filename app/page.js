import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from '../public/myimg.png';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <main className='bg-white p-8   '>
      <nav className='py-4 flex justify-between'>
          <h1 className='text-xl'></h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'></BsFillMoonStarsFill>
            </li>
            <li>
              <a
                className='bg-gradient-to-r from-cyan-300 to-blue-700 text-white font-poppins font-bold px-4 py-2 rounded-md ml-8'
                href='#'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav >
        <section className='min-h-screen flex flex-col justify-center p-2.5'>
          <div className=' '>
            {/* Profile Picture */}
            

            {/* Name and Title */}
            <div className=''>
              <div className='text-4xl sm:text-5xl py-4 text-gray-300  font-black font-playfair'>Hello I am</div>
              <h1 className='text-7xl md:text-9xl xs:text-8xl py-4 text-black font-black font-playfair'>Rishabh Kamath</h1>
              
            </div>

            {/* Social Icons */}
            <div className='text-5xl flex md:justify-start sm:text-4xl  sm:text-2xl md:text-7xl p-8 gap-14 text-gray-600'>
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
         
          </div>
        </section>




    </main>
  );
}
