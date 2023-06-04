'use client';
import { useRouter } from 'next/navigation';
import './navbar.css';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();

  return (
    <nav className='nav'>
      <div className='nav__links'>
        <picture className='nav__pic'>
          <img
            src='../../../assets/logo.png'
            alt='logo'
            className='pic__img'
            onClick={() => router.push('/')}
          />
        </picture>
        <ul className='links__list'>
          <Link href='' className='list__item'>
            Creación
          </Link>
          <span className='separator'>|</span>
          <Link href='' className='list__item'>
            Precios
          </Link>
          <Link href='' className='list__item'>
            Centro de ayuda
          </Link>
        </ul>
      </div>
      <button className='nav__login' onClick={() => router.push('/pages/public/signin')}>
        Entrar
      </button>
    </nav>
  );
}
export default Navbar;
