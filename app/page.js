import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from '../public/myimg.png';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <main className='bg-white p-8   '>
      <nav className='py-4 flex justify-between'>
          <h1 className='text-xl'>YOOOOOOO</h1>
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
      <section className='  min-h-screen flex flex-col justify-center text-center items-center  p-2.5 '>
        <div className=' '>
          {/* <div className='flex mx-auto p-4 bg-gradient-to-r from-teal-500 to-blue-300 rounded-xl w-60 h-60 relative overflow-hidden mt-30 md:h-90 md:w-90'>
            <Image src={deved}alt="Rishabh Kamath's profile picture" layout='fill' objectFit='cover' />
          </div> */}
          <div className=''>
            <h2 className='text-7xl py-4 text-teal-500 font-black font-playfair'> Rishabh Kamath</h2>
            <h3 className='text-2xl font-playfair py-2 font-medium text-gray-500'>
              Full Stack Developer and Data Scientist
            </h3>
          </div>
          <div className='flex justify-center text-4xl py-8  gap-8 text-gray-600'>
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillGithub></AiFillGithub>
          </div>
        </div>
      </section>
      <section className='min-h-screen flex flex-col p-2.5'>
  <div className='flex flex-col md:flex-row'>
    <div className='w-full md:w-1/2'>
      <div className='m-4 p-4 border-2 border-teal-500'>
        <p className='text-4xl font-bold font-playfair p-4'>About Me</p>
        <div className='p-2 m-2 text-md relative font-pop text-justify text-gray-500'>
          Proficient in both full-stack development and data science, I specialize in crafting elegant code solutions to overcome complex challenges. My expertise spans the entire development spectrum, from designing robust backends to implementing intuitive user interfaces. Committed to delivering excellence, I approach each project with a passion for efficiency and user-centric design. In my coding endeavors, a cup of coffee is my constant companion, inspiring creativity as I strive to push technological boundaries.
        </div>
      </div>
    </div>
    <div className='w-full md:w-1/2'>
      <div className='font-playfair m-4 p-4 border-2 border-teal-500'>
        <p className='text-4xl font-bold p-4'>About Me</p>
        <div className='p-4 m-6 text-xl font-poppins text-medium text-justify text-gray-600'>
          {/* Add your content for the second column here */}
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
