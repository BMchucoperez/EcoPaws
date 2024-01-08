import { Carousel } from 'react-bootstrap';
import style from "./Home.module.css";
import Info from '../Information/Info';

const Home = () => {
    return(
        <div className={style.container}>
            <h1>EcoPaws</h1>
            <Carousel interval={5000} className={style.carouselComponent}>
            <Carousel.Item>
                    <img
                        className={style.carrusel}
                        src="/images/imagen2.png"
                        alt="Primera imagen"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className={style.carrusel}
                        src="/images/imagen3.jpeg"
                        alt="Segunda imagen"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className={style.carrusel}
                        src="/images/imagen4.jpeg"
                        alt="Tercera imagen"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className={style.carrusel}
                        src="/images/imagen5.jpeg"
                        alt="Cuarta imagen"
                    />
                </Carousel.Item>
            </Carousel>

            <h1>PRODUCTOS</h1>

            <br />

            <img  className={style.aviso} src="/images/imagen1.png" alt="aviso" />

            <br />

            <Info/>

        </div>
    );
};

export default Home;
