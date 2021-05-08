import React, {useState} from 'react'
import Grid from '../../components/grid/grid.component'
import './home-page.styles.scss'

const Homepage = () => {
  const rows = 30;
  const cols = 50;
  const speed = 100;
  
  const [generation, setGeneration] = useState(0);
  const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)))

  return (
    <div className='home-container'>
      <h2 className="generation">Generation : {generation}</h2>
      <Grid
        gridFull={gridFull}
        cols={cols}
        rows={rows}
      />
    </div>
  )
}

export default Homepage
