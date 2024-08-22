import React from 'react'
import { useSwiper } from 'swiper/react'
import ChevronRight from '../../icons/chevron-right';
import ChevronLeft from '../../icons/chevronleft';

export const SwiperNavButton = ({ showArrows, currentSlide ,showNextArrow ,vertical}: any) => {
    const swiper = useSwiper();
    return (
        <div>
            <button aria-label='go backward' className={`${showArrows && currentSlide > 0 ? "opacity-90 transition-all duration-500" : "opacity-0"} ${vertical && " top-[92px]"} hidden sm:block bg-[#E5E5E5] rounded-3xl p-3 z-40 sm:absolute   left-2`} onClick={() => swiper.slidePrev()}><ChevronLeft fill='#424242' /></button>
            <button aria-label='go forward' className={`${showArrows && showNextArrow ? "opacity-90 transition-all duration-500" : "opacity-0"} ${vertical && " top-[92px]"} hidden sm:block bg-[#E5E5E5] rounded-3xl p-3  sm:absolute   z-40 right-2`} onClick={() => swiper.slideNext()}> <ChevronRight fill='#424242' /></button>
        </div>
    )
}

export const SwiperNavButtonCards = ({ showArrows, currentSlide ,showNextArrow ,vertical}: any) => {
    const swiper = useSwiper();
    return (
        <div>
            <button aria-label='go backward' className={`${showArrows && currentSlide > 0 ? "opacity-90 transition-all duration-500" : "opacity-0"} ${vertical && " top-[130px]"} hidden sm:block bg-[#E5E5E5] rounded-3xl p-3 z-40 sm:absolute   left-2`} onClick={() => swiper.slidePrev()}><ChevronLeft fill='#424242' /></button>
            <button aria-label='go forward' className={`${showArrows && showNextArrow ? "opacity-90 transition-all duration-500" : "opacity-0"} ${vertical && " top-[130px]"} hidden sm:block bg-[#E5E5E5] rounded-3xl p-3  sm:absolute   z-40 right-2`} onClick={() => swiper.slideNext()}> <ChevronRight fill='#424242' /></button>
        </div>
    )
}