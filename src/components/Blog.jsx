import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
// import Swiper core and required modules
// import { Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

const Blog = () => {
  return (
    <div className="blog_section">
      <div className="container">
        <h1>Blog & Articles</h1>
        <div className="blog_slider">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            // install Swiper modules
            // modules={[Navigation]}
            // spaceBetween={50}
            // slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="blog_box">
                <div className="blog_img">
                  <img
                    src={require('../assets/images/Blog/Rectangle 106.png')}
                    alt=""
                  />
                </div>
                <div className="box_dec_box">
                  <p>
                    Tips for Using Retail Analytics To Supercharge Your Profits
                  </p>
                  <p className="box_dec_link">
                    Learn More <BsArrowUpRight />{' '}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog_box">
                <div className="blog_img">
                  <img
                    src={require('../assets/images/Blog/Rectangle 106.png')}
                    alt=""
                  />
                </div>
                <div className="box_dec_box">
                  <p>What Is a Point of Sale <br /> Transaction?</p>
                  <p className="box_dec_link">
                    Learn More <BsArrowUpRight />{' '}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog_box">
                <div className="blog_img">
                  <img
                    src={require('../assets/images/Blog/Rectangle 106.png')}
                    alt=""
                  />
                </div>
                <div className="box_dec_box">
                  <p>Expert Tips for Quick And Convenient Shopping</p>
                  <p className="box_dec_link">
                    Learn More <BsArrowUpRight />{' '}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Blog
