import style from "./Products.module.css";

const Products = () => {
    return(
        <div className={style.productos}>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama1.jpeg" alt="cama1" />
                <h3>Cama ecológica hipoalergénica talla S/L</h3>
                <h4>S/29.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama2.jpg" alt="cama2" />
                <h3> Cama ecológica Flowers talla M</h3>
                <h4>S/19.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama3.jpg" alt="cama3" />
                <h3> Cama ecológica Dixie talla S/M</h3>
                <h4>S/17.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama4.jpg" alt="cama4" />
                <h3> Cama ecológica Purple talla S/M</h3>
                <h4>S/21.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama5.jpg" alt="cama5" />
                <h3> Cama ecológica Pink talla S/M</h3>
                <h4>S/20.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama6.jpg" alt="cama6" />
                <h3> Cama ecológica Yellow talla S/M</h3>
                <h4>S/19.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama7.jpeg" alt="cama7" />
                <h3> Cama ecológica Multicolor talla S/M</h3>
                <h4>S/22.90</h4>
            </div>
            <div className={style.item}>
                <img className={style.imagen} src="./images/cama8.jpg" alt="cama8" />
                <h3> Cama ecológica White talla S/M</h3>
                <h4>S/18.90</h4>
            </div>
        </div>
    );
};

export default Products;