import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='flex'>
      <Link href={'/'}>
        <Image src={`/images/logo.png`} alt='logo' width={230} height={64} />
      </Link>
    </div>
  );
};
export default Logo;
