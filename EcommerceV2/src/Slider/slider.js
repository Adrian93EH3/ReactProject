import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const photos = [
    {
        name: "slide1",
        url: "Cars/welcome.jpg"
    },
    {
        name: "slide2",
        url: "Cars/gtr1big.jpg"  
    },
    {
        name: "slide3",
        url: "Cars/gtr2big.jpg"
    },
    {
        name: "slide4",
        url: "Cars/bmwbig.jpg"
    }
]


class SlideShow extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            className: "slides"
        }
        return (
            <div>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div>
                                <img height="500px" width="100%" src={photo.url}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default SlideShow;