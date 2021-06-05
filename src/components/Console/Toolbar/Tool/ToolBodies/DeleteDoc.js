import React, { useRef } from 'react';
//Utils
import { useConsoleContext } from '../../../../../utils/ConsoleContext';

function DeleteDoc({ setAllowSubmit, setToolResult }) {
  const { selection } = useConsoleContext();
  const confirmationRef = useRef();

  return (
    <div className='delete-doc-wrapper'>
      <h1>Escreva o ID do local que deseja apagar para confirmar</h1>
      <div className='confirmation-body'>
        <label htmlFor='confirmation'>
          ID: <strong>{selection.id}</strong>
        </label>
        <input
          type='text'
          ref={confirmationRef}
          name='confirmation'
          onChange={() => {
            setAllowSubmit(verifyInput(confirmationRef.current.value, selection.id, setToolResult));
          }}
        />
      </div>
    </div>
  );
}

const verifyInput = (value, id, setToolResult) => {
  if (value === id) {
    setToolResult({ id: id });
    return true;
  } else {
    setToolResult();
    return false;
  }
};

export default DeleteDoc;
