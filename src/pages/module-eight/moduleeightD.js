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

export default class ModuleEightD extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    D. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text" id="moduleonetext">
                    Sesi refleksi bisa diarahkan sebagai aktivitas pendukung untuk menguatkan pemahaman atau menemukan kesepahaman pemikiran dalam bagian yang dianggap sebagai kunci penguatan keberhasilan penyampaian informasi.
                    <br /><br />
                    <span style={{ color: "#40A26E", fontWeight: 'bold' }}> Beberapa pertanyaan yang dapat dirujuk untuk refleksi diantaranya:</span>
                    <ol>
                        <li>Apa aktivitas inti dari pengelolaan peluang?</li>
                        <li>Bagaimana arti penting pengelolaan peluang terhadap pencapaian visi peserta?</li>
                        <li>Apa kendala/tantangan yang mungkin muncul dalam pengelolaan peluang? Diskusikan langkah-langkah untuk mengatasi kendala/tantangan yang muncul</li>
                    </ol>

                    <br /><br />
                    <img src={E2} style={{ width: '100%' }} />
                </div>
            </ >
        )
    }
}