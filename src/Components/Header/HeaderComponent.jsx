import { Stack } from '@chakra-ui/react';

import { NavBar } from './NavBarComponent';

export const Header = () => 
  <header>
    <Stack
    direction={{base: 'column', sm:'row'}}
    alignItems={'baseline'} 
    justifyContent={'space-between'}
    p={'5px 10px'}
    >
      <h1>LOGO</h1>
      <NavBar />
    </Stack>
  </header>