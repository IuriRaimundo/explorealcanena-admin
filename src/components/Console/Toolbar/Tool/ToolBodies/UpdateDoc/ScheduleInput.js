import React from 'react';

function ScheduleInput({ formInput, setFormInput }) {
  console.log(formInput.horário);
  return (
    <li className='form-schedule-inputs'>
      <h2>Horário</h2>
      <ScheduleDay text='Segunda-feira' objKey='segundaFeira' formInput={formInput} setFormInput={setFormInput} />
      <ScheduleDay text='Terça-feira' objKey='terçaFeira' formInput={formInput} setFormInput={setFormInput} />
      <ScheduleDay text='Quarta-feira' objKey='quartaFeira' formInput={formInput} setFormInput={setFormInput} />
      <ScheduleDay text='Quinta-feira' objKey='quintaFeira' formInput={formInput} setFormInput={setFormInput} />
      <ScheduleDay text='Sexta-feira' objKey='sextaFeira' formInput={formInput} setFormInput={setFormInput} />
      <ScheduleDay text='Sábado' objKey='sábado' formInput={formInput} setFormInput={setFormInput} />
      <ScheduleDay text='Domingo' objKey='domingo' formInput={formInput} setFormInput={setFormInput} />
    </li>
  );
}

function ScheduleDay({ text, objKey, formInput, setFormInput }) {
  console.log(formInput.horário[objKey].abre);
  return (
    <div>
      <h3>{text}</h3>
      <label htmlFor='abertura'>Abre:</label>
      <input
        type='text'
        name='abertura'
        placeholder='HH:MM'
        defaultValue={formInput.horário[objKey].abre}
        onChange={(e) => {
          setFormInput({
            ...formInput,
            horário: {
              ...formInput.horário,
              [objKey]: {
                ...formInput.horário[objKey],
                abre: e.target.value,
              },
            },
          });
        }}
      />
      <label htmlFor='fechar'>Fechar:</label>
      <input
        type='text'
        name='fechar'
        placeholder='HH:MM'
        defaultValue={formInput.horário[objKey].fecha}
        onChange={(e) => {
          setFormInput({
            ...formInput,
            horário: {
              ...formInput.horário,
              [objKey]: {
                ...formInput.horário[objKey],
                fecha: e.target.value,
              },
            },
          });
        }}
      />
    </div>
  );
}

export default ScheduleInput;
