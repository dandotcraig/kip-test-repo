import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { SwiperNavButton } from "./SwiperNavButton";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const LocationHeroSlider = ({ images, title }: any) => {
  const queryData = useStaticQuery(graphql`
  query MyStaticQuery {
    allContentfulLocationPageHeader {
      edges {
        node {
          images {
            gatsbyImageData(layout: CONSTRAINED, width: 400, quality: 80)
          }
          title
        }
      }
    }
  }
`);

const filterQueryData = queryData.allContentfulLocationPageHeader.edges.filter((node:any)=>{
  return node?.node?.title === title;
})

const requiredImages = filterQueryData[0]?.node?.images

  const [showArrows, setShowArrows] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const showNextArrow = currentSlide < images?.length - 1;

  return (
    <div className="relative flex home_swiper w-[100%]" onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}>
      <Swiper pagination={{
        clickable:true,
        dynamicBullets: true,
      }}
        navigation={false}
        modules={[Pagination]}
        className="hero-slider relative w-[100%]"
        slidesPerView="auto"
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        speed={500}>
        {requiredImages?.map((image: any, index: number) => (
          <SwiperSlide>
            <div
              key={index}
              className="w-full flex "

            >
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={`Image ${index}`}
                className="w-full object-cover h-auto rounded-xl  "
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="sm:absolute -top-8 bottom-0 flex items-center z-10 gap-9 w-full ">
        
        <SwiperNavButton showArrows={showArrows} currentSlide={currentSlide} showNextArrow={showNextArrow}/>
        </div> 
      </Swiper>


    </div>
  );
};

export default LocationHeroSlider;
