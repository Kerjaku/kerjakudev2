import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import E1 from "./images/E1.png"
import E2 from "./images/E2.png"

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleSixE extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text" id="moduleonetext">
                    Sesi refleksi bisa diarahkan sebagai aktivitas pendukung untuk menguatkan pemahaman atau menemukan kesepahaman pemikiran dalam bagian yang dianggap sebagai pesan kunci.
                    <br /><br />
                    <span style={{ color: "#40A26E", fontWeight: 'bold' }}>Beberapa pertanyaan yang dapat dirujuk untuk refleksi di antaranya:</span>
                    <ol>
                        <li>Bagaimana kaitan pengambilan keputusan dengan pencapaian tujuan?</li>
                        <li>Apakah ada keputusan yang salah?</li>
                        <li>Apa yang menghalangi pemuda dalam membuat keputusan?</li>
                        <li>Bagaimana cara mengatasi halangan tersebut?</li>
                    </ol>

                    <img src={E1} style={{ width: '100%' }} />

                    <img style={{ width: '100%' }} src={E2} />
                </div>
            </ >
        )
    }
}