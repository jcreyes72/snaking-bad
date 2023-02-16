import { MOVE_SNAKE, CHANGE_DIRECTION, EAT_FOOD, GAME_OVER } from './actions';

const initialState = {
  snake: [{ x: 10, y: 10 }],
  food: { x: 5, y: 5 },
  direction: 'RIGHT',
  gameover: false
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_SNAKE:
      return { 
        ...state, 
        snake: state.snake.map((segment, i) => i === 0 ? getNextHead(state) : state.snake[i-1])
      }
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.payload
      }
    case EAT_FOOD:
      return {
        ...state,
        snake: [...state.snake, getNextHead(state)],
        food: action.payload
      }
    case GAME_OVER:
      return {
        ...state,
        gameover: true
      }
    default:
      return state;
  }
}

const getNextHead = (state) => {
  const currentHead = state.snake[0];
  const direction = state.direction;
  const nextHead = { ...currentHead };
  switch (direction) {
    case 'UP':
      nextHead.y--;
      break;
    case 'DOWN':
      nextHead.y++;
      break;
    case 'LEFT':
      nextHead.x--;
      break;
    case 'RIGHT':
      nextHead.x++;
      break;
    default:
      break;
  }
  return nextHead;
}

export default gameReducer;
