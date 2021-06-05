import React from 'react';
//CSS
import './List.css';
//Componentes
import { CheckButton } from './CheckButton';
//Utils
import { useConsoleContext } from '../../../utils/ConsoleContext';

export default function ListItem({ doc }) {
  const { type, changeSelection, selection } = useConsoleContext();

  const returnSwitch = (type) => {
    switch (type) {
      case 'local':
        return (
          <>
            <td>{doc.nome && doc.nome}</td>
            <td>{doc.categorias && doc.categorias[0].charAt(0).toUpperCase() + doc.categorias[0].slice(1)}</td>
            <td>{doc.morada && trimStr(doc.morada, 38)}</td>
            <td className='check-btn-td'>
              <CheckButton id={doc.id} />
            </td>
          </>
        );
      case 'eventos':
        return (
          <>
            <td>{doc.nome && doc.nome}</td>
            <td>{doc.data && doc.data}</td>
            <td>{doc.descrição && trimStr(doc.descrição, 30)}</td>
            <td className='check-btn-td'>
              <CheckButton id={doc.id} />
            </td>
          </>
        );
      case 'pedidosDeAlteracao':
        return (
          <>
            <td>{doc.nome && doc.nome}</td>
            <td>{doc.emailDoRemetente && trimStr(doc.emailDoRemetente, 20)}</td>
            <td>{doc.pedido && trimStr(doc.pedido, 30)}</td>
            <td className='check-btn-td'>
              <CheckButton id={doc.id} />
            </td>
          </>
        );
      case 'inscricoes':
        return (
          <>
            <td>{doc.nome && doc.nome}</td>
            <td>{doc.categoria && doc.categoria.charAt(0).toUpperCase() + doc.categoria.slice(1)}</td>
            <td>{doc.descrição && trimStr(doc.descrição, 30)}</td>
            <td className='check-btn-td'>
              <CheckButton id={doc.id} />
            </td>
          </>
        );
      default:
        break;
    }
  };
  return (
    <tr
      className={`list-item-wrapper ${selection.id === doc.id ? 'list-item-selected' : ''}`}
      onClick={() => changeSelection(doc)}
      id={doc.id}
    >
      {returnSwitch(type)}
    </tr>
  );
}

const trimStr = (str, length) => {
  return str.length > length ? str.slice(0, length) + '...' : str;
};
