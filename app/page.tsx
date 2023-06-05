import Image from 'next/image';

export default function Home() {
  return (
    <main className='md:mt-12 mt-20 py-8 px-3'>
      <section className='grid place-content-center text-center  gap-2 relative'>
        <h1 className='md:text-7xl md:w-10 text-5xl font-bold ease-in duration-500'>
          Crea tu página web profesional
        </h1>
        <Image
          src='../assets/web-devices.svg'
          alt=''
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
    </main>
  );
}
