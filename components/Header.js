import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src="components/playstore.png" alt="Logo Image" className="text-2xl dark:text-white text-center" />
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
        <p className="text-2xl dark:text-white text-center">
          <Link href="/">
            <a>{name}</a>
          </Link>
        </p>
    </header>
  );
}
