import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo.jpg'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
       <Link href="/">
      <Image
        className="avatar"
        src={Logo}
        alt="Logo Image"
        width={100} 
        height={100} 
        priority
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      </Link>
        <p className="text-2xl dark:text-white text-center">
          <Link href="/">
            <a>{name}</a>
          </Link>
        </p>
    </header>
  );
}
