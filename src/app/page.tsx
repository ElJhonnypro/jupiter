import Image from "next/image";
import style from './home.module.css';
export default function Home() {
  return (
    <div className={style.App}>
      <div className={"section "+style.section}>
        <div>
        <h1 className={"title "+style.title}>Jupiter</h1>
        <p className="subtitle">
          Your next discord bot.
        </p>
        </div>
        <p>Jupiter is a bot that help you to play with your community, <br /> easy admin, easy roles, easy channels</p>
      </div>
    </div>
  );
}
