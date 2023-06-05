import Image from 'next/image';
import Link from 'next/link';
import { publicRoutes } from './models';
import desing from '../public/assets/desing.png';
import { onlinePresence } from './models/home.model';

export default function Home() {
  return (
    <main className='md:mt-12 mt-20 py-8'>
      {/* welcome section */}
      <section className='grid place-content-center text-center gap-2 relative px-7'>
        <h1 className='md:text-7xl md:w-10 text-5xl font-bold ease-in duration-500'>
          Crea tu página web profesional
        </h1>
        <Image
          src='../assets/web-devices.svg'
          alt='illustrarion'
          className='md:absolute xl:right-40 lg:right-20 md:right-5 top-0 md:w-96 md:h-96 w-full ease-in duration-500'
          width={100}
          height={100}
        />
        <p className='mt-5'>
          Descubre la plataforma que te brinda la libertad de crear, diseñar y desarrollar tu
          presencia online exactamente como lo imaginaste.
        </p>
        <button className='flex justify-center place-items-center justify-self-center mt-8 bg-blue-500 text-slate-50 w-40 py-3 px-6 rounded-full hover:bg-blue-400 ease-in duration-300'>
          Empezar
          <Image
            src='../assets/icons/arrow-left-white.svg'
            alt='left arrow'
            className='animate-pulse'
            width={20}
            height={20}
          />
        </button>
        <span className='text-xs'>Prueba Cube. No se requerirá tarjeta de crédito.</span>
      </section>

      {/* info section */}
      <section className='grid md:grid-cols-2 grid-cols-1 gap-5 md:p-20 py-16 px-8 mt-20 place-content-center bg-blue-800 text-slate-50'>
        <div>
          <h1 className='text-4xl font-bold'>La libertad de crear la página web que quieras</h1>
        </div>
        <div>
          <p>
            Diseña y crea tu propia página web con calidad profesional. Ya sea que estés
            promocionando tu negocio, mostrando tu trabajo, abriendo tu tienda online o comenzando
            un blog, puedes hacerlo todo con el creador de páginas web de Cube.
          </p>
          <Link
            href={publicRoutes.SIGNIN}
            className='flex justify-center place-items-center justify-self-center mt-8 w-24 p-1  border-b-2 hover:text-blue-300 hover:border-blue-300 ease-in duration-300'
          >
            Empezar
            <Image
              src='../assets/icons/arrow-left-white.svg'
              alt='left arrow'
              className='animate-pulse'
              width={20}
              height={20}
            />
          </Link>
        </div>
      </section>

      {/* online presence section */}
      <section className='grid md:grid-cols-2 grid-cols-1'>
        <article className='bg-black text-slate-50 md:p-20 py-20 px-8'>
          <article>
            <h1 className='text-4xl font-bold'>Desarrolla tu presencia online</h1>
            <p className='text-sm'>Para crear una página web propia, sigue estos pasos:</p>
          </article>
          <article className='grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 sm:gap-5 gap-10 mt-16 mb-10'>
            {onlinePresence.map((item, i) => (
              <div className='border-t pt-5' key={i}>
                <h3 className='font-bold'>{item.title}</h3>
                <p className='text-xs'>{item.content}</p>
              </div>
            ))}
          </article>
          <Link
            href={publicRoutes.SIGNIN}
            className='flex justify-center place-items-center justify-self-center mt-8 w-44 p-1  border-b-2 hover:text-blue-500 hover:border-blue-500 ease-in duration-300'
          >
            Comienza ahora
            <Image
              src='../assets/icons/arrow-left-white.svg'
              alt='left arrow'
              className='animate-pulse'
              width={20}
              height={20}
            />
          </Link>
        </article>
        <article className='grid place-content-center'>
          <Image
            src={desing}
            alt='desing img'
            width={1000}
            height={100}
            className='w-full h-full'
          />
        </article>
      </section>
    </main>
  );
}
