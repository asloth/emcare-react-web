import React, {useContext, useState} from 'react';
import {Button, MenuList,Menu,
    MenuItem, Text,   Link,
    MenuButton, } from '@chakra-ui/react';
import { AppContext } from '../hooks/Context';
import { NavLink } from 'react-router-dom';

export function MenuOptions(){
    const auth = useContext(AppContext);

    return <> { auth.isLogged?
        <Menu  colorScheme='purple'>
        <MenuButton as={Button} >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Button variant='link'>
              <NavLink to={{pathname: `/new-user/`}} > Crear usuario </NavLink>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button variant='link'>
              <NavLink to={{pathname: `/users/`}} >Lista de usuarios </NavLink>
            </Button>
          </MenuItem>
          <MenuItem >
            <Button variant='link'>
              <NavLink to={{pathname: `/new-password/`}} > Cambiar contraseña </NavLink>
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>:
     <></>
    }
    </>

}