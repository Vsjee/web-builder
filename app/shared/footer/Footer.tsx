import Link from 'next/link';

function Footer() {
  return (
    <footer className='flex justify-between md:mx-40 sm:mx-20 mx-8 py-2 border-t border-black'>
      <span className='text-xs'>Landing page desing by David Hernandez</span>
      <div>
        <Link href='https://github.com/Vsjee' target='__blank'>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAdtJREFUOE9tVNtxg0AQkyox7gRXElwJuBLHlZhUAqlEmX3dwTh8wHC3T620JOIRCUjITxzapZpF/pqde4AgFD9uHJZpT9UlAZqRJxgAjAB3UGtkbv5uVmErLbwks5KHGATOgKZ0q8+eVncQa9p6sAhZ3XSvBeRsLVfVkf3jeQBYEgv/VD1lOYF8QtoBWnuRMbFr+BA7BLv/BnAv54YZZa1hSyjvglYQE4WLiF8AF8gSyCqyZFvWa8EsaEHvs3jKMIrwN4jrv80lPg0kwXC8+rg6NbBFZm/tatkT7O5eBwHBM6bsaN4IrH2avYwPHJxq8eqccPA154G3SgZLR4HvBPshmWEbZiN0TDfJDUyK6gyjB4SlqDEKeOeYDXjD7FDJmRZJgUXE3HgnflebA4EtybfnuNcml5PGamzcTB0VjEQFM8bhbe362MPiFaQ80tpzGz2eIMaugE7+IvHoAY0z4u8B3OOQDKMmMcNbct550sS/acpA/FKw2sZv496blIgFMs1aftdD4ptU79CWWLkI+rJAAH7o7DZXf/cJxv3tiMKxhabZaMW3hjnYhgiKEROEGcSLsqTlErU3oZdID8tuILXb8jiQZACx9y1ypk/IKYD82KynMGeqdVX3TYU/le7gHb0cC0oAAAAASUVORK5CYII='
            alt='github'
            width={20}
            height={20}
          />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
