import React, {useState} from 'react';
import { connect } from 'react-redux';
import Snake from '../Snake/Snake';
import Food from '../Food/Food';
import './GameBoard.css'

const BOARD_SIZE = 10;

const GameBoard = (props) => {

  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map(row => new Array(BOARD_SIZE).fill(0)),
  );

  return (
    <div className="gameboard-wrapper">
      <div className="gameboard">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {row.map((cellValue, cellIdx) => (
              <div key={cellIdx} className="cell"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    snake: state.snake,
    food: state.food
  }
}

export default GameBoard;
