import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import F from "./images/F.png"
import F2 from "./images/F2.png"

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleOneF extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    F. Refleksi Pembelajaran
                </div>
                <div class="module-text" id="moduleonetext">
                    <Grid container spacing={2}>
                        <Grid item xs={8} elevation={0}>
                            <Item>
                                Kepribadian kita yang unik tentunya tidak akan berhenti bertumbuh dan berkembang. Sesi refleksi bisa membantu mengarahkan pada pendalaman pengenalan diri sehingga peserta lebih memiliki kenyamanan dan kepercayaan diri akan kecenderungan kepribadiannya. 
                                <br/><br/>
                                <span style={{color:"#40A26E"}}>Berikut beberapa pertanyaan dan arahan yang dapat membantu untuk refleksi dan memperdalam pengenalan diri di antaranya:</span>
                                <ul>
                                    <li>Bagaimana peserta memandang dirinya di masa lalu, saat ini, dan  masa depan?</li>
                                    <li>Bagaimana peserta mengenali kekuatan dan kelemahan karakter  serta rencana pengembangannya?</li>
                                    <li>Bagaimana peserta mengenali keunikan kepribadiannya yang dapat  membantunya dalam dunia kerja?</li>
                                    <li>Selain untuk dunia kerja, kepribadian apa yang hendak diubahkan dan  dikembangkan?</li>
                                    <li>Kebiasaan baru apa yang ditemukan dan rencananya akan dikembangkan?</li>
                                    <li>Mengapa peserta ingin menjadi berbeda dari apa yang sudah dan sedang dijalani saat ini?</li>
                                </ul>
                                <br/><br/><br/><br/>
                                <img src={F2} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={0}><img id="imgB3" src={F}></img></Item>
                        </Grid>
                    </Grid>
                </div>
            </ >
        )
    }
}