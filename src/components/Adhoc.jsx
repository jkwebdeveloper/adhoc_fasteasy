import React from 'react'
import AdhocBox from './AdhocBox'

const Adhoc = () => {
  return (
    <div className="Adhoc_section">
      <div className="container">
        <h1 className="Adhoc_heading">why use adhoc ?</h1>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-3 col-sm-12">
            <AdhocBox />
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-12">
            <AdhocBox />
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-12">
            <AdhocBox />
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-12">
            <AdhocBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adhoc
