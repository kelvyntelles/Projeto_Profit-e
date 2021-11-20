import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/produtos', () => {
      return [
        {
          id: 1,
          titulo: 'Teste',
          precoNormal: 200,
          precoPromocao: 100,
          precoParcela: '2x 50' 
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


