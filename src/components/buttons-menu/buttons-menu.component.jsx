import React, { useState } from 'react'
import './buttons-menu.styles.scss'

const ButtonsMenu = ({ playButton, pauseButton, seed, clear, changeGridSize, changeSpeed }) => {
  const [gridSize, toggleGridSize] = useState(false)
  const [speed, toggleSpeed] = useState(false)

  return (
    <div>
      <button onClick={playButton} className='btn play' >Play</button>
      <button onClick={pauseButton} className='btn pause'>Pause</button>
      <button onClick={seed} className='btn seed' >Seed</button>
      <button onClick={clear} className='btn clear' >Clear</button>
      <button onClick={() => toggleGridSize(!gridSize)} className='btn grid-size' >Grid Size</button>
      {
        gridSize ? (
          <div className="container">
            <button onClick={() => changeGridSize('small')} className='small' >Small</button>
            <button onClick={() => changeGridSize('medium')} className='medium' >Medium</button>
            <button onClick={() => changeGridSize('large')} className='large' >Large</button>
          </div>
        ) : null
      }
      <button onClick={() => toggleSpeed(!speed)} className='btn speed'>speed</button>
      {
        speed ? (
          <div className="container">
            <button onClick={() => changeSpeed('slow')} className='slow' >Slow</button>
            <button onClick={() => changeSpeed('normal')} className='normal' >Normal</button>
            <button onClick={() => changeSpeed('fast')} className='fast'>Fast</button>
          </div>
        ) : null
      }
    </div>
  )
}

export default ButtonsMenu