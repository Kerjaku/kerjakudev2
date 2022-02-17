import React, { Component } from 'react'
import E from "./images/E.png"
import E2 from "./images/E2.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleSevenG extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    G. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text" id="moduleonetext">
                    <Grid container spacing={2}>
                        <Grid item xs={6} elevation={0}>
                            <Item>
                                Sesi refleksi bisa diarahkan sebagai aktivitas untuk memperluas referensi pemahaman pemuda terkait budaya kerja dan culture shock.
                                <br /><br />
                                Beberapa pertanyaan yang dapat dirujuk untuk refleksi diantaranya:
                                <ol>
                                    <li>Apakah pernah mengalami culture shock? Atau melihat orang lain mengalami culture shock? Gambarkan situasinya.</li>
                                    <li>Apa akibat <i>culture shock?</i> </li>
                                    <li>Apa pentingnya mengetahui budaya kerja?</li>
                                    <li>Bagi pengalaman dan pemikiran terkait budaya kerja yang pernah ditemui!</li>
                                </ol>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                                <img src={E2} style={{ width: '100%' }} />
                            </Item>
                        </Grid>
                    </Grid>
                    <br /><br />
                    <img src={E} style={{ width: '100%' }} />
                </div>
            </ >
        )
    }
}