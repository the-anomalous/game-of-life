import React from 'react'
import './box.styles.scss'

const Box = ({boxClass, boxId, selectBox, row, col}) => {
  return (
    <>
      <div
        className={boxClass}
        id={boxId}
        onClick={() => selectBox(row, col)}
      />
    </>
  )
}

export default React.memo(Box)
