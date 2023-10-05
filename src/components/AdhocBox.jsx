import React from 'react'
import { BsFilePost } from 'react-icons/bs'

const AdhocBox = () => {
  return (
    <div className="adhoc_box">
      <div className="adhoc_icon_bg"></div>
      <BsFilePost className="adhoc_icon" />
      <h4>External POS Integration</h4>
      <p>
        Just give us the particular POS system that you’re making use of. We
        will help you to determine whether it is already integrated or not.
      </p>
    </div>
  )
}

export default AdhocBox
