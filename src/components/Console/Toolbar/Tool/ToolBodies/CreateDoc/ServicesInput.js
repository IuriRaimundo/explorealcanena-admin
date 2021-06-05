import React from 'react';

function ServicesInput({ formInput, setFormInput }) {
  return (
    <li className='form-checkbox-li'>
      <h3>Serviços</h3>
      <div>
        <input
          type='checkbox'
          name='wifi'
          value='wifi'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
            } else {
              setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='wifi'>WiFi</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='takeaway'
          value='takeaway'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
            } else {
              setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='takeaway'>Takeaway</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='reserva'
          value='reserva'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
            } else {
              setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='reserva'>Reserva</label>
      </div>
      <div>
        <input
          type='checkbox'
          name='acessibilidade'
          value='acessibilidade'
          onChange={(e) => {
            if (e.target.checked) {
              setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
            } else {
              setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
            }
          }}
        />
        <label htmlFor='acessibilidade'>Acessibilidade</label>
      </div>
      {formInput.categorias.includes('alojamento') ? (
        <>
          <div>
            <input
              type='checkbox'
              name='ginásio'
              value='ginásio'
              onChange={(e) => {
                if (e.target.checked) {
                  setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
                } else {
                  setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
                }
              }}
            />
            <label htmlFor='ginásio'>Ginásio</label>
          </div>
          <div>
            <input
              type='checkbox'
              name='bar'
              value='bar'
              onChange={(e) => {
                if (e.target.checked) {
                  setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
                } else {
                  setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
                }
              }}
            />
            <label htmlFor='bar'>Bar</label>
          </div>
          <div>
            <input
              type='checkbox'
              name='restaurante'
              value='restaurante'
              onChange={(e) => {
                if (e.target.checked) {
                  setFormInput({ ...formInput, serviços: [...formInput.serviços, e.target.value] });
                } else {
                  setFormInput({ ...formInput, serviços: formInput.serviços.filter((i) => i !== e.target.value) });
                }
              }}
            />
            <label htmlFor='restaurante'>Restaurante</label>
          </div>
        </>
      ) : (
        void 0
      )}
    </li>
  );
}

export default ServicesInput;
