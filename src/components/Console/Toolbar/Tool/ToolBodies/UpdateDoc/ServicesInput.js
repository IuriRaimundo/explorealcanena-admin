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
          defaultChecked={formInput.serviços.includes('wifi') ? true : false}
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
          defaultChecked={formInput.serviços.includes('takeaway') ? true : false}
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
          defaultChecked={formInput.serviços.includes('reserva') ? true : false}
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
          defaultChecked={formInput.serviços.includes('acessibilidade') ? true : false}
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
              defaultChecked={formInput.serviços.includes('ginásio') ? true : false}
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
              defaultChecked={formInput.serviços.includes('bar') ? true : false}
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
              defaultChecked={formInput.serviços.includes('restaurante') ? true : false}
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
