import React, { useState } from 'react';
//CSS
import './Tool.css';
//Componentes
import ToolButtons from './ToolButtons';
import CreateDoc from './ToolBodies/CreateDoc/CreateDoc';
import UpdateDoc from './ToolBodies/UpdateDoc/UpdateDoc';
import DeleteDoc from './ToolBodies/DeleteDoc';
import ViewDoc from './ToolBodies/ViewDoc/ViewDoc';
//Utils
import { useConsoleContext, useAuthContext, sendEmail, request } from '../../../../utils/utils';

function Tool({ openTool, setOpenTool }) {
  const { type, selection } = useConsoleContext();
  const { token } = useAuthContext();
  const [allowSubmit, setAllowSubmit] = useState();
  const [toolResult, setToolResult] = useState();

  const tools = {
    CreateDoc: {
      component: <CreateDoc setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} />,
      header: type === 'local' ? 'Adicionar local' : 'Adicionar evento',
      buttonText: 'Adicionar',
      action: () => request('POST', type, toolResult, token),
    },
    UpdateDoc: {
      component: <UpdateDoc setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} />,
      header: `Editar: ${selection.id}`,
      buttonText: 'Editar',
      action: () => request('PUT', type, toolResult, token),
    },
    DeleteDoc: {
      component: <DeleteDoc setAllowSubmit={setAllowSubmit} setToolResult={setToolResult} />,
      header: `Apagar: ${selection.id}`,
      buttonText: 'Apagar',
      action: () => request('DELETE', type, toolResult, token),
    },
    ViewDoc: {
      component: <ViewDoc setAllowSubmit={setAllowSubmit} />,
      header: selection.id,
      buttonText: 'Enviar email',
      action: () => sendEmail(selection.emailDoRemetente, type),
    },
  };

  return (
    <div className='tool-wrapper'>
      <div className='tool-body'>
        <div className='tool-header'>
          <h1>{tools[openTool].header}</h1>
        </div>
        {tools[openTool].component}
        <ToolButtons
          setOpenTool={setOpenTool}
          allowSubmit={allowSubmit}
          setAllowSubmit={setAllowSubmit}
          text={tools[openTool].buttonText}
          action={tools[openTool].action}
        />
      </div>
    </div>
  );
}

export default Tool;
