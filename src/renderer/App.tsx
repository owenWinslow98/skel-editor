import React from 'react';
import Menu from './components/Menu';
import { Button } from './ui/button';
import Scene from './components/Scen/Scen';
import store from './store';
import { Provider } from 'react-redux';
import Panel from './components/Panel';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='flex w-full'>
        {/* <Menu /> */}
        <Scene className='w-full h-full' />
        <Panel />
      </div>
    </Provider>
  );
};

export default App;