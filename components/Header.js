import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo.jpg'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <Image
        src={Logo}
        alt="Logo Image"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
        <p className="text-2xl dark:text-white text-center">
          <Link href="/">
            <a>{name}</a>
          </Link>
        </p>
    </header>
  );
}
