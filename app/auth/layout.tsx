'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { publicRoutes } from '../models';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <section className='grid md:grid-cols-2 grid-cols-1 w-screen h-screen overflow-hidden bg-black'>
      <div className='relative md:inline hidden'>
        <Image
          src='https://images.unsplash.com/photo-1567095751004-aa51a2690368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt='abstract'
          width={1000}
          height={1000}
          className='w-full h-full bg-cover z-0'
        />
        <h1 className='lg:text-6xl sm:text-5xl text-center w-full px-5 text-slate-50 font-bold z-10 absolute right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          {path === publicRoutes.SIGNIN ? (
            <>Nos alegra verte otra vez!</>
          ) : (
            <>
              Bienvenido a Cube!
              <br />
              <span className='text-lg'>elegiste la mejor opción del mercado</span>
            </>
          )}
        </h1>
      </div>
      <div>{children}</div>
    </section>
  );
}
