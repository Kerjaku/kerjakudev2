import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#068238',
    },
    secondary: {
      main: '#000000',
    },
  },
});

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <div class="footer">Kerjaku.org <br /> Telp : 024 672 4835 / 024 672 4865 <br /> Email : ykks.semarang19@gmail.com</div>
    </ThemeProvider>
  );
}

export default Footer;
