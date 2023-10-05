import React from 'react'

const HowWorks = () => {
  return (
    <div className="how_it_works_section">
      <div className="container">
        <h1 className="how_it_works_heading">how it works</h1>
        <p className="">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed turpis <br /> lectus, scelerisque ut
          dolor vel, consectetur vestibulum quam.
        </p>
      </div>
      <img
        src={require('../assets/images/How_Works/wepik-export-202309221301308vK4 1.png')}
        alt=""
        className="works_left_image"
      />
      <div className="container">
        <div className="works_section">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="works_content">
                <h1>Full Administrative Interface</h1>
                <p>
                  Whether you want us to help you fill your menu with items or
                  you choose to create it by yourself, our complete and
                  user-friendly system is available for you.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <img
                src={require('../assets/images/How_Works/Group 201.png')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWorks
