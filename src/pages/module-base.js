import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ModuleOneA from "./module-one/moduleoneA.js"
import ModuleOneB from "./module-one/moduleoneB.js"
import ModuleOneB2 from "./module-one/moduleoneB2.js"
import ModuleOneB3 from "./module-one/moduleoneB3.js"
import ModuleOneC from "./module-one/moduleoneC.js"
import ModuleOneC2 from "./module-one/moduleoneC2.js"
import ModuleOneD from "./module-one/moduleoneD.js"
import ModuleOneD2 from "./module-one/moduleoneD2.js"
import ModuleOneE from "./module-one/moduleoneE.js"
import ModuleOneE2 from "./module-one/moduleoneE2.js"
import ModuleOneF from "./module-one/moduleoneF.js"
import ModuleTwoA from "./module-two/moduletwoA.js"
import ModuleTwoB from "./module-two/moduletwoB.js"
import ModuleTwoC from "./module-two/moduletwoC.js"
import ModuleTwoD from "./module-two/moduletwoD.js"
import ModuleTwoE from "./module-two/moduletwoE.js"
import ModuleThreeA from "./module-three/modulethreeA.js"
import ModuleThreeB from "./module-three/modulethreeB.js"
import ModuleThreeC from "./module-three/modulethreeC.js"
import ModuleThreeD from "./module-three/modulethreeD.js"
import ModuleThreeE from "./module-three/modulethreeE.js"
import ModuleFourA from "./module-four/modulefourA.js"
import ModuleFourB from "./module-four/modulefourB.js"
import ModuleFourC from "./module-four/modulefourC.js"
import ModuleFourE from "./module-four/modulefourE.js"
import ModuleFiveA from "./module-five/modulefiveA.js"
import ModuleFiveB from "./module-five/modulefiveB.js"
import ModuleFiveC from "./module-five/modulefiveC.js"
import ModuleFiveD from "./module-five/modulefiveD.js"
import ModuleFiveE from "./module-five/modulefiveE.js"
import ModuleSixA from "./module-six/modulesixA.js"
import ModuleSixB from "./module-six/modulesixB.js"
import ModuleSixC from "./module-six/modulesixC.js"
import ModuleSixE from "./module-six/modulesixE.js"
import ModuleSevenA from "./module-seven/modulesevenA"
import ModuleSevenB from "./module-seven/modulesevenB"
import ModuleSevenC from "./module-seven/modulesevenC"
import ModuleSevenD from "./module-seven/modulesevenD"
import ModuleSevenF from "./module-seven/modulesevenF"
import ModuleSevenG from "./module-seven/modulesevenG"
import ModuleEightA from "./module-eight/moduleeightA"
import ModuleEightB from "./module-eight/moduleeightB"
import ModuleEightC from "./module-eight/moduleeightC"
import ModuleEightD from "./module-eight/moduleeightD"
import ModuleNineA from "./module-nine/modulenineA"
import ModuleNineB from "./module-nine/modulenineB"
import ModuleNineC from "./module-nine/modulenineC"
import ModuleNineE from "./module-nine/modulenineE"
import ModuleNineF from "./module-nine/modulenineF"
import ModuleNineG from "./module-nine/modulenineG"

import { useLocation } from 'react-router-dom'
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

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

function Module(props) {
    const page = props.page;
    const modulenumber = props.modulenumber;
    if (modulenumber === 0) {
        if (page === 0) {
            return <ModuleOneA />
        }
        if (page === 1) {
            return <ModuleOneB />
        }
        if (page === 2) {
            return <ModuleOneB2 />
        }
        if (page === 3) {
            return <ModuleOneB3 />
        }
        if (page === 4) {
            return <ModuleOneC />
        }
        if (page === 5) {
            return <ModuleOneC2 />
        }
        if (page === 6) {
            return <ModuleOneD />
        }
        if (page === 7) {
            return <ModuleOneD2 />
        }
        if (page === 8) {
            return <ModuleOneE />
        }
        if (page === 9) {
            return <ModuleOneE2 />
        }
        if (page === 10) {
            return <ModuleOneF />
        }
    }
    if(modulenumber===1){
        if (page === 0) {
            return <ModuleTwoA />
        }
        if (page === 1) {
            return <ModuleTwoB />
        }
        if (page === 2) {
            return <ModuleTwoC />
        }
        if (page === 3) {
            return <ModuleTwoD />
        }
        if (page === 4) {
            return <ModuleTwoE />
        }
    }
    if(modulenumber===2){
        if (page === 0) {
            return <ModuleThreeA/>
        }
        if (page === 1) {
            return <ModuleThreeB/>
        }
        if (page === 2) {
            return <ModuleThreeC/>
        }
        if (page === 3) {
            return <ModuleThreeD/>
        }
        if (page === 4) {
            return <ModuleThreeE/>
        }
    }
    if(modulenumber===3){
        if (page === 0) {
            return <ModuleFourA />
        }
        if (page === 1) {
            return <ModuleFourB />
        }
        if (page === 2) {
            return <ModuleFourC />
        } if (page === 3) {
            return <ModuleFourE />
        }
    }
    if(modulenumber===4){
        if (page === 0) {
            return <ModuleFiveA />
        }
        if (page === 1) {
            return <ModuleFiveB />
        }
        if (page === 2) {
            return <ModuleFiveC />
        }
        if (page === 3) {
            return <ModuleFiveD />
        }
        if (page === 4) {
            return <ModuleFiveE />
        }
    }
    if(modulenumber===5){
        if (page === 0) {
            return <ModuleSixA />
        }
        if (page === 1) {
            return <ModuleSixB />
        }
        if (page === 2) {
            return <ModuleSixC />
        }
        if (page === 3) {
            return <ModuleSixE />
        }
    }
    if(modulenumber===6){
        if (page === 0) {
            return <ModuleSevenA />
        }
        if (page === 1) {
            return <ModuleSevenB />
        }
        if (page === 2) {
            return <ModuleSevenC />
        }
        if (page === 3) {
            return <ModuleSevenD />
        }
        if (page === 4) {
            return <ModuleSevenF />
        }
        if (page === 5) {
            return <ModuleSevenG />
        }
    }
    if(modulenumber===7){
        if (page === 0) {
            return <ModuleEightA />
        }
        if (page === 1) {
            return <ModuleEightB />
        }
        if (page === 2) {
            return <ModuleEightC />
        }
        if (page === 3) {
            return <ModuleEightD />
        }
    }
    if(modulenumber===8){
        if (page === 0) {
            return <ModuleNineA />
        }
        if (page === 1) {
            return <ModuleNineB />
        }
        if (page === 2) {
            return <ModuleNineC />
        }
        if (page === 3) {
            return <ModuleNineE />
        }
        if (page === 4) {
            return <ModuleNineF />
        }
        if (page === 5) {
            return <ModuleNineG />
        }
    }
    return <></>
}

function ModuleOneBase() {
    const location = useLocation()
    let { page, modulenumber, modulepagetotal } = location.state
    const [pageNumber, setpageNumber] = useState(page)

    function nextPage() {
        setpageNumber(Number(pageNumber) + 1)
    }

    function ModuleFooter(props) {
        const page = props.page;
        if (page !== Number(modulepagetotal)) {
            return <>
                <span style={{ marginRight: '2%' }}><Button variant="contained" onClick={nextPage}>Melanjutkan</Button></span>
                <Link to="/kerjakudev2/etrainingHome"><Button variant="contained">Return to ETraining Home</Button></Link>
            </>
        }
        return <Link to="/kerjakudev2/etrainingHome"><Button variant="contained">Return to ETraining Home</Button></Link>
    }

    return (<ThemeProvider theme={theme}>
        <Header />
        <div id="moduleholder">{<Module page={Number(pageNumber)} modulenumber={Number(modulenumber)} />}</div>
        <div class="module-button">
            {<ModuleFooter page={Number(pageNumber)} />}
        </div>
        <Footer />
    </ThemeProvider >

    )
}
export default ModuleOneBase;