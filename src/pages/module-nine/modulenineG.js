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

export default class ModuleNineG extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    G. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text" id="moduleonetext">
                    Sesi refleksi bisa diarahkan sebagai aktivitas untuk memperdalam kemampuan analitik peserta dalam menentukan faktor trade off dan kapasitas untuk mendeskripsikan aspek.
                    <br /><br />
                    <span style={{ color: "#40A26E", fontWeight: 'bold' }}>Beberapa pertanyaan dan arahan yang dapat dirujuk untuk refleksi diantaranya:</span>
                    <ol>
                        <li>Identifikasi apa faktor trade off yang dihadapi saat ini.</li>
                        <li>Identifikasi apa faktor trade off yang dihadapi saat ini.</li>
                        <li>Gunakan aktivitas penilaian sebagai tugas rumah peserta.</li>
                        <li>Ambil simpulan bersama, dengan menanyakan pendapat peserta terkait manfaat penguraian faktor dan aspek untuk mengelola <i>trade off.</i></li>
                    </ol>

                    <img src={E} style={{ width: '100%' }} />

                    <br /><br />
                    <img src={E2} style={{ width: '100%' }} />
                </div>
            </ >
        )
    }
}