import React from 'react';
//Utils
import { useConsoleContext } from '../../../utils/ConsoleContext';
//Icones
import { ReactComponent as CheckMarkIcon } from '../../../images/icon_check_mark.svg';

export function CheckButton({ id }) {
  const { selection } = useConsoleContext();

  return (
    <div className={`check-button ${selection.id === id ? 'check-button-checked' : ''}`}>
      {selection.id && selection.id === id && <CheckMarkIcon />}
    </div>
  );
}
