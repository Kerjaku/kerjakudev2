import React, { Component } from 'react'
import E from "./images/E.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import E2 from "./images/E2.png"

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleFourA extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text" id="moduleonetext">
                    <Grid container spacing={2}>
                        <Grid item xs={12} elevation={0}>
                            <Item>
                                Sesi refleksi bisa diarahkan sebagai aktivitas pendukung untuk menguatkan pemahaman atau menemukan kesepahaman pemikiran dalam bagian yang dianggap sebagai pesan kunci.
                                <br /><br />
                                <span style={{ color: "#40A26E", fontWeight: 'bold' }}>Beberapa pertanyaan yang dapat dirujuk untuk refleksi di antaranya:</span>

                            </Item>
                        </Grid>
                        <Grid item xs={6} elevation={0}>
                            <img src={E} style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0} style={{margin:'0', marginRight:'20%', top:'50%'}}>
                                <ol>
                                    <li>Bagaimana anda memandang pentingnya visi saat ini?</li>
                                    <li>Apakah visi dan orientasi dapat mengantar anda menuju pencapaian?</li>
                                    <li>Apa yang terjadi jika anda tidak memiliki visi? </li>
                                    <li>Kondisi mana yang akan Anda pilih, hidup dengan visi dan orientasi atau hidup tanpa visi dan orientasi? Diskusikan alasan-alasan yang mengemuka. </li>
                                </ol>
                            </Item>
                        </Grid>
                    </Grid>
                    <br /><br />
                    <img src={E2} style={{ width: '100%' }} />
                </div>
            </ >
        )
    }
}