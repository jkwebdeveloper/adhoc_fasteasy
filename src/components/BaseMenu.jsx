import React from 'react'

const BaseMenu = () => {
  return (
    <div className="menu_section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12">
            <div className="menu_left_content">
              <h1 className="base_heading">Why Have A QR <br /> Based Menu?</h1>
              <div className="menu_dropdown">
                <div className="base_icon">

                </div>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12">
            <div className="base_right_img">
              <img src={require('../assets/images/OBJECTS (4) 1.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseMenu
