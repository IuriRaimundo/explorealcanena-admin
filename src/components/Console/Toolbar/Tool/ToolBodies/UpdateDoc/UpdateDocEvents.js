import React, { useState, useEffect } from 'react';
// Utils
import { validateInput } from '../../../../../../utils/utils';

function UpdateDocEvents({ setToolResult, setAllowSubmit, selection }) {
  const [formInput, setFormInput] = useState({
    id: selection.id,
    nome: selection.nome,
    data: {
      data: selection.data.split(' ')[0].split('/').reverse().join('-'),
      hora: selection.data.split(' ')[1] ? selection.data.split(' ')[1] : '',
    },
    descrição: selection.descrição,
  });

  useEffect(() => {
    console.log(formInput);
    if (validateInput(formInput, 'eventos')) {
      setAllowSubmit(true);
      setToolResult(formInput);
    } else {
      setAllowSubmit(false);
    }
  }, [formInput]);

  return (
    <form>
      <div className='form-body'>
        <h2>Informações</h2>
        <p>* Os campos vazios serão apagados do documento com excessão das imagens.</p>
        <ul>
          <li>
            <label htmlFor='id'>Id *</label>
            <input
              type='text'
              name='id'
              style={{
                maxWidth: '13rem',
                width: '70%',
              }}
              defaultValue={selection.id}
              onChange={(e) => setFormInput({ ...formInput, id: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='nome'>Nome *</label>
            <input
              type='text'
              name='nome'
              defaultValue={selection.nome}
              onChange={(e) => setFormInput({ ...formInput, nome: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='date'>Data *</label>
            <div id='date-time-picker'>
              <input
                type='date'
                id='datefield'
                defaultValue={selection.data.split(' ')[0].split('/').reverse().join('-')}
                onChange={(e) => {
                  setFormInput({ ...formInput, data: { ...formInput.data, data: e.target.value } });
                }}
              />
              <input
                type='time'
                defaultValue={selection.data.split(' ')[1]}
                onChange={(e) => {
                  setFormInput({ ...formInput, data: { ...formInput.data, hora: e.target.value } });
                }}
              />
            </div>
          </li>
          <li>
            <label htmlFor='descrição'>Descrição *</label>
            <textarea
              type='text'
              name='descrição'
              defaultValue={selection.descrição}
              onChange={(e) => setFormInput({ ...formInput, descrição: e.target.value })}
            />
          </li>
        </ul>
        <h2>Imagem</h2>
        <p>
          Adicione a imagem manualmente no{' '}
          <a href='https://console.cloud.google.com/storage/browser/explore-alcanena-d5727.appspot.com;tab=objects?forceOnBucketsSortingFiltering=false&project=explore-alcanena-d5727&prefix=&forceOnObjectsSortingFiltering=false'>
            Google Cloud Storage
          </a>
          <br />
          na pasta
          <strong> eventos/{selection.id}</strong>
        </p>
      </div>
    </form>
  );
}

export default UpdateDocEvents;
