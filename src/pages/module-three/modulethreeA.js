import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleThreeA extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    A. Pengantar
                </div>
                <div class="module-text">
                    Lingkungan pergaulan dan keluarga dipertimbangkan sebagai salah satu faktor pembentuk pola pikir kaum muda, sementara beberapa pemuda berada pada lingkungan yang dikhawatirkan memberikan pengaruh yang tidak produktif. Terkait hal tersebut pemahaman pemuda terhadap nilai sosial harus jelas, proporsional dan mampu melakukan filter untuk pengembangan nilai diri yang produktif, mempertimbangkan hal tersebut pengenalan nilai sosial dan nilai diri menjadi penting untuk dikuasai.
                    <br /><br />
                    Pengenalan nilai sosial dan nilai diri dibutuhkan untuk memampukan seseorang melihat gambaran yang jelas tentang diri sendiri dan memahami faktor lingkungan sekitar yang mempengaruhi pembentukan jati diri. Peserta diharapkan mampu merumuskan rencana pengembangan nilai diri yang positif dan lebih baik untuk mendorong kesuksesan.
                    <br/><br/>
                    Pada bagian ini kita menyampaikan kepada peserta bahwa kita akan bersama-sama mengidentifikasi halhal penting untuk mereka serta yang mereka butuhkan dan bagaimana mereka dapat berkembang dan menjadi lebih maju.
                </div>
            </ >
        )
    }
}