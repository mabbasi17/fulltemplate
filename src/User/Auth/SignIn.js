import { Box  ,useTheme} from '@mui/material';
import React , {useContext} from 'react'
import {ColorModeContext, tokens } from '../../Utils/theme';

function SignIn() {
const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div>
      <h5>SignIn</h5>
<Box
        display="flex"
        backgroundColor={colors.secondary[400]}
        borderRadius="3px"
      >
              <button onClick={() => {
colorMode('light')
     }}>Light/Dark</button>
      </Box>

    </div>
  )
}

export default SignIn