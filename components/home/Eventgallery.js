import React from 'react'
import "./Eventgallery.css"
import "../Testimonials/Testimonial.css"
import { useState, useEffect } from 'react';
import {  Autoplay, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
const Frame = (props) => {
    return (
        <div className="Frame">
            <div className="event-image">
                <a href={props.href}>
                    <img src={props.img} className="img-fluid" alt="thumbnail" />
                </a>
            </div>
        </div>
    )
}
const data = [
    {
        href: "https://code8.ggeeks.me",
        img: "https://github.com/KapadiaShubham/code8-media/blob/master/home/img/Event1.jpeg?raw=true"
    },
    {
        href: "https://code8.ggeeks.me",
        img: "/images/Event2.jpeg"
    },
    {
        href: "https://code8.ggeeks.me",
        img: "/images/Event3.jpeg"
    },
    {
        href: "https://code8.ggeeks.me",
        img: "/images/Event4.jpeg"
    },
    {
        href: "https://code8.ggeeks.me",
        img: "/images/Event5.jpeg"
    },
    {
        href: "https://code8.ggeeks.me",
        img: "/images/Event6.jpeg"
    },
    {
        href: "https://code8.ggeeks.me",
        img: "/images/Event7.jpeg"
    }
]
const Eventgallery = () => {
    const [matches1500, setMatches1500] = useState(
        window.matchMedia("(max-width: 1500px)").matches
    )
    const [matches1300, setMatches1300] = useState(
        window.matchMedia("(max-width: 1300px)").matches
    )
    const [matches900, setMatches900] = useState(
        window.matchMedia("(max-width: 900px)").matches
    )
    const [matches550, setMatches550] = useState(
        window.matchMedia("(max-width: 550px)").matches
    )
    useEffect(() => {
        window
        .matchMedia("(max-width: 1500px)")
        .addEventListener('change', e => setMatches1500(e.matches));
        window
        .matchMedia("(max-width: 1300px)")
        .addEventListener('change', e => setMatches1300(e.matches));
        window
            .matchMedia("(max-width: 900px) and (min-width: 550px)")
            .addEventListener('change', e => setMatches900(e.matches));
        window
            .matchMedia("(max-width: 550px)")
            .addEventListener('change', e => setMatches550(e.matches));
    }, []);
    useEffect(() => {
        console.log(matches550, matches900, matches1300, matches1500)
    }, [matches550, matches900, matches1300, matches1500])
    return (
        <div className='Event-gallery'>
            <div>
                <h1>
                    Event Gallery
                </h1>
            </div>
            <div className="galleryholder">
                <Swiper
                    modules={[Autoplay, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={!matches1500? 5:!matches1300? 4:!matches900 && !matches550 ? 3 : matches900 ? 2 : 1}
                    navigation={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // autoplay={false}
                    loop={true}
                    pagination={{ clickable: true }}
                    className={"mySwiper"}>
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide className='myswiperslide'>
                                <Frame key={index} href={item.href} img={item.img} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </div>
    )
}

export default Eventgallery