import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css'

function App() {
  return ( 
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
}

export default App;
