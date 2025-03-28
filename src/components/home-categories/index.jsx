import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"


export default function HomeCate() {
    const [itemBg, setItemBg] = useState([
      "#fffceb",
      "#ecffec",
      "#feefea",
      "#fff3eb",
      "#fff3ff",
      "#feefea",
      "#fffceb",
      "#feefea",
      "#ecffec",
      "#feefea",
      "#fff3eb",
      "#fff3ff",
      "#f2fce4",
      "#ecffec",
      "#f2fce4",
      "#fff3eb",
      "#fff3ff",
      "#f2fce4",
      "#ecffec",
      "#f2fce4",
    ])
  return (
    <>
      <section className="homeCat">
        <div className="container">
            <h3 className="hd">Featured Categories</h3>
          <Swiper
            slidesPerView={10}
            spaceBetween={8}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            slidesPerGroup={3}
            modules={[Navigation]}
            className="mySwiper"
          >
            {
                itemBg?.map((item,idx)=>{
                    return (
                      <SwiperSlide>
                        <div className="item text-center cur" style={{background:`${item}`}}>
                          <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                          <h6>Red Apple</h6>
                        </div>
                      </SwiperSlide>
                    )
                })
            }
            

         
          </Swiper>
        </div>
      </section>
    </>
  )
}
