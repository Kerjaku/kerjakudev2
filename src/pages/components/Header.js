import React from 'react'
import logo from '../images/logo.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#068238',
        },
        secondary: {
            main: '#000000',
        },
        tertiary: {
            main: '#FFA800',
        }
    },
});

function Header() {
    return (<ThemeProvider theme={theme}>
        <div class="home-page-header">
            <img alt="logo" src={logo} class="logo" />
            <div class="buttons">
                <Stack spacing={2} direction="row">
                    <Link to="/kerjakudev2" style={{ textDecoration: 'none' }}><Button variant="text" color="secondary">Home</Button></Link>
                    <Link to="/kerjakudev2/etrainingHome" style={{ textDecoration: 'none' }}><Button variant="contained">E-Training</Button></Link>
                    <Link to="/kerjakudev2/jobboard" style={{ textDecoration: 'none' }}><Button variant="text" color="secondary">Job Portal</Button></Link>
                </Stack>
            </div>
        </div>
        <hr class="line-break2" />       
    </ThemeProvider >
    )
}
export default Header;