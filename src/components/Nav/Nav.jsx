import { useEffect, useState } from "react";
import style from "./Nav.module.css";

const Navbar = () =>{

const [visible, setVisible] = useState(true);
const [prevScrollPos, setPrevScrollPos] = useState(0);

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos, visible]);

const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);

    setPrevScrollPos(currentScrollPos);
};

const navbarClass = visible ? style.navBar : `${style.navBar} ${style.hiddenNavBar}`;

    return(
        <div className={navbarClass}>
            <button className={style.btn}>EcoPaws</button>
            <div>
                <input type="text" placeholder="Buscar..." />
                <button className={style.btn}>Buscar</button>
            </div>
            <button className={style.btn}>Carrito</button>
        </div>
    );
};

export default Navbar;