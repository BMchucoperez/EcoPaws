import style from "./Info.module.css";
import React from "react";

const Info = () => {
    return(
        <div className={style.container}>
            <div className={style.subcontainer}>
                <h4>EcoPaws</h4>
                <img className={style.logo} src="/images/logo2.png" alt="logo" />
            </div>
            <div className={style.subcontainer2}>
                <h4>Atención al Cliente</h4>
                <span>🔹 Términos y Condiciones</span>
                <span>🔹 Política de ventas</span>
                <span>🔹 Políticas de Privacidad</span>
                <span>🔹 Formas de Pago</span>
                <span>🔹 Condiciones de Entrega</span>
                <span>🔹 Libro de Reclamaciones</span>
            </div>
            <div className={style.subcontainer}>
                <h4>Formas de Pago</h4>
                <img className={style.logo2} src="/images/formas_pago.png" alt="pago" />
            </div>
            <div className={style.subcontainer2}>
                <h4>Información de Contacto</h4>
                
                    
                        <img className={style.logo3} src="/images/wsp.png" alt="wsp" />
                    
                
                <br />
                <span>Correo Electrónico:</span>
                <span>liliana.cayo@outlook.com</span>
            </div>
        </div>
    );
};

export default Info;