import React from 'react'
import { ColorModeScript, ChakraProvider, theme, Button, Box, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import ReactDOM from 'react-dom'
import App from './pages/App'
import { BrowserRouter } from "react-router-dom";
import { Context} from './hooks/Context';
import { LogOut } from './components/LogOut';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <BrowserRouter>
        <Context>
          <ChakraProvider theme={theme}>
            <Box  w='100%' p={4} display='flex' >
              <ColorModeSwitcher />
              <Spacer />
              <LogOut></LogOut>
            </Box>
            <App/>
          </ChakraProvider>
        </Context>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
