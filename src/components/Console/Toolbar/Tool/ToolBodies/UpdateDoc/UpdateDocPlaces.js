import React, { useState, useEffect } from 'react';
//Utils
import { validateInput } from '../../../../../../utils/utils';
//Componentes
import CategoriesInput from './CategoriesInput';
import ServicesInput from './ServicesInput';
import ScheduleInput from './ScheduleInput';

function UpdateDocPlaces({ setAllowSubmit, setToolResult, selection }) {
  const [formInput, setFormInput] = useState({
    id: selection.id,
    nome: selection.nome,
    morada: selection.morada,
    descrição: selection.descrição,
    email: selection.email,
    website: selection.website,
    facebook: selection.facebook,
    telefone: selection.telefone,
    booking: selection.booking,
    imagensGrandes: selection.imagensGrandes,
    coordenadas: {
      lat: selection.coordenadas[0],
      long: selection.coordenadas[1],
    },
    categorias: selection.categorias,
    serviços: selection.serviços,
    horário: {
      segundaFeira: {
        abre: selection.horário['segunda-feira'] ? selection.horário['segunda-feira'][0] : '',
        fecha: selection.horário['segunda-feira'] ? selection.horário['segunda-feira'][1] : '',
      },
      terçaFeira: {
        abre: selection.horário['terça-feira'] ? selection.horário['terça-feira'][0] : '',
        fecha: selection.horário['terça-feira'] ? selection.horário['terça-feira'][1] : '',
      },
      quartaFeira: {
        abre: selection.horário['quarta-feira'] ? selection.horário['quarta-feira'][0] : '',
        fecha: selection.horário['quarta-feira'] ? selection.horário['quarta-feira'][1] : '',
      },
      quintaFeira: {
        abre: selection.horário['quinta-feira'] ? selection.horário['quinta-feira'][0] : '',
        fecha: selection.horário['quinta-feira'] ? selection.horário['quinta-feira'][1] : '',
      },
      sextaFeira: {
        abre: selection.horário['sexta-feira'] ? selection.horário['sexta-feira'][0] : '',
        fecha: selection.horário['sexta-feira'] ? selection.horário['sexta-feira'][1] : '',
      },
      sábado: {
        abre: selection.horário.sábado ? selection.horário.sábado[0] : '',
        fecha: selection.horário.sábado ? selection.horário.sábado[1] : '',
      },
      domingo: {
        abre: selection.horário.domingo ? selection.horário.domingo[0] : '',
        fecha: selection.horário.domingo ? selection.horário.domingo[1] : '',
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
        <p>* Os campos vazios serão apagados do documento.</p>
        <ul>
          <li>
            <label htmlFor='nome'>Nome *</label>
            <input
              type='text'
              name='nome'
              defaultValue={formInput.nome}
              onChange={(e) => setFormInput({ ...formInput, nome: e.target.value })}
            />
          </li>
          <CategoriesInput formInput={formInput} setFormInput={setFormInput} />
          <li>
            <label htmlFor='morada'>Morada *</label>
            <input
              type='text'
              name='morada'
              defaultValue={formInput.morada}
              onChange={(e) => setFormInput({ ...formInput, morada: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='descrição'>Descrição *</label>
            <textarea
              type='text'
              name='descrição'
              defaultValue={formInput.descrição}
              onChange={(e) => setFormInput({ ...formInput, descrição: e.target.value })}
            />
          </li>
          <li className='form-coords-input'>
            <h3>Coordenadas *</h3>
            <div>
              <label htmlFor='lat'>Lat.</label>
              <input
                type='text'
                name='lat'
                placeholder='36.876995'
                defaultValue={formInput.coordenadas.lat}
                onChange={(e) => setFormInput({ ...formInput, coordenadas: { ...formInput.coordenadas, lat: e.target.value } })}
              />
              <label htmlFor='long'>Long.</label>
              <input
                type='text'
                name='long'
                placeholder='8.690995'
                defaultValue={formInput.coordenadas.long}
                onChange={(e) => setFormInput({ ...formInput, coordenadas: { ...formInput.coordenadas, long: e.target.value } })}
              />
            </div>
          </li>
          <li>
            <label htmlFor='imagens'>Nº de imagens grandes (1-5) *</label>
            <input
              type='text'
              style={{ width: '3rem' }}
              placeholder='1'
              defaultValue={formInput.imagensGrandes}
              onChange={(e) => setFormInput({ ...formInput, imagensGrandes: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              defaultValue={formInput.email}
              onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='website'>Website</label>
            <input
              type='text'
              name='website'
              defaultValue={formInput.website}
              onChange={(e) => setFormInput({ ...formInput, website: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='facebook'>Facebook</label>
            <input
              type='text'
              name='facebook'
              defaultValue={formInput.facebook}
              onChange={(e) => setFormInput({ ...formInput, facebook: e.target.value })}
            />
          </li>
          <li>
            <label htmlFor='telefone'>Telefone</label>
            <input
              type='text'
              name='telefone'
              defaultValue={formInput.telefone}
              onChange={(e) => setFormInput({ ...formInput, telefone: e.target.value })}
            />
          </li>

          {formInput.categorias.includes('alojamento') ? (
            <li>
              <label htmlFor='booking'>Booking</label>
              <input
                type='text'
                name='booking'
                defaultValue={formInput.booking}
                onChange={(e) => setFormInput({ ...formInput, booking: e.target.value })}
              />
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

export default UpdateDocPlaces;
