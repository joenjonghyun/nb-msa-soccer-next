
import Link from "next/link";
import style from "common/style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.li}> <Link href='/'>Home</Link> </li>
        <li className={style.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={style.li}> <Link href='/common/basiclink'>BasicLink</Link> </li>
        <li className={style.li}> <Link href='/common/game-link'>GameLink</Link> </li>
        <li className={style.li}> <Link href='/todo/todo-list'>Todo</Link> </li>
        <li className={style.li}> <Link href='/common/user-link'>UserLink</Link> </li>
        <li className={style.li}> <Link href='/common/board-link'>BoardLink</Link> </li>
      </ul>
    </nav>
  );
};