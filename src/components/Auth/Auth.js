import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
//CSS
import './Auth.css';
//Utils
import { useAuthContext } from '../../utils/utils';
import { request } from '../../utils/utils';
//Imagens
import background from '../../images/background.jpg';

function Auth() {
  const [feedback, setFeedback] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    request('POST', 'login', body, null)
      .then((response) => {
        setToken(response.token);
        // Armazenar token no navegador
        const now = new Date().getTime();
        localStorage.setItem('token', response.token);
        localStorage.setItem('setupTime', now);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setFeedback(err);
        setTimeout(() => {
          setFeedback();
        }, 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div
      className='auth-login-wrapper'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${background}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='auth-login'>
        <h3>Inicie sessão como administrador</h3>
        <form
          onSubmit={(e) => {
            setIsLoading(true);
            handleSubmit(e);
          }}
        >
          <ul>
            <li>
              <label htmlFor='email'>Email</label>
            </li>
            <li>
              <input type='email' ref={emailRef} name='email' />
            </li>
            <li>
              <label htmlFor='password'>Palavra-passe</label>
            </li>
            <li>
              <input type='password' ref={passwordRef} name='password' />
            </li>
            {feedback && <li className='auth-feedback'>{feedback}</li>}
            <li>
              <button type='submit'>Iniciar sessão</button>
            </li>
            {isLoading && (
              <li className='auth-loading'>
                <span className='loading-text'>A aguardar resposta</span>
                <span className='loading-span'></span>
                <span className='loading-span'></span>
                <span className='loading-span'></span>
              </li>
            )}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Auth;
