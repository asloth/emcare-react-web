import React from 'react'
import { ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom'
import App from './pages/App'
import { BrowserRouter } from "react-router-dom";
import { Context} from './hooks/Context';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <BrowserRouter>
        <Context>
          <App/>
        </Context>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
