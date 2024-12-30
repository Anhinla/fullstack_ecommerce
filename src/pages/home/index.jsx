import HomeBanner from "../../components/home-banner"
import { IoIosArrowRoundForward} from "react-icons/io"
import Button from "@mui/material/Button"
import React from "react"
import {Swiper,SwiperSlide }from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Navigation } from "swiper/modules"
import ProductItem from "../../components/product-item"
import HomeCate from "../../components/home-categories"
import { IoMailOutline } from "react-icons/io5"



const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <HomeBanner />

      <HomeCate />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    src="https://fullstack-ecommerce.netlify.app/static/media/banner1.957b2952d2e9b8c1f445.jpg"
                    className="cursor"
                  />
                </div>
                <div className="banner mt-3">
                  <img
                    src="https://fullstack-ecommerce.netlify.app/static/media/banner2.23a22290d952eb371fc6.jpg"
                    className="cursor"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="light">
                    Do not miss the current offers until the end of March
                  </p>
                </div>

                <Button
                  className="viewAllBtn ml-auto"
                  style={{
                    padding: "5px 25px",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "30px",
                    color: "#414141",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                >
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="light">New products with updated stocks.</p>
                </div>

                <Button
                  className="viewAllBtn ml-auto"
                  style={{
                    padding: "5px 25px",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "30px",
                    color: "#414141",
                    fontWeight: "600",
                    textTransform: "capitalize",
                  }}
                >
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner mt-3">
                  <img
                    src="https://fullstack-ecommerce.netlify.app/static/media/banner3.78a3b8a8eeffb023654b.jpg"
                    className="cursor"
                  />
                </div>

                <div className="banner mt-3">
                  <img
                    src="https://fullstack-ecommerce.netlify.app/static/media/banner3.78a3b8a8eeffb023654b.jpg"
                    className="cursor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-0">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription <br></br>now to get updates on
                promotions and coupons.
              </p>
              <form>
                <IoMailOutline/>
                <input type="text" placeholder="Your Email Address"/>
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png"/>
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Home