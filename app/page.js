import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from '../public/myimg.png';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className=''>
        <nav className='py-10 flex justify-between'>
          <h1 className='text-xl'></h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill lassName='cursor-pointer text-2xl'></BsFillMoonStarsFill>
            </li>
            <li>
              <a
                className='bg-gradient-to-r from-cyan-300 to-blue-700 text-white font-poppins px-4 py-2 rounded-md ml-8'
                href='#'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav >
        <div className=' p-10 flex flex-col items-center justify-center'>
          <div className='flex mx-auto p-2 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full w-60 h-60 relative overflow-hidden mt-30 md:h-90 md:w-90'>
            <Image src={deved}alt="Rishabh Kamath's profile picture" layout='fill' objectFit='cover' />
          </div>
          <div className='text-center p-5 font-poppins'>
            <h2 className='text-5xl py-2 text-teal-400 font-bold'> Rishabh Kamath</h2>
            <h3 className='sm:text-3md py-2 text-gray-600'>
              Full Stack Developer and Data Scientist
            </h3>
          </div>
          <div className='flex text-4xl py-2 justify-center gap-8 text-gray-800'>
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillGithub></AiFillGithub>
          </div>
        </div>
      </section>
      <section className='font-poppins mx-auto'>
        <div className='p-10 flex flex-col'>
          <div className='grid gap-6 grid-flow-row-dense grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center'>
            <div className='text-5xl font-bold'>About Me</div>
            <div className='col-span-1 text-sm text-justifyAll py-4 leading-8 text-gray-500'>Hi, I'm Rishabh, a Full Stack Developer and Data Scientist. With expertise in frontend and backend technologies, I craft seamless user experiences and leverage data to drive insights. Passionate about continuous learning, I thrive on solving complex problems and staying at the cutting edge of technology.
          </div>
          </div>
        </div>
        <div className='flex justify-center  items-center gap-10'>
        <div className='grid gap-8  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center '>
                <div className='col p-10 text-center bg-cyan-200 rounded-xl relative '>
                  <div className='font-regular text-md'>Experience</div>
                  <div className='text-3xl py-2 font-bold'>1+ years</div>
                </div>
              <div className='col p-10 bg-yellow-400  rounded-xl relative'>
                <div className='font-regular text-md mb-2'>Education</div>
                <div className='text-sm py-1'>BCA</div>
                <div className='text-sm py-1'>MSc in CA</div>
              </div>
           </div> 
            </div>
      </section>
    </main>
  );
}
