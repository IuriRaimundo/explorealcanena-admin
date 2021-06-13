import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
//Componentes
import Dashboard from './components/Dashboard/Dashboard';
//Utils
import { AuthContextProvider } from './utils/AuthContext';

function App() {
  // Verificar validade da sessão a cada 5 segundos e refrescar a página caso o token esteja expirado
  (function verifyTokenExpireDate() {
    setTimeout(() => {
      const now = new Date().getTime();
      const expireTime = 1; // valor em horas
      const setupTime = localStorage.getItem('setupTime');
      if (setupTime) {
        if (now - setupTime > expireTime * 60 * 60 * 1000) {
          localStorage.clear();
          window.location.reload();
        }
      } else if (window.location.pathname !== '/login') {
        window.location.reload();
      }
      verifyTokenExpireDate();
    }, 5000);
  })();

  return (
    <AuthContextProvider>
      <Router>
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Auth} />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
