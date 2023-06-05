'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();

  return (
    <nav className='bg-slate-50 flex justify-between items-center px-8 py-2'>
      <div className='flex items-center gap-2'>
        <picture>
          <img
            src='../../../assets/logo.png'
            alt='logo'
            width={50}
            height={50}
            className='cursor-pointer'
            onClick={() => router.push('/')}
          />
        </picture>
        <ul className=' flex gap-5 text-xs'>
          <Link href='' className=' hover:text-blue-500 ease-in duration-300'>
            Creación
          </Link>
          <span className='text-gray-300'>|</span>
          <Link href='' className=' hover:text-blue-500 ease-in duration-300'>
            Precios
          </Link>
          <Link href='' className='hover:text-blue-500 ease-in duration-300'>
            Centro de ayuda
          </Link>
        </ul>
      </div>
      <button
        className='text-xs py-1 px-6 border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-slate-50  rounded-full ease-in duration-300'
        onClick={() => router.push('/pages/public/signin')}
      >
        Entrar
      </button>
    </nav>
  );
}
export default Navbar;
