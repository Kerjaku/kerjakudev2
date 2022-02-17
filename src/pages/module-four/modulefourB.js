import React, { Component } from 'react'
import B from "./images/B.png"
import B2 from "./images/B2.png"
import B3 from "./images/B3.png"
import B4 from "./images/B4.png"
import B5 from "./images/B5.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleFourB extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. ARTI PENTING VISI DAN ORIENTASI
                </div>
                <div class="module-text" id="moduleonetext">
                    Sebagaimana telah dianalogikan sebelumnya visi dapat digambarkan sebagai tujuan. Jika seseorang tidak memiliki visi maka orang tersebut bagaikan hidup tanpa tujuan. Ketika tidak memiliki tujuan maka langkahlangkah yang diambil terkesan serampangan dan tidak dapat diukur efektivitasnya. Gambaran tersebut juga menunjukkan ketika tidak ada visi/tujuan yang jelas, maka orientasi/arah sikap juga menjadi kabur/bias.
                    <br />
                    
                    <Grid container spacing={2}>
                        <Grid item xs={6} elevation={0}>
                            <Item>
                            <img src={B} style={{width:'100%'}}/>
                            <img src={B2} style={{width:'100%'}}/>
                            <img src={B4} style={{width:'100%'}}/>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                                <img src={B3} style={{width:'100%'}}/>
                                <img src={B5} style={{width:'100%'}}/>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </ >
        )
    }
}