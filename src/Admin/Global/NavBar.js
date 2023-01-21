import { Box } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

function NavBar() {

    const { Setisadminlogged } = useContext(AuthContext)
    
  return (
    <Box sx={{ position: 'fixed', top: 0 , height:'50px' }} display={'flex'}>Navbar</Box>
  )
}

export default NavBar