import Image from 'next/image';
import style from './about.module.css';

export default function Navbar() {
  return (
    <div className="section">
        <div>
        <h1 className="title">Jupiter</h1>
        <img className={style.imagejupiter} src="/image.png" alt="Logo" width={100} height={100} />
        <p className={style.title}>
          ¿Who are the owner of Jupiter?
          <br />
          <p className={style.subtitle}>
          if you think that this is a enterprise, <br />
          no, i am only a programmer and a friend <br />
          </p>
        </p>
        <br /><br />
        <p className={style.title}>
          Term and uses
          <br />
        <p className={style.subtitle}>
        you can use this bot how you wanna <br />
        but you need to know that IS FREE USE <br />
        dont need to pay me anything, but if <br />
        you wanna donate any money you cant <br />
        because i dont have paypal but i will do it <br />
        </p>
        </p>
      </div>
</div>
  );
}
