import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay, Navigation } from "swiper/modules"

export default function HomeBanner() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay:true
    }
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dvyozjjma/image/upload/v1722687646/1722687650462_1721277298204_banner.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dvyozjjma/image/upload/v1722687686/1722687689462_1720601832356_New_Project_12.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dvyozjjma/image/upload/v1722687656/1722687659444_1721210565283_slideBanner1.jpg"
                className="w-100"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}
