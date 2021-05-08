import React from 'react'
import './box.styles.scss'

const Box = ({boxClass, boxId}) => {
  return (
    <>
      <div
        className={boxClass}
        id={boxId}
      />
    </>
  )
}

export default Box
