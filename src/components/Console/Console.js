import React from 'react';
//CSS
import './Console.css';
//Componentes
import Toolbar from './Toolbar/Toolbar';
import List from './List/List';
//Utils
import { ConsoleContextProvider } from '../../utils/utils';

function Console() {
  return (
    <ConsoleContextProvider>
      <div className='console-wrapper'>
        <Toolbar />
        <div className='console-body'>
          <List />
        </div>
      </div>
    </ConsoleContextProvider>
  );
}

export default Console;
