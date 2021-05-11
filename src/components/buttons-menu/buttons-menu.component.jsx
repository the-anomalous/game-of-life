import React, { useState } from 'react'
import './buttons-menu.styles.scss'

const ButtonsMenu = ({ playButton, pauseButton, seed, clear, changeGridSize, changeSpeed }) => {
  const [gridSize, toggleGridSize] = useState(false)
  const [speed, toggleSpeed] = useState(false)

  return (
    <div className='btn-container'>

      <div className="btn-controls">
        <button onClick={playButton} className='btn play' >Play</button>
        <button onClick={pauseButton} className='btn pause'>Pause</button>
        <button onClick={seed} className='btn seed' >Seed</button>
        <button onClick={clear} className='btn clear' >Reset</button>
      </div>

      <div className="btn-customization">
        <button onClick={() => toggleGridSize(!gridSize)} className='btn grid-size' >Grid Size &#9660;</button>
        {
          gridSize ? (
            <div className="grid-size container">
              <button onClick={() => changeGridSize('small')} className='dropdown-btn small' >Small</button>
              <button onClick={() => changeGridSize('medium')} className='dropdown-btn medium' >Medium</button>
              <button onClick={() => changeGridSize('large')} className='dropdown-btn large' >Large</button>
            </div>
          ) : null
        }
        <button onClick={() => toggleSpeed(!speed)} className='btn speed'>Speed &#9660;</button>
        {
          speed ? (
            <div className="speed-control container">
              <button onClick={() => changeSpeed('slow')} className=' dropdown-btn slow' >Slow</button>
              <button onClick={() => changeSpeed('normal')} className=' dropdown-btn normal' >Normal</button>
              <button onClick={() => changeSpeed('fast')} className=' dropdown-btn fast'>Fast</button>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default React.memo(ButtonsMenu)