import React, { useState, useRef } from 'react';
//CSS
import './Toolbar.css';
//Icones
import { ReactComponent as AddIcon } from '../../../images/icon_add.svg';
import { ReactComponent as EditIcon } from '../../../images/icon_edit.svg';
import { ReactComponent as DeleteIcon } from '../../../images/icon_delete.svg';
import { ReactComponent as ViewIcon } from '../../../images/icon_view.svg';
import { ReactComponent as LogoutIcon } from '../../../images/icon_logout.svg';
//Utils
import { useConsoleContext, logout } from '../../../utils/utils';
import Tool from './Tool/Tool';

function Toolbar() {
  const [openTool, setOpenTool] = useState();
  const { setType, selection, changeSelection, type } = useConsoleContext();
  const typeSelectorRef = useRef();

  let availableTools;

  switch (type) {
    case 'local':
      availableTools = ['add', 'edit', 'delete', 'logout'];
      break;
    case 'eventos':
      availableTools = ['add', 'edit', 'delete', 'logout'];
      break;
    case 'pedidosDeAlteracao':
      availableTools = ['delete', 'reply', 'logout'];
      break;
    case 'inscricoes':
      availableTools = ['delete', 'reply', 'logout'];
      break;
    default:
      return;
  }

  const handleChange = () => {
    changeSelection({ id: '' }); // limpar seleção ao trocar de tipo de documento
    setType(typeSelectorRef.current.value);
  };

  return (
    <>
      <ul className='toolbar'>
        <li>
          <select className='type-selector' ref={typeSelectorRef} onChange={handleChange}>
            <option value='local'>Locais</option>
            <option value='eventos'>Eventos</option>
            <option value='pedidosDeAlteracao'>Pedidos de alteração</option>
            <option value='inscricoes'>Inscrições</option>
          </select>
        </li>
        <li>
          <div
            className={`toolbar-item-wrapper ${!availableTools.includes('add') ? 'tool-disable' : ''}`}
            onClick={() => {
              if (type === 'local' || type === 'eventos') {
                setOpenTool('CreateDoc');
              }
            }}
          >
            <AddIcon
              className='toolbar-icon'
              style={{
                width: '20px',
                height: '20px',
                paddingRight: '10px',
              }}
            />
            <span>Adicionar</span>
          </div>
        </li>
        <li>
          <div
            className={`toolbar-item-wrapper ${!availableTools.includes('edit') || !selection.id ? 'tool-disable' : ''}`}
            onClick={() => {
              if (type === 'local' || type === 'eventos') {
                selection.id ? setOpenTool('UpdateDoc') : void 0;
              }
            }}
          >
            <EditIcon
              className='toolbar-icon'
              style={{
                width: '20px',
                height: '20px',
                paddingRight: '10px',
              }}
            />
            <span>Editar seleção</span>
          </div>
        </li>
        <li>
          <div
            className={`toolbar-item-wrapper ${!availableTools.includes('delete') || !selection.id ? 'tool-disable' : ''}`}
            onClick={() => (selection.id ? setOpenTool('DeleteDoc') : void 0)}
          >
            <DeleteIcon
              className='toolbar-icon'
              id='delete-icon'
              style={{
                width: '23px',
                height: '23px',
                paddingRight: '8px',
              }}
            />
            <span>Apagar seleção</span>
          </div>
        </li>
        <li>
          <div
            className={`toolbar-item-wrapper ${
              !availableTools.includes('reply') || !selection.id ? 'tool-disable view-icon-disable' : 'view-icon-enable'
            }`}
            onClick={() => (selection.id ? setOpenTool('ViewDoc') : void 0)}
          >
            <ViewIcon
              className='toolbar-icon'
              style={{
                width: '18px',
                height: '18px',
                paddingRight: '8px',
              }}
            />
            <span>Ver pedido</span>
          </div>
        </li>
        <li>
          <div className={'toolbar-item-wrapper view-icon-enable'} onClick={() => logout()}>
            <LogoutIcon
              className='toolbar-icon'
              style={{
                width: '18px',
                height: '18px',
                paddingRight: '8px',
                stroke: '#ba271a',
                fill: '#ba271a',
              }}
            />
            <span style={{ color: '#ba271a' }}>Sair</span>
          </div>
        </li>
      </ul>
      {openTool && <Tool openTool={openTool} setOpenTool={setOpenTool} />}
    </>
  );
}

export default Toolbar;
