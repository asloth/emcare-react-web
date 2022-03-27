import React from 'react'
import { ColorModeScript, ChakraProvider, theme, useColorModeValue,Container,Button,Flex, Box, Spacer } from '@chakra-ui/react';

import ReactDOM from 'react-dom'
import App from './pages/App'
import { BrowserRouter } from "react-router-dom";
import { Context} from './hooks/Context';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <BrowserRouter>
        <Context>
          <ChakraProvider theme={theme} >
              <App/>
          </ChakraProvider>
        </Context>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
