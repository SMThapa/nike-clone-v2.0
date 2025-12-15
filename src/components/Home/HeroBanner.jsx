import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoSlide from '../VideoSlide';
import 'swiper/css';
import 'swiper/css/navigation';

import vid2 from '../../assets/videos/01.mp4'
import vid3 from '../../assets/videos/02.mp4'
import vid4 from '../../assets/videos/03.mp4'
import vid5 from '../../assets/videos/04.mp4'
import vid6 from '../../assets/videos/05.mp4'


const bannerData = [
    { src: vid2, title: "winning isn't for everyone." },
    { src: vid3, title: "Find Your Greatness." },
    { src: vid4, title: "What if you can?" },
    { src: vid5, title: "Find your greateness." },
    { src: vid6, title: "Why do it?" },
]


export const HeroBanner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);
    const [mute, setMute] = useState(true)

    return (
        <div className="hero-banner ">

            <div className="mute-float-btn">
                <button onClick={() => setMute(!mute)}>
                    {
                        mute ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-off-icon lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293" /><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" /><path d="m2 2 20 20" /><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" /><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>
                    }
                </button>
            </div>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop={true}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                className="mySwiper"
            >
                {
                    bannerData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <VideoSlide
                                src={item.src}
                                isActive={activeSlide === index}
                                mute={mute}
                                onComplete={() => swiperRef.current?.slideNext()}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* <div className="navigation-btn-swiper">
                <button onClick={() => swiperRef.current?.slidePrev()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></button>
                <button onClick={() => swiperRef.current?.slideNext()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></button>
            </div> */}

            <div className="floating-swiper-pagination">
                {bannerData.map((item, index) => (
                    <div
                        key={index}
                        className={activeSlide === index ? "dot active" : "dot"}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                    ><span>{"0" + (index + 1)}</span> <br /><p>{item.title}</p></div>
                ))}
            </div>

        </div>
    )
}
