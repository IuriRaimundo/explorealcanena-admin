import React, { useState, useEffect } from 'react';
//Utils
import { validateInput } from '../../../../../../utils/utils';
//Componentes
import CategoriesInput from './CategoriesInput';
import ServicesInput from './ServicesInput';
import ScheduleInput from './ScheduleInput';

function CreateDocPlaces({ setAllowSubmit, setToolResult }) {
  const [formInput, setFormInput] = useState({
    id: '',
    nome: '',
    morada: '',
    descrição: '',
    email: '',
    website: '',
    facebook: '',
    telefone: '',
    booking: '',
    coordenadas: {
      lat: '',
      long: '',
    },
    categorias: [],
    serviços: [],
    horário: {
      segundaFeira: {
        abre: '',
        fecha: '',
      },
      terçaFeira: {
        abre: '',
        fecha: '',
      },
      quartaFeira: {
        abre: '',
        fecha: '',
      },
      quintaFeira: {
        abre: '',
        fecha: '',
      },
      sextaFeira: {
        abre: '',
        fecha: '',
      },
      sábado: {
        abre: '',
        fecha: '',
      },
      domingo: {
        abre: '',
        fecha: '',
      },
    },
  });

  useEffect(() => {
    if (validateInput(formInput, 'local')) {
      setAllowSubmit(true);
      setToolResult(formInput);
    } else {
      setAllowSubmit(false);
    }
  }, [formInput]);

  return (
    <form>
      <div className='form-body'>
        <h2>Informação</h2>
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
              onChange={(e) => setFormInput({ ...formInput, id: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='nome'>Nome *</label>
            <input type='text' name='nome' onChange={(e) => setFormInput({ ...formInput, nome: e.target.value })} />
          </li>
          <CategoriesInput formInput={formInput} setFormInput={setFormInput} />
          <li>
            <label htmlFor='morada'>Morada *</label>
            <input type='text' name='morada' onChange={(e) => setFormInput({ ...formInput, morada: e.target.value })} />
          </li>
          <li>
            <label htmlFor='descrição'>Descrição *</label>
            <textarea type='text' name='descrição' onChange={(e) => setFormInput({ ...formInput, descrição: e.target.value })} />
          </li>
          <li className='form-coords-input'>
            <h3>Coordenadas *</h3>
            <div>
              <label htmlFor='lat'>Lat.</label>
              <input
                type='text'
                name='lat'
                placeholder='36.876995'
                onChange={(e) => setFormInput({ ...formInput, coordenadas: { ...formInput.coordenadas, lat: e.target.value } })}
              />
              <label htmlFor='long'>Long.</label>
              <input
                type='text'
                name='long'
                placeholder='8.690995'
                onChange={(e) => setFormInput({ ...formInput, coordenadas: { ...formInput.coordenadas, long: e.target.value } })}
              />
            </div>
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={(e) => setFormInput({ ...formInput, email: e.target.value })} />
          </li>
          <li>
            <label htmlFor='website'>Website</label>
            <input type='text' name='website' onChange={(e) => setFormInput({ ...formInput, website: e.target.value })} />
          </li>
          <li>
            <label htmlFor='facebook'>Facebook</label>
            <input type='text' name='facebook' onChange={(e) => setFormInput({ ...formInput, facebook: e.target.value })} />
          </li>
          <li>
            <label htmlFor='telefone'>Telefone</label>
            <input type='text' name='telefone' onChange={(e) => setFormInput({ ...formInput, telefone: e.target.value })} />
          </li>

          {formInput?.categorias?.includes('alojamento') ? (
            <li>
              <label htmlFor='booking'>Booking</label>
              <input type='text' name='booking' onChange={(e) => setFormInput({ ...formInput, booking: e.target.value })} />
            </li>
          ) : (
            void 0
          )}

          <ServicesInput formInput={formInput} setFormInput={setFormInput} />
          <ScheduleInput formInput={formInput} setFormInput={setFormInput} />
        </ul>
        <h2>Imagem</h2>
        <p>
          Adicione as imagens manualmente no{' '}
          <a href='https://console.cloud.google.com/storage/browser/explore-alcanena-d5727.appspot.com;tab=objects?forceOnBucketsSortingFiltering=false&project=explore-alcanena-d5727&prefix=&forceOnObjectsSortingFiltering=false'>
            Google Cloud Storage
          </a>
          <br />
          na pasta:
          <strong> places/{formInput.id}</strong>
          <br />
          respeitando a estrutura definida na documentação.
        </p>
      </div>
    </form>
  );
}

export default CreateDocPlaces;
