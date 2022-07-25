import Link from 'next/link';


export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
           <picture>
            <source srcSet="https://github.com/AbdulelahTech/Almsbaha_Alragameah_website/blob/main/Logo.jpg" type="image/webp" />
            <img src="https://github.com/AbdulelahTech/Almsbaha_Alragameah_website/blob/main/Logo.jpg" alt="Landscape picture" />
           </picture>
        <p className="text-2xl dark:text-white text-center">
          <Link href="/">
            <a>{name}</a>
          </Link>
        </p>
    </header>
  );
}
