import style from "./Info.module.css";

const Info = () => {
    return(
        <div className={style.container}>
            <div className={style.subcontainer}>
                <h4>EcoPaws</h4>
            </div>
            <div className={style.subcontainer}>
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
            </div>
            <div className={style.subcontainer}>
                <h4>Información de Contacto</h4>
            </div>
        </div>
    );
};

export default Info;