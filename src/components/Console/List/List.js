import React, { useEffect, useState } from 'react';
//CSS
import './List.css';
//Componentes
import ListItem from './ListItem';
//Utils
import { useConsoleContext, useAuthContext, request } from '../../../utils/utils';

export default function List() {
  const { documents, setDocuments, type } = useConsoleContext();
  const { token } = useAuthContext();

  useEffect(() => {
    request('GET', type, null, token).then((response) => {
      setDocuments(response);
    });
  }, [type]);

  const tableHeaders = {
    local: ['Nome', 'Categoria', 'Morada', 'Selecionado'],
    eventos: ['Nome', 'Data', 'Descrição', 'Selecionado'],
    pedidosDeAlteracao: ['Nome do local', 'Remetente', 'Pedido', 'Selecionado'],
    inscricoes: ['Nome do local', 'Categoria', 'Descrição', 'Selecionado'],
  };

  return (
    <table className='list-wrapper'>
      <thead>
        <tr className='list-headers'>
          <th className='list-first-header'>{tableHeaders[type][0]}</th>
          <th className='list-second-header'>{tableHeaders[type][1]}</th>
          <th className='list-third-header'>{tableHeaders[type][2]}</th>
          <th className='list-forth-header'>{tableHeaders[type][3]}</th>
        </tr>
      </thead>
      <tbody id='tbody'>{documents && documents.map((doc) => <ListItem doc={doc} key={doc.id} />)}</tbody>
    </table>
  );
}
