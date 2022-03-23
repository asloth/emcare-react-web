import React, {useContext, useState, useEffect} from 'react';
import { ChakraProvider, Box,  theme, Stack, Text, Table,
  Thead,
  Tbody,
  Tfoot,
  Container,
  Center,
  Tr,
  Th,
  Td, } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { CallToActionWithAnnotation } from '../components/Title';
import { SimplePacientCard } from '../components/SimpleCard';
import { Login } from './Login';
import { User } from './User';
import { Routes, Route } from "react-router-dom";
import {AppContext} from '../hooks/Context'


function App() {
  const auth = useContext(AppContext);    
  return (
    <ChakraProvider theme={theme}>
      {auth.isLogged?
        <Routes>
          <Route path="/" element= {
            <Home/>
          }/> 
        <Route path="login" element={<Login />} />
        <Route path="pacient/:id" element={<User />} />
      </Routes>
      :<Login /> 
        }
      
    </ChakraProvider>
    
  );
}

export default App;



function Home({key}){
  
    const [users, setUsers] = useState(undefined)

    async function getAllUsers() {
      await fetch('https://emcare-expressjs-api.herokuapp.com/users', {
        method: 'POST',
      }).then(data => data.json()).then( response => {
        console.log(response)
        setUsers(response);
        return response;
      }
      ).catch(error =>{
        console.log(error);
      })
    }
    
   
  useEffect(()=>{
    getAllUsers();
  }, [])

  return (
  <>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Box textAlign="center" fontSize="s">
      <CallToActionWithAnnotation title={'Pacientes'}/>
      <Center>
        <Stack direction='column' spacing={2} align='center'>
          <Table >
            <Thead>
              <Tr>
                <Th>Nombres</Th>
                <Th>Opcion</Th>
              </Tr>
            </Thead>
            <Tbody>
              { users?users.map((user) =>{
                  return <SimplePacientCard name={user.name} key={user.uid} id={user.uid}/>
                      
                }):
                
                  <Tr>
                    <Td>
                      <Text>Cargando...</Text>
                    </Td>
                  </Tr>
                
                  }
            </Tbody>
          </Table>
        </Stack >
      </Center>
    </Box>
  </> );
  

  

  
}
