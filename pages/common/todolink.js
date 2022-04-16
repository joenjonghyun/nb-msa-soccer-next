import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function Todo(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/todo/todo-list'>Todolist</Link> </li>
      </ul>
    </nav>
    );
};