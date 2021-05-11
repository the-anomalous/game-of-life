import React from 'react'
import './rules-page.styles.scss'

const RulesPage = () => {
  return (
    <div className='rules-page'>
      <div className="about section">
        <h3>About</h3>
        <h4>
          A Tribute to John Conway
          <span>Rest In Peace...</span> 
          </h4>
        
        <p>
          The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.
        </p>
        <p>Checkout Game of Life patterns at <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
      </div>
      <div className="rules section">
        <h3>Rules</h3>
        <ol>
          <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
          <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
          <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
          <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
        </ol>
      </div>
      <div className="patterns"></div>
    </div>
  )
}

export default RulesPage
