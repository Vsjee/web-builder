'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { publicRoutes } from '@/app/models';
import { FAQ, examples, onlinePresence, tutorial } from '@/app/models/home.model';
import CustomLink from '@/app/ui/Link/CustomLink';
import desing from '../../../public/assets/desing.png';

function Home() {
  const router = useRouter();

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
        <button
          className='flex justify-center place-items-center justify-self-center mt-8 bg-blue-500 text-slate-50 w-40 py-3 px-6 rounded-full hover:bg-blue-400 ease-in duration-300'
          onClick={() => router.push(publicRoutes.SIGNUP)}
        >
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
          <CustomLink
            route={publicRoutes.SIGNUP}
            text='Empezar'
            textColor='white'
            width={24}
            showArrow={true}
          />
        </div>
      </section>

      {/* online presence section */}
      <section className='grid md:grid-cols-2 grid-cols-1 relative'>
        <article className='bg-black text-slate-50 md:p-20 md:py-20 pt-20 pb-52 px-8'>
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
          <CustomLink
            route={publicRoutes.SIGNUP}
            text='Empieza ahora'
            textColor='white'
            width={40}
            showArrow={true}
          />
        </article>
        <article className='grid place-content-center md:relative md:top-0 absolute sm:-bottom-56 -bottom-28 left-0 right-0 ease-in duration-500'>
          <Image
            src={desing}
            alt='desing img'
            width={1000}
            height={100}
            className='sm:w-full sm:h-full w-96 h-72'
          />
        </article>
      </section>

      {/* control section */}
      <section className='grid sm:grid-cols-2 grid-cols-1 my-40 md:pt-20 sm:pt-64 pt-32 md:px-40 px-8'>
        <article className='md:order-first order-last'>
          <Image
            src='../assets/designer.svg'
            alt='designer'
            width={100}
            height={100}
            className='w-full h-96 md:mt-0 mt-5'
          />
        </article>
        <article className='flex flex-col gap-5'>
          <h1 className='text-4xl font-bold'>Editor de Cube Libertad de diseño total</h1>
          <p>
            Empieza desde cero puedes personalizar completamente con la opción de arrastrar y
            soltar. Haz que tu sitio cobre vida con fondos de video, efectos de desplazamiento y
            animación. Con el editor de Cube, puedes crear tu propia página web profesional
            exactamente como la imaginas
          </p>
          <CustomLink
            route={publicRoutes.SIGNUP}
            text='Empieza ahora'
            textColor='black'
            width={40}
            showArrow={true}
          />
        </article>
      </section>

      {/* examples section */}
      <section className='flex flex-col gap-10 px-8 mb-40'>
        <h1 className='text-4xl self-center font-bold'>Utilidades</h1>
        <section className='grid place-content-center sm:gap-5 gap-0 md:grid-cols-2 grid-cols-1 lg:px-40 md:px-20 sm:px-14 px-0 ease-linear duration-500'>
          {examples.map((item, i) => {
            if (i % 2 !== 0) {
              return (
                <article key={i} className='flex flex-col md:mt-20 md:px-5'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className='self-center md:mb-3 w-80 h-80'
                    width={100}
                    height={100}
                  />
                  <h1 className='font-bold self-start'>{item.title}</h1>
                  <p className='text-sm'>{item.content}</p>
                </article>
              );
            } else {
              return (
                <article key={i} className='flex flex-col md:px-5'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className='self-center md:mb-3 w-80 h-80'
                    width={100}
                    height={100}
                  />
                  <h1 className='font-bold self-start'>{item.title}</h1>
                  <p className='text-sm'>{item.content}</p>
                </article>
              );
            }
          })}
        </section>
      </section>

      {/* how to create a web page */}
      <section className='flex flex-col justify-center items-center md:py-20 md:px-40 py-14 px-8 mt-20 bg-blue-800 text-slate-50'>
        <h1 className='text-4xl font-bold'>Cómo crear una página web gratis</h1>
        <span>Sigue estos 6 sencillos pasos para hacer una página web hoy mismo.</span>
        <article className='mt-10'>
          <ul className='list-decimal'>
            {tutorial.map((item, i) => (
              <li key={i} className='text-sm'>
                <span className='font-bold'>{item.strongText}</span> {item.text}
              </li>
            ))}
          </ul>
        </article>
        <CustomLink
          route={publicRoutes.SIGNUP}
          text='Empieza ahora'
          textColor='white'
          width={40}
          showArrow={true}
        />
      </section>

      {/* why why are the best option section */}
      <section className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:px-40 md:py-40 md:px-38 sm:px-20 px-8 py-32'>
        <article>
          <h1 className='md:text-4xl text-2xl font-bold'>
            Por qué el creador de páginas web Cube es la mejor opción para ti
          </h1>
        </article>
        <article>
          <p>
            Con el 85% de los consumidores buscando online antes de hacer una compra, nunca ha sido
            más importante que tu negocio tenga una página web. Crea un sitio web gratuito y
            profesional con Cube. Personalizala a tu gusto.
            <br />
            <br />
            Nuestro editor es faci e intuitivo no deberas tener previos conocimientos programación
            para realizar tu pagina. Que esperas para unirte a esta gran comunidad de personas que
            decicieron hacer crecer su negocio y alcanze.
          </p>
          <CustomLink
            route={publicRoutes.SIGNUP}
            text='Empieza ahora'
            textColor='black'
            width={40}
            showArrow={true}
          />
        </article>
      </section>

      {/* creativity section */}
      <section className='object-cover bg-cover relative'>
        <Image
          src='https://images.unsplash.com/photo-1567095751004-aa51a2690368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt='abstract'
          className='w-full object-cover bg-no-repeat h-96 bg-cover brightness-90'
          height={2000}
          width={2000}
          priority
        />
        <h1 className='text-5xl text-center w-full text-slate-50 font-bold absolute right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Despierta tu creatividad
        </h1>
      </section>

      {/* FAQ section */}
      <section className='my-40 lg:mx-40 md:mx-28 sm:mx-20 mx-8 ease-in duration-300'>
        <h1 className='text-4xl font-bold mb-10'>FAQ</h1>
        {FAQ.map((item, i) => (
          <article
            key={i}
            className='grid md:grid-cols-2 grid-cols-1 gap-5 sm:py-12 py-8 border-t border-black'
          >
            <div className='font-bold'>
              <span>{i + 1}. </span>
              <span>{item.question}</span>
            </div>
            <div>
              <p>{item.answer}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
export default Home;
