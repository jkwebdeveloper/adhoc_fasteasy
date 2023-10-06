import React from 'react'
import OurValuesBox from './OurValuesBox'

const OurValues = () => {
  return (
    <div className="our_values_section container">
      <div className="our_values_heading">our values</div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <OurValuesBox />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <OurValuesBox />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <OurValuesBox />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <OurValuesBox />
        </div>
      </div>
    </div>
  )
}

export default OurValues
