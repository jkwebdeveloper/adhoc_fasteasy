import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaTiktok } from 'react-icons/fa'

import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 col-md-5 col-sm-12">
            <div className="contact_info">
              <h1>Contact Us</h1>
              <div className="contact_number">
                <div className="contact_icon_bg">
                  <BsFillTelephoneFill />
                </div>
                <p>123-456-7890</p>
              </div>
              <div className="contact_number">
                <div className="contact_icon_bg">
                  <AiOutlineMail />
                </div>
                <p>info@example.com</p>
              </div>
              <div className="social_info">
                <div className="social_icon">
                  <AiFillFacebook className="social_icon_bg" />
                  <AiOutlineInstagram className="social_icon_bg" />
                  <AiFillYoutube className="social_icon_bg" />
                  <BiLogoLinkedin className="social_icon_bg" />
                  <FaTiktok className="social_icon_bg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-md-7 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input class="inp" placeholder="Name*" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input class="inp" placeholder="Name*" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input class="inp" placeholder="Name*" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input class="inp" placeholder="Name*" />
              </div>
            </div>
            <textarea
              className="tex"
              name="text"
              id=""
              cols="10"
              rows="3"
            ></textarea>
            <div className="check_box">
              <input type="checkbox" />
              <p>Do you agree with the terms & conditions?</p>
            </div>
            <button className="price_section_button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
