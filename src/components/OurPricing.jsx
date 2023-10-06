import React from 'react'
import PricingImage from '../assets/images/Ellipse 21.svg'
import { MdOutlineCancel } from 'react-icons/md'

const OurPricing = () => {
  return (
    <div className="menu_section">
      <div className="container">
        <div className="product_main">
          <div className="row">
            <h1 className="how_it_works_heading">our pricing</h1>
            <p className="pricing_dec">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              erat varius, tincidunt neque <br /> a, pellentesque nisi. Etiam
              vitae lectus metus. Aenean placerat enim sapien,
            </p>
            <div className="col-lg-4">
              <div className="pricing_box">
                <div className="price">
                  <p>
                    Free <br /> <strong>0$</strong>
                  </p>
                  <img src={PricingImage} alt="" style={{ width: '30%' }} />
                </div>
                <div className="sms">
                  <MdOutlineCancel className="sms_icon" />
                  <p>SMS Notification</p>
                </div>
                <div className="sms">
                  <MdOutlineCancel className="sms_icon" />
                  <p>Logo Icon</p>
                </div>
                <div className="pos">
                  <MdOutlineCancel className="sms_green" />
                  <p>
                    It includes POS <br /> integration
                  </p>
                </div>
                <button className="price_section_button">Get Started</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing_box">
                <div className="price">
                  <p>
                    Standard <br /> <strong>20$ Free</strong>
                  </p>
                  <img src={PricingImage} alt="" style={{ width: '30%' }} />
                </div>
                <div className="sms">
                  <MdOutlineCancel className="sms_icon" />
                  <p>SMS Notification</p>
                </div>
                <div className="sms">
                  <MdOutlineCancel className="sms_icon" />
                  <p>Logo Icon</p>
                </div>
                <div className="pos">
                  <MdOutlineCancel className="sms_green" />
                  <p>
                    Admin Configuration <br /> Available
                  </p>
                </div>
                <button className="price_section_button">Get Started</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing_box">
                <div className="price">
                  <p>
                    Customes <br /> <strong>Customize</strong>
                  </p>
                  <img src={PricingImage} alt="" style={{ width: '30%' }} />
                </div>
                <div className="sms">
                  <MdOutlineCancel className="sms_icon" />
                  <p>SMS Notification</p>
                </div>
                <div className="sms">
                  <MdOutlineCancel className="sms_icon" />
                  <p>Logo Icon</p>
                </div>
                <div className="pos">
                  <MdOutlineCancel className="sms_green" />
                  <p>
                    For this package,large partners can have a custom agreement.
                  </p>
                </div>
                <button className="price_section_button">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPricing
