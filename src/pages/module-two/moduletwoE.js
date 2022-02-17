import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import E from "./images/E.png"
import E2 from "./images/E2.png"
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleTwoE extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text">
                    Sesi refleksi bisa diarahkan sebagai aktivitas pendukung untuk menguatkan pemahaman atau menemukan kesepahaman pemikiran dalam bagian yang dianggap sebagai kunci penguatan keberhasilan penyampaian informasi. Beberapa pertanyaan yang dapat dirujuk untuk refleksi di antaranya:

                    <Grid container spacing={2}>
                        <Grid item xs={8} elevation={0}>
                            <Item>
                                <ol>
                                    <li>Apakah seseorang telah memberikan penilaian jujur ketika mengidentifikasi mental block-nya? Penilaian jujur dan terbuka menjadi tumpuan penting untuk menentukan langkah-langkah treatment selanjutnya.</li>
                                    <li>Apakah perlu untuk membongkar mental block saat ini juga? Sangat penting membenamkan dan memperkuat opini bahwa tidak ada alasan untuk menunda pengikisan mental block.<br /> Pemikiran bahwa mental block tidak perlu diatasi saat ini dan dapat ditunda untuk sementara waktu merupakan pola pikir yang bagian dari mental block itu sendiri, sehingga diharapkan para peserta dapat mengatasi hal tersebut melalui penegasan yang dikonsensuskan</li>
                                    <li>Apa kerugian dan manfaat mengikis mental block? Sebagaimana disampaikan sebagai aktivitas pendukung tindakan nyata seseorang mungkin perlu mendapatkan pendapat dari pihak lain dan membuka wawasan mereka khususnya terkait kerugiankerugian yang akan diperoleh apabila menunda tindakan nyata pengikisan mental block dan beberapa benefit akan terlewatkan.</li>
                                </ol>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={0}>
                                <img src={E} style={{ width: '100%' }}></img>
                            </Item>
                        </Grid>
                    </Grid>
                    <img src={E2} style={{ width: '80%' }}></img>
                </div>
            </ >
        )
    }
}