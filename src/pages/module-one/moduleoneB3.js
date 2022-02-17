import React, { Component } from 'react'
import B3 from "./images/B3.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleOneB3 extends Component {
    render() {
        return (< >
            <div class="module-page-title" id="moduleonename">
                B. Mengenali Potensi Diri Dan Kecenderungan Kepribadian
            </div>
            <div class="module-text-subtitle" id="moduleonesubtitle" >
                2 . Pengenalan kecenderungan kepribadian
            </div>
            <div class="module-text" id="moduleonetext">
                Pengenalan akan kecenderungan kepribadian yang mempengaruhi diri dan sekeliling kita dalam kehidupan dan dunia kerja. Kepribadian kita bisa dipelajari baik secara alamiah maupun menggunakan ilmu pengetahuan.
                <br /><br />
                Secara alamiah kita dapat mengenali diri kita dari refleksi diri dan interaksi kita dengan sekeliling. Refleksi diri ini tidak hanya berlaku untuk proses pengenalan diri saat ini saja namun
                <Grid container spacing={2}>
                    <Grid item xs={8} elevation={0}>
                        <Item>
                            juga memahami masa lalu yang menyebabkan kita hari ini dan masa depan yang kita ingin rencanakan untuk menjadi apa dan siapa diri kita kelak.
                            <br /><br />
                            Secara ilmu pengetahuan yang dapat membantu kita mengukur kecenderungan kepribadian kita adalah dengan ilmu psikologi. Sayangnya secara umum keterbatasan akses terhadap ilmu psikologis yang akurat sedikit menghambat pengenalan diri yang lebih baik. Namun kabar baiknya, dengan dunia informasi yang terbuka saat ini setidaknya dapat memberikan banyak akses pembelajaran kecenderungan diri kita dengan ilmu psikologi umum yang membantu kita mengenali kepribadian kita.
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item elevation={0}><img src={B3} id="imgB3" /></Item>
                    </Grid>
                </Grid>
            </div>
        </ >
        )
    }
}