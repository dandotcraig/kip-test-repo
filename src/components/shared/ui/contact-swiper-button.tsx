import React from 'react'
import { useSwiper } from 'swiper/react'
import ChevronRight from '../../icons/chevron-right';
import ChevronLeft from '../../icons/chevronleft';

export const ContactSwiperButton = ({ showArrows, currentSlide ,showNextArrow }: any) => {
    const swiper = useSwiper();
    return (
        <div>
            <button aria-label='go backward' className={`${showArrows && currentSlide > 0 ? "opacity-90 transition-all duration-500" : "opacity-0"} top-[178px] hidden sm:block bg-[#E5E5E5] rounded-3xl p-3 z-40 sm:absolute   left-1`} onClick={() => swiper.slidePrev()}><ChevronLeft fill='#424242' /></button>
            <button aria-label='go forward' className={`${showArrows && showNextArrow ? "opacity-90 transition-all duration-500" : "opacity-0"}  top-[178px] hidden sm:block bg-[#E5E5E5] rounded-3xl p-3  sm:absolute   z-40 right-1`} onClick={() => swiper.slideNext()}> <ChevronRight fill='#424242' /></button>
        </div>
    )
}
