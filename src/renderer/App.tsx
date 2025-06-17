import React from 'react';
import Menu from './components/Menu';
import { Button } from './ui/button';
import Scene from './components/Scen';
import store from './store';
import { Provider } from 'react-redux';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Menu />
        <Scene />
      </div>
    </Provider>
  );
};

export default App;