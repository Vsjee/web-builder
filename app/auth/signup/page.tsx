'use client';
import { publicRoutes } from '@/app/models';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid place-content-center h-full relative'>
      <div className='flex flex-col gap-5 py-12 px-6 text-center rounded-lg text-slate-50 bg-white/10 backdrop-blur'>
        <Image
          src='../assets/icons/arrow-left-white.svg'
          alt='go back'
          width={35}
          height={35}
          className='rotate-180 cursor-pointer absolute top-4 left-4 p-2 rounded-full hover:bg-gray-50/10'
          onClick={() => router.push(publicRoutes.HOME)}
        />
        <h1 className=' text-2xl font-bold'>Registrate</h1>
        <p>
          Ya estas registrado?{' '}
          <Link
            href={publicRoutes.SIGNIN}
            className='text-blue-500 hover:text-blue-200 ease-in duration-300'
          >
            Inicia sessión
          </Link>
        </p>
        <input
          {...register('name', { required: true })}
          type='text'
          className='p-2 rounded bg-gray-200 border border-gray-300 text-black'
          placeholder='Tu nombre'
          required
        />
        {errors.name && <span>Nombre invalido</span>}

        <input
          {...register('email', { required: true })}
          type='email'
          className='p-2 rounded bg-gray-200 border border-gray-300 text-black'
          placeholder='Tu correo'
          required
        />
        {errors.email && <span>Correo invalido</span>}

        <input
          {...register('password', { required: true })}
          type='password'
          className='p-2 rounded bg-gray-200 border border-gray-300 text-black'
          placeholder='Tu Contraseña'
          required
        />
        {errors.password && <span>Contraseña invalida</span>}

        <input
          {...register('confirmPassword', { required: true })}
          type='password'
          className='p-2 rounded bg-gray-200 border border-gray-300 text-black'
          placeholder='Confirmar contraseña'
          required
        />
        {errors.confirmPassword && <span>Confirmar contraseña invalido</span>}

        <input
          type='submit'
          value='Registrate'
          className='p-2 rounded-full cursor-pointer w-40 place-self-center  bg-blue-500 text-slate-50 hover:bg-blue-200 hover:text-blue-500 hover:border-blue-500 ease-in duration-300'
        />
      </div>
    </form>
  );
}
