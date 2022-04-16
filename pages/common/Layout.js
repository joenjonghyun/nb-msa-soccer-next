import style from "common/style/Layout.module.css";
import Nav from "common/Nav";
import Footer from "common/Footer";
export default function Layout({ children }){
  return (<div className={style.container}>
        <Nav/>
        <main className={style.main}>{children}</main>
        <Footer/>
      </div>
  );
}