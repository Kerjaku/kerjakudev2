import '../App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { Component } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

//import other React components
import Footer from './components/Footer.js'
import logo from './images/logo.png';
import jobPosting1 from './images/job_posting1.jpg';
import jobPosting2 from './images/job_posting2.jpg';
import jobPosting3 from './images/job_posting3.jpg';


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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      module: JSON.parse(window.localStorage.getItem('module')),
      show: true,
      show_login: false,
      show_signup: false,
      show_blocked: false,

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
  componentDidMount() {
    if (JSON.parse(window.localStorage.getItem('module')) === null) {
      this.setState({
        show: true
      });
    } else {
      this.setState({
        show: false
      });
    }
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
          console.log(Number(this.state.module))
          if (Number(this.state.module) < 9) {
            this.setState({ show_blocked: true });
          }
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

  render() {
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
            Enter Username: <input type="text" onChange={this.handleUserChange} /> <br />
            Enter Password: <input type="password" onChange={this.handlePasswordChange} /> <br />
            <div id="wrongPassword" style={{ color: 'red', visibility: 'hidden' }}>Wrong Username or Password</div>
            <br /><br />
            <Button variant="contained" onClick={this.getModule}>Gabung</Button>
          </Box>
        </Modal>

        <Modal open={this.state.show_signup} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">Sign Up:</Typography> <br />
            Enter Username: <input type="text" onChange={this.handleUserChange} /> <br />
            Enter Password:<input type="password" onChange={this.handlePasswordChange} /> <br /><br />
            <Button variant="contained" onClick={this.handleSignUp}>Sign Up</Button>
          </Box>
        </Modal>

        <Modal open={this.state.show_blocked} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            The Job Board cannot be accessed until all E-Training is complete.
            <div class="module-button">
              <Link to="/kerjakudev2/etrainingHome" style={{ textDecoration: "none" }}><Button variant="contained" color="secondary">Return to ETraining Home</Button></Link>
            </div>
          </Box>
        </Modal>

        <div class="home-page-header">
          <img alt="logo" src={logo} class="logo" />
          <div class="buttons">
            <Stack spacing={2} direction="row">
              <Link to="/kerjakudev2" style={{ textDecoration: 'none' }}><Button variant="text" color="secondary">Home</Button></Link>
              <Link to="/kerjakudev2/etrainingHome" style={{ textDecoration: 'none' }}><Button variant="text" color="secondary">E-Training</Button></Link>
              <Button variant="contained">Job Portal</Button>
            </Stack>
          </div>
        </div>
        <hr class="line-break2" />
        <div class="etraining-page-boxes-holder" style={{ marginBottom: '0%' }}>
          <div class="etraining-page-boxes-top-title" style={{ fontSize: '30px', paddingTop: '1.5%', paddingBottom: '1.5%' }}>Menemukan Pekerjaan Baru Anda</div>
        </div>
        <div class="etraining-page-modules-holder" style={{ marginTop: '0%' }}>
          <div class="etraining-page-modules-top-title" style={{ paddingTop: '2%', paddingBottom: '2%' }}>Pekerjaan Tersedia:</div>
          <div style={{ backgroundColor: 'white' }}>
            <Stack direction="row" spacing={2} >
              <Item style={{ width: '100%' }}> <img src={jobPosting1} style={{ width: '100%' }} /></Item>
            </Stack>
            <Stack direction="row" spacing={2} >
              <Item style={{ width: '100%' }}> <img src={jobPosting2} style={{ width: '100%' }} /></Item>
            </Stack>
            <Stack direction="row" spacing={2} >
              <Item style={{ width: '100%' }}> <img src={jobPosting3} style={{ width: '100%' }} /></Item>
            </Stack>
          </div>
        </div>

        <hr class="line-break" />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default JobBoard;
