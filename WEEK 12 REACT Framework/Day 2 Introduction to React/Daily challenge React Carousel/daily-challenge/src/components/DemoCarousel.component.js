import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./DemoCarousel.component.css";

export function DemoCarousel(){

return (
    <div className="container">

<Carousel
    autoPlay={true}
    interval={500}
    infiniteLoop={true}
>
               <div>
                    <img src="Hongkong.jpg" alt="Hong Kong Skyline" />
                    <p className="legend">Hongkong</p>
                </div>
                
                <div>
                    <img src="Japan.webp" alt="Japan Skyline" />
                    <p className="legend">Japan</p>
                </div>

                <div>
                    <img src="Macao.webp" alt="Macao Skyline" />
                    <p className="legend">Macao</p>
                </div>

                <div>
                    <img src="LasVegas.webp" alt="Las Vegas" />
                    <p className="legend">Las Vegas</p>
                </div>

                </Carousel>
</div>
);
}
