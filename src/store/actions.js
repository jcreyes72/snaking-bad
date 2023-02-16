export const MOVE_SNAKE = 'MOVE_SNAKE';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export const EAT_FOOD = 'EAT_FOOD';
export const GAME_OVER = 'GAME_OVER';

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


const eatFood = (food) => {
    return {
        type: EAT_FOOD,
        payload: food
    }
}


const gameOver = () => {
    return {
        type: GAME_OVER
    }
}


