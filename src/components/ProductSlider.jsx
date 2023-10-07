import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { AiFillStar } from 'react-icons/ai'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const ProductSlider = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      {/* <img
        src={require('../assets/images/wepik-export-20230916053428CryK.png')}
        alt=""
      /> */}
      <div className="product_section">
        <div className="container">
          <h1 className="product_title">
            CHOOSE OUR PRODUCTS <br /> TO BOOST YOUR BUSINESS
          </h1>
          <Swiper
            // modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={'horizontal'}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                // swiper.params.navigation.prevEl = prevRef.current
                // swiper.params.navigation.nextEl = nextRef.current
                // Re-init navigation
                // swiper.navigation.destroy()
                // swiper.navigation.init()
                // swiper.navigation.update()
              })
            }}
            style={{ padding: '0 0px 2.2rem' }}
          >
            <SwiperSlide>
              <img src={require('../assets/images/Rectangle 82.png')} alt="" />
              <p>Holder Vertical “L” Plexiglas Personnalizat - A6</p>
              <p className="flex">
                <strong>32 RON</strong>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require('../assets/images/Rectangle 82.png')} alt="" />
              <p>Holder Vertical “L” Plexiglas Personnalizat - A6</p>
              <p className="flex">
                <strong>32 RON</strong>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require('../assets/images/Rectangle 82.png')} alt="" />
              <p>Holder Vertical “L” Plexiglas Personnalizat - A6</p>
              <p className="flex">
                <strong>32 RON</strong>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require('../assets/images/Rectangle 82.png')} alt="" />
              <p>Holder Vertical “L” Plexiglas Personnalizat - A6</p>
              <p className="flex">
                <strong>32 RON</strong>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </SwiperSlide>
          </Swiper>

          <div className="product_content">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="pro_img">
                  <img src={require('../assets/images/Group 173.png')} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="right_scenner">
                  <h1>try me !</h1>
                  <p>
                    Scan me with your phone to see the uniqueness of Adhoc and
                    become our partner today!
                  </p>
                  <img src={require('../assets/images/image 73.png')} alt="" />
                  <p>
                    Are You Ready For A Tasty Digital Experience?{' '}
                    <strong style={{color:"#fbbe42"}}>Lets Go!</strong>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSlider
