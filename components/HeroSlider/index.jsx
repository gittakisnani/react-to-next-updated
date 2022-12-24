import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import dynamic from 'next/dynamic';


const Slider = dynamic(() => import("react-slick"))


class HeroSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <Slider className={this.props.className} {...settings}>
                {this.props.sliders.map((slider, i) => (
                    <div
                        key={i}
                        className={`slideWrapper ${slider.images}`}
                    >
                        <div

                            className="sliderContent">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-8">
                                        <p>{slider.text}</p>
                                        <h2><span>{slider.title}</span> <span>{slider.subTitle}</span></h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-8 logo_slider">
                                        <Image width={400} height={100} src="https://api.studiolegalemanzi.eu/uploads/STUDIO_LEGALE_MANZI_E_ASSOCIATI_921_200_px_2_8ee13c0afc.png" alt="logo studio legale manzi" />

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                ))}
            </Slider>
        )
    }
}
export default HeroSlider