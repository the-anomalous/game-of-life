import React from 'react'
import './grid.styles.scss'

import Box from '../box/box.component'

const Grid = ({ gridFull, cols, rows, selectBox }) => {
  const width = cols * 15
  const rowsArray = []

  gridFull.forEach((row, rowInd) => {
    row.forEach((box, boxInd) => {
      const boxClass = box ? "box on" : "box off";
      const boxId = `${rowInd}_${boxInd}`

      rowsArray.push(
        <Box
          boxClass={boxClass}
          boxId={boxId}
          key={boxId}
          row={rowInd}
          col={boxInd}
          selectBox={selectBox}
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
