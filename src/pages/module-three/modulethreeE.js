import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import E from "./images/E.png"
import E2 from "./images/E2.png"
import E3 from "./images/E3.png"
import E4 from "./images/E4.png"
import E5 from "./images/E5.png"
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleThreeE extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text">
                    Refleksi pembelajaran ini untuk melihat kembali tingkat pemahaman peserta mengenai topik ini serta mendorong peserta untuk menghasilkan sebuah rencana tindak lanjut.
                    <br /><br />
                    Merumuskan nilai-nilai penting di lingkungan kerja dan merefleksikan:
                    <br/>
                    <img src={E} stylee={{ width: '100%' }} />
                    <br/>
                    Diharapkan peserta mampu membuat catatan pribadi mengenai konsep diri yang lebih baik serta memahami dengan jelas area kualifikasi yang masih harus dikembangkan.
                    <br/>
                    <img src={E2} stylee={{ width: '100%' }} />
                    <br/>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={6} elevation={0}>
                            <Item>
                            <img src={E3}style={{ width: '100%' }}  />

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                            <img src={E4} style={{ width: '100%' }} />

                            </Item>
                        </Grid>
                    </Grid>
                    <img src={E5} stylee={{ width: '100%' }} />

                </div>
            </ >
        )
    }
}