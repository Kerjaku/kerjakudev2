import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
//import other React components
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import modulesjson from "./modules.json"
import { useLocation } from 'react-router-dom'
import ModuleOneIcon from "./images/ModuleOneIcon.png"
import ModuleTwoIcon from "./images/ModuleTwoIcon.png"
import ModuleThreeIcon from "./images/ModuleThreeIcon.png"
import ModuleFourIcon from "./images/ModuleFourIcon.PNG"
import ModuleFiveIcon from "./images/ModuleFiveIcon.png"
import ModuleSixIcon from "./images/ModuleSixIcon.png"
import ModuleSevenIcon from "./images/ModuleSevenIcon.png"
import ModuleEightIcon from "./images/ModuleEightIcon.png"
import ModuleNineIcon from "./images/ModuleNineIcon.png"

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

function ModuleHome() {
    const location = useLocation()
    let { modulenumber, modulenum, modulepagetotal, username } = location.state
    let modules = modulesjson[modulenumber].modulenames
    
    function ModuleIcon(){
        if (modulenumber==="0"){
            return ModuleOneIcon
        }
        if (modulenumber==="1"){
            return ModuleTwoIcon
        }
        if (modulenumber==="2"){
            return ModuleThreeIcon
        }
        if (modulenumber==="3"){
            return ModuleFourIcon
        }
        if (modulenumber==="4"){
            return ModuleFiveIcon
        }
        if (modulenumber==="5"){
            return ModuleSixIcon
        }
        if (modulenumber==="6"){
            return ModuleSevenIcon
        }
        if (modulenumber==="7"){
            return ModuleEightIcon
        }
        if (modulenumber==="8"){
            return ModuleNineIcon
        }
        return ""
    }

    const ModuleNames = modules.map((module) => {
        return (
            <div class="module-page-boxes">
                <Stack direction="row" spacing={2}>
                    <div class="module-page-module-title">{module.name}</div>
                    <div class="module-page-boxes-button" >
                        <Link to={'/kerjakudev2/modulebase'} style={{ textDecoration: 'none' }} state={{ page: (module.pageNum), modulenumber:(modulenumber), modulepagetotal:(modulepagetotal), username: (username) }}><Button variant="contained" color="primary"> Mulailah</Button></Link>
                    </div>
                </Stack>
            </div>
        )
    })
    
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div class="etraining-page-boxes-holder">
                <div class="module-title">{modulesjson[modulenumber].name}</div>
                <Stack direction="row" spacing={2}>
                    <img alt="etrainingicon" src={ModuleIcon()} class="etrainingIcon" />
                    <div style={{backgroundColor:'white', marginTop:'7.5%', marginBottom:'7.5%', marginRight:'7.5%', display: 'flex',justifyContent: 'center', alignItems: 'center'}} class="home-page-boxes-text">{modulesjson[modulenumber].description}</div>
                </Stack>
            </div>
            <div class="module-page-modules-holder">
                <div class="etraining-module-box">
                    <div class="module-subtitle">Topik Modul:</div>
                    {ModuleNames}
                </div>
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default ModuleHome;
