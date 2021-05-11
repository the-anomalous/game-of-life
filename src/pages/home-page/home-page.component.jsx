import React, { Component } from 'react'

import './home-page.styles.scss'

import Grid from '../../components/grid/grid.component'
import ButtonsMenu from '../../components/buttons-menu/buttons-menu.component'

import { cloneArray, play } from '../../utils'

class Homepage extends Component {
  constructor() {
    super()
    
    this.rows = 30;
    this.cols = 50;
    this.speed = 100;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.row = 27;
      this.cols = 25
    };
  
    if (window.innerWidth > 600 && window.innerWidth < 768) {
      this.row = 30;
      this.cols = 35;
    }
  
    if (window.innerWidth > 768) {
      this.row = 30;
      this.cols = 50;
    }
    this.setState(state => ({
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }))
    
  }

  selectBox = (row, col) => {
    const clonedArr = cloneArray(this.state.gridFull)
    clonedArr[row][col] = !clonedArr[row][col]
    this.setState(prevState => ({
      ...prevState,
      gridFull: clonedArr
    }))
  }

  playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {
      const updatedGrid = play(this.state.gridFull, this.rows, this.cols)
      this.setState(prevState => ({
        generation: prevState.generation + 1,
        gridFull: updatedGrid
      }))
    }, this.speed)

  }

  pauseButton = () => clearInterval(this.intervalId);

  seed = () => {
    this.clear()
    let copyArr = cloneArray(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          copyArr[i][j] = true
        }        
      };
    }

    this.setState(state => ({generation:0, gridFull: copyArr}))
  };

  clear = () => {
    this.pauseButton();
    this.setState(state => ({
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }))
  }

  changeGridSize = size => {
    this.pauseButton();
    switch (size) {
      case 'small':
        this.cols = 20;
        this.rows = 10;
        break;
      case 'large':
        this.cols = 70;
        this.rows = 50;
        break;
      default:
        this.rows = 30;
        this.cols = 50;
        break;
    }
    this.setState(state => ({
      ...state,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }))
  }
  
  changeSpeed = speed => {
    this.pauseButton()
    switch (speed) {
      case 'slow':
        this.speed = 900
        break;
      case 'fast':
        this.speed = 100
        break;
      default:
        this.speed = 300
        break;
    }

    this.playButton()
  }

  render() {
    return (
      <div className='home-container'>
        <h2 className="generation">Generation : {this.state.generation}</h2>
        <Grid
          gridFull={this.state.gridFull}
          cols={this.cols}
          rows={this.rows}
          selectBox={this.selectBox}
          speed={this.speed}
        />
        <ButtonsMenu
          pauseButton={this.pauseButton}
          playButton={this.playButton}
          seed={this.seed}
          clear={this.clear}
          changeGridSize={this.changeGridSize}
          changeSpeed={this.changeSpeed}
        />
      </div>
    )
  }
}

export default Homepage;