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

export default class ModuleFiveE extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. REFLEKSI PEMBELAJARAN
                </div>
                <div class="module-text" id="moduleonetext">
                    <Grid container spacing={2}>
                        <Grid item xs={6} elevation={0}>
                            <Item>
                                Kita butuh berkembang dan meningkat dalam berkomunikasi asertif di dalam lingkup sosial dan pekerjaan. Berikut ini beberapa pertanyaan refleksi yang bisa membantu mengarahkan pada pendalaman pengenalan diri dan peningkatan komunikasi asertif kita:
                                <ol>
                                    <li>Dari skala 1 – 10, kira-kira seberapakah ukuran kejujuran Anda pada diri sendiri dan kepada orang lain?</li>
                                    <li>Apakah orang lain dapat merasakan keterlibatan, kontribusi dan peran Anda dalam bekerja bersama?</li>
                                    <li>Bagaimana komunikasi asertif Anda dengan rekan sekerja yang berbeda visi?</li>
                                    <li>Bagaimana secara efektif Anda dapat mengembangkan komunikasi asertifnya?</li>
                                </ol>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                                <img src={E1}/>
                            </Item>
                        </Grid>
                    </Grid>
                    <img src={E2}/>
                </div>
            </ >
        )
    }
}