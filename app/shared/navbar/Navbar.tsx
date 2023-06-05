'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { publicRoutes } from '@/app/models';

function Navbar() {
  const router = useRouter();

  return (
    <nav className='bg-slate-50 z-10 flex justify-between items-center px-8 py-2 fixed top-0 w-full'>
      <div className='flex items-center gap-2'>
        <picture>
          <img
            src='../../../assets/logo.png'
            alt='logo'
            width={50}
            height={50}
            className='cursor-pointer'
            onClick={() => router.push(publicRoutes.HOME)}
          />
        </picture>
        <ul className=' flex gap-5 text-xs'>
          <Link href={publicRoutes.CREATION} className=' hover:text-blue-500 ease-in duration-300'>
            Creación
          </Link>
          <span className='text-gray-400'>|</span>
          <Link href={publicRoutes.PRICING} className=' hover:text-blue-500 ease-in duration-300'>
            Precios
          </Link>
          <Link href={publicRoutes.SUPPORT} className='hover:text-blue-500 ease-in duration-300'>
            Centro de ayuda
          </Link>
          <Link href={publicRoutes.CONTACT} className='hover:text-blue-500 ease-in duration-300'>
            Contacto
          </Link>
        </ul>
      </div>
      <button
        className='text-xs py-2 px-7 border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-slate-50  rounded-full ease-in duration-300'
        onClick={() => router.push(publicRoutes.SIGNIN)}
      >
        Entrar
      </button>
    </nav>
  );
}
export default Navbar;
