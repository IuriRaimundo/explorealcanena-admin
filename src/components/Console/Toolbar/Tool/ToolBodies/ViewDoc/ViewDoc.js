import React from 'react';
//CSS
import './ViewDoc.css';
//Utils
import { useConsoleContext } from '../../../../../../utils/ConsoleContext';

function ViewDoc({ setAllowSubmit }) {
  const { selection } = useConsoleContext();
  console.log(selection);

  setAllowSubmit(true);
  return (
    <ul className='view-doc-ul'>
      <li>
        <h1>Local:</h1>
        <p>{selection.nome}</p>
      </li>
      <li>
        <h1>Remetente:</h1>
        <p>{selection.emailDoRemetente}</p>
      </li>
      {selection.timestamp && (
        <li>
          <h1>Enviado:</h1>
          <p>{selection.timestamp}</p>
        </li>
      )}
      {selection.pedido && (
        <li>
          <h1>Pedido:</h1>
          <p>{selection.pedido}</p>
        </li>
      )}
      {selection.descrição && (
        <li>
          <h1>Descrição:</h1>
          <p>{selection.descrição}</p>
        </li>
      )}
    </ul>
  );
}

export default ViewDoc;
