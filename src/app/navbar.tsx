import Image from 'next/image';
import style from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Image src="/image.png" alt="Logo" width={70} height={70} />
        </div>
        <ul>
          <a href="/">Home</a>
          <a href="/about">About us</a>

          </ul>
      </nav>
    </header>
  );
}
