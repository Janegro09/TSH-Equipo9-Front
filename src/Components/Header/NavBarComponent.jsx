import { Stack, Menu, Button, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { LoginContext } from 'Context/LoginContext';
import React, { useContext } from 'react';

export const NavBar = () => {

  const Login = useContext(LoginContext)
  const { isLogged } = Login
  
  return (
    <header>
      <Stack
      direction={{base: 'column', sm:'row'}}
      alignItems={'center'} 
      justifyContent={'space-between'}
      >
        <Menu>
          <Link to='/'>
            <MenuItem>
                asd
            </MenuItem>
          </Link>
          <Link to='/'>
            <MenuItem>
                asd2
            </MenuItem>
          </Link>
          <Link to='/'>
            <MenuItem>
                asd3
            </MenuItem>
          </Link>
        </Menu>
        <Button>
          { isLogged ? 'ESTA LOGEADO' : 'No esta logeado'}
        </Button>
      </Stack>
    </header>
  )
}