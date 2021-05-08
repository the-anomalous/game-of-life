import React from 'react'
import './grid.styles.scss'

import Box from '../box/box.component'

const Grid = ({ gridFull, cols, rows }) => {
  const width = cols * 15
  const rowsArray = []

  gridFull.forEach((col, colInd) => {
    col.forEach((box, boxInd) => {
      const boxClass = box ? "box on" : "box off";
      const boxId = `${colInd}_${boxInd}`

      rowsArray.push(
        <Box
          boxClass={boxClass}
          boxId={boxId}
          key={boxId}
          row={colInd}
          col={boxInd}
        />
      )
    })
  } )

  return (
    <div className='grid' style={{width:width}}>
      {
        rowsArray
      }
    </div>
  )
}

export default Grid
