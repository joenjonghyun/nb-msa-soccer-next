import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function Board(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/board/board-list'>BoardList</Link> </li>
        <li className={style.li}> <Link href='/board/board-form'>BoardForm</Link> </li>
        <li className={style.li}> <Link href='/board/team-form'>TeamForm</Link> </li>
      </ul>
    </nav>
    );
};