import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import { FreeMode } from "swiper/modules";

const Partners = () => {
  return (
    // <div className="partners_slider py-5">
    //   <Swiper
    //     slidesPerView={5}
    //     spaceBetween={30}
    //     freeMode={true}
    //     // pagination={{
    //     //   clickable: true,
    //     // }}
    //     modules={[FreeMode]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>
    //       <img
    //         src={require("../assets/images/Partners/image 26.png")}
    //         alt=""
    //         style={{ background: "lightgray [50%]" }}
    //       />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={require("../assets/images/Partners/image 27.png")} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={require("../assets/images/Partners/image 28.png")} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={require("../assets/images/Partners/image 29.png")} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={require("../assets/images/Partners/image 30.png")} alt="" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={require("../assets/images/Partners/image 31.png")} alt="" />
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
    <div className="partners_section">
      <div className="pathners_logo">
        <img src={require("../assets/images/Partners/image 26.png")} alt="" />
        <img src={require("../assets/images/Partners/image 27.png")} alt="" />
        <img src={require("../assets/images/Partners/image 28.png")} alt="" />
        <img src={require("../assets/images/Partners/image 29.png")} alt="" />
        <img src={require("../assets/images/Partners/image 30.png")} alt="" />
        <img src={require("../assets/images/Partners/image 31.png")} alt="" />
      </div>
    </div>
  );
};

export default Partners;
