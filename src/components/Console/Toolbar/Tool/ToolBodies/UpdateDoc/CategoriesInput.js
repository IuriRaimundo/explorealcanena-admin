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
          defaultChecked={formInput.categorias.includes('restaurantes') ? true : false}
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
          defaultChecked={formInput.categorias.includes('pastelarias') ? true : false}
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
          defaultChecked={formInput.categorias.includes('cafés') ? true : false}
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
          defaultChecked={formInput.categorias.includes('natureza') ? true : false}
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
          defaultChecked={formInput.categorias.includes('jardins-e-miradouros') ? true : false}
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
          defaultChecked={formInput.categorias.includes('cultura') ? true : false}
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
          defaultChecked={formInput.categorias.includes('alojamento') ? true : false}
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
