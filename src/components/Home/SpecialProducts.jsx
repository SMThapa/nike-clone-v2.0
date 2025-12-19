import data from '../../../data/data.json';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoSlide from '../VideoSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import { ProductCard } from '../ProductCard';


export const SpecialProducts = () => {

    const products = data.products.slice(-12)
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef2 = useRef(null);
    const [mute, setMute] = useState(true)
    return (
        <div className="special-products container">
            <div className="section-title">hot items</div>
            <div className="section-desc">Stand out. Stay ahead. Bold designs, premium fabrics, street-ready fits. Limited stock—don’t miss out.</div>
            <Swiper
                onSwiper={(swiper) => (swiperRef2.current = swiper)}
                loop={true}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                slidesPerView={4}
                spaceBetween={20}
                className="mySwiper"
            >
                {
                    products.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard prod={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="navigation-btn-swiper">
                <button onClick={() => swiperRef2.current?.slidePrev()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
                <button onClick={() => swiperRef2.current?.slideNext()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
            </div>

        </div>
    )
}
