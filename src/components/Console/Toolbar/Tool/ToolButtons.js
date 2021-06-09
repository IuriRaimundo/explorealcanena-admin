import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
//CSS
import '../Toolbar.css';
// Utils
import { useConsoleContext, useAuthContext, request } from '../../../../utils/utils';

function ToolButtons({ setOpenTool, allowSubmit, setAllowSubmit, text, action }) {
  const [redirect, setRedirect] = useState(false);
  const { token } = useAuthContext();
  const { type, setDocuments, changeSelection, selection } = useConsoleContext();
  const [feedback, setFeedback] = useState({
    type: '',
    message: '',
  });

  if (redirect) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='tool-buttons'>
      {feedback.type && (
        <div className={feedback.type === 'success' ? 'tool-feedback-success' : 'tool-feedback-error'}>{feedback.message}</div>
      )}
      <button type='button' className='tool-cancel-button' onClick={() => setOpenTool('')}>
        Cancelar
      </button>
      <button
        type='submit'
        className={allowSubmit ? 'tool-submit-button-active' : 'tool-submit-button-disable'}
        onClick={() => {
          action()
            ?.then((response) => {
              setFeedback({ type: 'success', message: response });
              setAllowSubmit(false);
              // Atualizar lista de documentos
              request('GET', type, null, token).then((response) => {
                setDocuments(response);
              });
              setTimeout(() => {
                setOpenTool(false);
                // Limpar seleção
                changeSelection(selection);
              }, 2000);
            })
            .catch((err) => {
              if (err === 'Token inválido.') setRedirect(true);
              setFeedback({ type: 'error', message: err });
              // Remover mensagem
              setTimeout(() => {
                setFeedback({
                  type: '',
                  message: '',
                });
              }, 5000);
            });
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default ToolButtons;
