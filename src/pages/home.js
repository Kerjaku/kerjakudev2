/*This is the home page for the website. It provides the basic structure of the homepage and links to the related pages*/
import '../App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

//import other React components
import childfundlogo from './images/childfund-logo.PNG'
import homepageicon from './images//homepage-icon.PNG'
import Footer from './components/Footer.js'
import logo from './images/logo.png';

/*theme contains the color palette for the website*/
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

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div class="home-page-header">
            <img alt="logo" src={logo} class="logo" />
            <div class="buttons">
                <Stack spacing={2} direction="row">
                    <Link to="/kerjakudev2" style={{ textDecoration: 'none' }}><Button variant="contained">Home</Button></Link>
                    <Link to="/kerjakudev2/etrainingHome" style={{ textDecoration: 'none' }}><Button variant="text" color="secondary">E-Training</Button></Link>
                    <Link to="/kerjakudev2/jobboard" style={{ textDecoration: 'none' }}><Button variant="text" color="secondary">Job Portal</Button></Link>
                </Stack>
            </div>
        </div>
        <hr class="line-break2" />  
      <img src={homepageicon} alt="homepageicon" class="home-page-icon" />
      <div class="home-page-header">Bertindak pada karir Anda SEKARANG!</div>
      <div class="home-page-boxes-holder">
        <Stack direction="row" >
          <div class="home-page-boxes">
            <div class="home-page-boxes-title">E-Training Rumah</div>
            <div class="home-page-boxes-text">Bangun keterampilan baru untuk membuat Anda menonjol di pasar kerja yang kompetitif saat ini</div>
            <Link to="/kerjakudev2/etrainingHome" style={{textDecoration:'none'}}><div class="home-page-boxes-button" ><Button variant="contained">Mulai Belajar</Button></div></Link>
          </div>
          <div class="home-page-boxes">
            <div class="home-page-boxes-title">Beranda Papan Pekerjaan</div>
            <div class="home-page-boxes-text">Jelajahi ratusan posisi terbuka dari perusahaan top di wilayah Anda</div>
            <div class="home-page-boxes-button" ><Button variant="contained">Lihat Pekerjaan yang Tersedia</Button></div>
          </div>
        </Stack>
      </div>
      <hr class="line-break" />
      <div class="home-page-header">Tentang Kerjaku</div>
      <div class="home-page-header2">Penglihatan</div>
      <div class="home-page-text">Mewujudkan kemudahan akses anak muda untuk memasuki dunia kerja dan bisnis</div>
      <div class="home-page-header2">Misi</div>
      <div class="home-page-text">Sebagai media informasi yang memudahkan akses bagi generasi muda dalam menentukan dan mengembangkan karir dalam bekerja dan berwirausaha. Selain media online, tersedia juga platform offline yang dikelola dengan kerjasama yang baik dengan berbagai pihak untuk mengembangkan kapasitas dan kualitas generasi muda yang berkarakter, dan juga memberikan keterampilan yang mumpuni baik secara offline dalam bentuk seminar, workshop, kursus dan keterampilan. pelatihan</div>
      <hr class="line-break" />
      <div class="home-page-header2">Sponsors</div>
      <img src={childfundlogo} alt="childfundlogo" class="home-page-sponsor-icon" />
      <div class="sponsor-text">ChildFund International</div>
      <a href="https://childfund.org"><div class="sponsor-link">Mengunjungi situs</div></a>
      <hr class="line-break" />
      <Footer/>
    </ThemeProvider>
  );
}

export default Home;
