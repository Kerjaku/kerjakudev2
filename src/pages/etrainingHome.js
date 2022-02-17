import '../App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ModuleOneIcon from "./images/ModuleOneIcon.png"
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import modules from "./modules.json"
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

const ModuleNames = modules.map((module) => {
  return (
    <div class="etraining-page-boxes">
      <div class="etraining-page-module-title">{module.name}</div>
      <div class="home-page-boxes-text">{module.description}</div>
      <div class="home-page-boxes-button" ><Link to={"/kerjakudev2/modulehome"} state={{ modulenumber: (module.modulenumber), modulenum: (module.modulenum), modulepagetotal:(module.modulepagetotal) }}><Button variant="contained">Lihat Detail Modul</Button></Link></div>
    </div>
  )

})
function EtrainingHome() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div class="etraining-header">Selamat datang kembali di Modul E-Training Anda!</div>
      <div class="etraining-page-boxes-holder">
        <Stack direction="row" spacing={2}>
          <img src={ModuleOneIcon} alt="etrainingIcon" class="etrainingIcon" />
          <div>
            <div class="etraining-page-boxes-top-title">Modul Dalam Proses:</div>
            <div class="etraining-page-boxes">
              <div class="etraining-page-boxes-title">01 Mengenal Potensi Diri</div>
              <div class="home-page-boxes-text">Modul ini akan memandu Anda melalui cara menemukan potensi Anda berdasarkan tipe kepribadian Anda.</div>
              <div class="home-page-boxes-button" ><Link to="/kerjakudev2/moduleHome" state={{ modulenumber: "0", modulenum: "one"}}><Button variant="contained">Lanjutkan Belajar</Button></Link></div>
            </div>
          </div>
        </Stack>
      </div>
      <div class="etraining-page-modules-holder">
        <Stack direction="row" spacing={2}>
          <div class="etraining-module-box">
            <div class="etraining-page-modules-top-title">Modul Selesai:</div>
          </div>
          <div class="etraining-module-box">
            <div class="etraining-page-modules-top-title">Modul Dalam Proses:</div>
            {ModuleNames}
          </div>
        </Stack>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default EtrainingHome;
