export const MOVE_SNAKE = 'MOVE_SNAKE';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

const moveSnake = () => {
  return {
    type: MOVE_SNAKE
  }
}

const changeDirection = (direction) => {
  return {
    type: CHANGE_DIRECTION,
    payload: direction
  }
}
