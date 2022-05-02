/*This is the E-training home page. It displays all of the module names and links to each module page*/
import '../App.css';
import { Component } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

//import other React components needed
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};


class EtrainingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      modulesComplete: false,
      module: JSON.parse(window.localStorage.getItem('module')),
      show: true,
      show_login: false,
      show_signup: false,
    };
    this.getModule = this.getModule.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.hideSignupModal = this.hideSignupModal.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showSignup = this.showSignup.bind(this);
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  hideLoginModal = () => {
    this.setState({ show_login: false });
  };

  hideSignupModal = () => {
    this.setState({ show_signup: false });
  };

  showLogin = () => {
    this.setState({ show_login: true });
    this.hideModal()
  };

  showSignup = () => {
    this.setState({ show_signup: true });
    this.hideModal()
  };

  handleUserChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  getModule() {
    const url = 'https://z8ham5h1hb.execute-api.us-east-1.amazonaws.com/api/users?username=' + this.state.username + '&password=' + this.state.password
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          module: json
        });
        window.localStorage.setItem('module', JSON.stringify(json));
        window.localStorage.setItem('loggedIn', JSON.stringify("true"));

        if (json === null) {
          document.getElementById("wrongPassword").style.visibility = "visible"
        } else {
          this.hideLoginModal()
        }
        if (this.state.module == 9) {
          this.setState({
            modulesComplete: true
          })
        }
      });
  }

  handleSignUp() {
    fetch('https://z8ham5h1hb.execute-api.us-east-1.amazonaws.com/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: this.state.username, module: 0, password: this.state.password })
    });
    window.localStorage.setItem('module', JSON.stringify(0));
    window.localStorage.setItem('loggedIn', JSON.stringify("true"));
    this.hideSignupModal()
  }


  componentDidMount() {
    if (JSON.parse(window.localStorage.getItem('module')) === null) {
      this.setState({
        show: true
      });
    } else {
      this.setState({
        show: false
      });
      if (window.localStorage.getItem('module') == 9) {
        this.setState({
          modulesComplete: true
        });
      }
    }
  }


  render() {
    console.log(this.state.module)
    return (
      <ThemeProvider theme={theme}>
        <Modal open={this.state.show} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Button variant="contained" onClick={this.showLogin}>Login</Button>
            <br /><br />
            <Button variant="contained" onClick={this.showSignup}>SignUp</Button>
          </Box>
        </Modal>

        <Modal open={this.state.show_login} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">Masukkan Nama Pengguna Anda:</Typography> <br />
            Enter Username: <input type="text" onChange={this.handleUserChange} /><br />
            Enter Password: <input type="password" onChange={this.handlePasswordChange} /> <br />
            <div id="wrongPassword" style={{ color: 'red', visibility: 'hidden' }}>Wrong Username or Password</div>
            <br /><br />
            <Button variant="contained" onClick={this.getModule}>Gabung</Button>
          </Box>
        </Modal>

        <Modal open={this.state.show_signup} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">Sign Up:</Typography> <br />
            Enter Username: <input type="text" onChange={this.handleUserChange} />  <br />
            Enter Password:<input type="password" onChange={this.handlePasswordChange} />
            <br /><br />
            <Button variant="contained" onClick={this.handleSignUp}>Sign Up</Button>
          </Box>
        </Modal>

        <Modal open={this.state.modulesComplete} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div class="etraining-page-module-title" style={{ textAlign: 'center' }}>E-Pelatihan Selesai!</div>
            <div class="home-page-boxes-button" ><Link style={{ textDecoration: 'none' }} to={"/kerjakudev2/jobboard"}><Button variant="contained">Lihat Pekerjaan yang Tersedia</Button></Link></div>
          </Box>
        </Modal>

        <Header />
        <div class="etraining-header">Selamat datang kembali di Modul E-Training Anda!</div>
        <div class="etraining-page-boxes-holder">
          {modules.map((thismodule) => {
            if (Number(thismodule.modulenumber) === Number(this.state.module)) {
              return (
                <Stack direction="row" spacing={2}>
                  <img src={ModuleOneIcon} alt="etrainingIcon" class="etrainingIcon" />
                  <div>
                    <div class="etraining-page-boxes-top-title">Modul Dalam Proses:</div>
                    <div class="etraining-page-boxes">
                      <div class="etraining-page-boxes-title">{thismodule.name}</div>
                      <div class="home-page-boxes-text">{thismodule.description}</div>
                      <div class="home-page-boxes-button" ><Link style={{ textDecoration: 'none' }} to={"/kerjakudev2/modulehome"} state={{ modulenumber: (thismodule.modulenumber), modulenum: (thismodule.modulenum), modulepagetotal: (thismodule.modulepagetotal), username: (this.state.username) }}><Button variant="contained">Lanjutkan Belajar</Button></Link></div>
                    </div>
                  </div>
                </Stack>
              )
            }
          })}
        </div>
        <div class="etraining-page-modules-holder">
          <Stack direction="row" spacing={2}>
            <div class="etraining-module-box">
              <div class="etraining-page-modules-top-title">Modul Selesai:</div>
              {modules.map((thismodule) => {
                if (Number(thismodule.modulenumber) < Number(this.state.module)) {
                  return (
                    <div class="etraining-page-boxes">
                      <div class="etraining-page-module-title">{thismodule.name}</div>
                      <div class="home-page-boxes-text">{thismodule.description}</div>
                      <div class="home-page-boxes-button" ><Link style={{ textDecoration: 'none' }} to={"/kerjakudev2/modulehome"} state={{ modulenumber: (thismodule.modulenumber), modulenum: (thismodule.modulenum), modulepagetotal: (thismodule.modulepagetotal), username: (this.state.username) }}><Button variant="contained">Modul Tinjauan</Button></Link></div>
                    </div>
                  )
                }
              })}
            </div>
            <div class="etraining-module-box">
              <div class="etraining-page-modules-top-title">Modul Tersisa:</div>
              {modules.map((thismodule) => {
                if (Number(thismodule.modulenumber) > Number(this.state.module)) {
                  return (
                    <div class="etraining-page-boxes">
                      <div class="etraining-page-module-title">{thismodule.name}</div>
                      <div class="home-page-boxes-text">{thismodule.description}</div>
                      <div class="home-page-boxes-button" ><Button disabled variant="contained">Lihat Detail Modul</Button></div>
                    </div>
                  )
                }
              })}
            </div>
          </Stack>
        </div>
        <Footer />
      </ThemeProvider>
    );
  }
}
export default EtrainingHome;
