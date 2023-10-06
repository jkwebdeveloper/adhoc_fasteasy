import React from 'react'
import { GoGoal } from 'react-icons/go'

const About = () => {
  return (
    <div className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12">
            <div className="left_img">
              <div className="bg_ellipse">
                <img
                  src={require('../assets/images/Aboutus/BACKGROUND 2 1.png')}
                  alt="BACKGROUND"
                />
              </div>
              <div className="device_img">
                <img
                  src={require('../assets/images/Aboutus/Group 78.png')}
                  alt="device-img"
                  className="left_device"
                />
                <img
                  src={require('../assets/images/Aboutus/Group 148.png')}
                  alt="device-img"
                  className="right_device"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12">
            <div className="right_content">
              <h1 className="heading">About us</h1>
              <div className="mission_content">
                <div className="icon_bg">
                  <GoGoal className='mission_icon'/>
                </div>
                <div className="mission_dec">
                  <h1 className="mission_heading">Mission</h1>
                  <p>
                    Our main mission is to facilitate the interaction between
                    our partners and their customers. This will be done by
                    making it very easy and fast for customers to purchase
                    things and make orders through the digitized menu. All you
                    just have to do is pick up your mobile device, scan the QR
                    code, place your order, and make payment. As simple as ABC!
                  </p>
                </div>
              </div>
              <div className="mission_content">
                <div className="icon_bg">
                  <GoGoal className='mission_icon'/>
                </div>
                <div className="mission_dec">
                  <h1 className="mission_heading">Mission</h1>
                  <p>
                    Our main mission is to facilitate the interaction between
                    our partners and their customers. This will be done by
                    making it very easy and fast for customers to purchase
                    things and make orders through the digitized menu. All you
                    just have to do is pick up your mobile device, scan the QR
                    code, place your order, and make payment. As simple as ABC!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image_section">
        {/* <div className="image_section-left_img"> */}
        <img
          src={require('../assets/images/Aboutus/wepik-export-20230916053428CryK (1).png')}
          alt=""
          className='image_section_right'
        />
        {/* </div> */}
        {/* <div className="image_section-right_img"> */}
        <img
          src={require('../assets/images/Aboutus/wepik-export-20230922124139YGRP 1.png')}
          alt=""
          className='image_section_left'
        />
        {/* </div> */}
      </div>
    </div>
  )
}

export default About
