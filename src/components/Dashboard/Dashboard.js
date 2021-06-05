import React from 'react';
//CSS
import './Dashboard.css';
//Componentes
import Console from '../Console/Console';
//Utils
import { useAuthContext } from '../../utils/utils';
//Imagens
import background from '../../images/background.jpg';
import { Redirect } from 'react-router';

function Dashboard() {
  const { token } = useAuthContext();
  // Se usuário não estiver autenticado, enviar para login
  if (!token) {
    return <Redirect to='/login' />;
  }
  return (
    <div
      className='dashboard-wrapper'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${background}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className='dashboard-title'>Explore Alcanena Admin</h1>
      <Console />
    </div>
  );
}

export default Dashboard;
