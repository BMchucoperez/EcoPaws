import { useEffect, useState } from "react";
import style from "./Nav.module.css";
import React from "react";
import { Link } from "react-router-dom";

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
            <Link>
                <img className={style.carrito} src="/images/carrito2.png" alt="carrito" />
            </Link>
        </div>
    );
};

export default Navbar;