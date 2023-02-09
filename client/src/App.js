import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

//importar as rotas das paginas
import AppRoutes from './routes/router';

function App() {
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
