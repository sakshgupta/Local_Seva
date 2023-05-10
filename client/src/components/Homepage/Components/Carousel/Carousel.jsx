import React from "react";
import "./Carousel.css";
import carousel_1 from "./images/carousel_1.png";
import carousel_2 from "./images/carousel_2.png";
import carousel_3 from "./images/carousel_3.png";
import carousel_4 from "./images/carousel_4.png";

function Carousel() {
    const images = [carousel_1, carousel_2, carousel_3, carousel_4];

    return (
        <>
            <div className="carousel_main_container">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        {images.map((image, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleIndicators"
                                data-slide-to={index}
                                className={index === 0 ? "active" : ""}
                            ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${
                                    index === 0 ? "active" : ""
                                }`}
                            >
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only"></span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Carousel;
