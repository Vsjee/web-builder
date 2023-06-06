import Image from 'next/image';
import Link from 'next/link';

interface Props {
  route: string;
  text: string;
  width: 10 | 24 | 40;
  textColor: 'black' | 'white';
  showArrow: boolean;
}

function CustomLink({ route, text, textColor, width, showArrow }: Props) {
  const style = `font-bold flex justify-center place-items-center justify-self-center mt-8 w-${width.toString()} p-1 text-${textColor} border-b-2 border-${textColor} hover:text-blue-300 hover:border-blue-300 ease-in duration-300`;
  let arrowPath = '../../../assets/icons/';

  if (showArrow) {
    if (textColor === 'black') {
      arrowPath += 'arrow-left-black.svg';
    } else {
      arrowPath += 'arrow-left-white.svg';
    }
  }

  return (
    <Link href={route} className={style}>
      {text}
      {showArrow === true ? (
        <Image src={arrowPath} alt='left arrow' className='animate-pulse' width={20} height={20} />
      ) : (
        <></>
      )}
    </Link>
  );
}
export default CustomLink;
