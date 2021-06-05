import React from 'react';

function CategoriesInput({ formInput, setFormInput }) {
  return (
    <li className='form-checkbox-li'>
      <h3>Categorias *</h3>
      <div>
        <input
          type='checkbox'
          name='Restaurante'
          value='restaurantes'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Restaurante'>Restaurante</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='Pastelaria'
          value='pastelarias'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Pastelaria'>Pastelaria</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='Café'
          value='cafés'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Café'>Café</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='Natureza'
          value='natureza'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Natureza'>Natureza</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='Jardim/Miradouro'
          value='jardins-e-miradouros'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Jardim/Miradouro'>Jardim/Miradouro</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='Local de cultura'
          value='cultura'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Local de cultura'>Local de cultura</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='Alojamento'
          value='alojamento'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, categorias: [...formInput.categorias, e.target.value] });
            } else {
              setFormInput({ ...formInput, categorias: formInput.categorias.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='Alojamento'>Alojamento</label>
      </div>
    </li>
  );
}

export default CategoriesInput;
