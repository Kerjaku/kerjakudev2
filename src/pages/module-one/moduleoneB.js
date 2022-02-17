import React, { Component } from 'react'
import B from "./images/B.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleOneB extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. Mengenali Potensi Diri Dan Kecenderungan Kepribadian
                </div>
                <div class="module-text">
                    <Grid container spacing={2}>
                        <Grid item xs={8} elevation={0}>
                            <Item>
                                Kesulitan adaptasi dari dunia kerja yang berbeda dengan dunia sekolah memberikan banyak tekanan jika tanpa persiapan yang baik. Salah satu yang jarang disentuh dalam mempersiapkan diri memasuki duni kerja adalah pengenalan jati diri. Perlu ditekankan bahwa mengenali diri adalah proses mendidik diri sendiri untuk tujuan peningkatan diri. Dengan kenyataan diri kita yang kompleks ini maka membutuhkan pendekatan yang lebih dari sekadar melengkapi keterampilan kerja.
                                <br /><br />
                                Reaksi terhadap dunia kerja yang berbeda dari dunia sebelumnya sangat bergantung dari bagaimana seseorang mengenali dirinya. Sebab dengan seseorang memahami dirinya sendiri, dia bisa memahami dengan menyadari penyebab dan harus bagaimana menyikapi atau mengatasi kalau ada sesuatu yang salah sehingga dapat mencari solusinya.
                                <br /><br />
                                Dalam pengenalan diri kita akan fokus pada dua topik utama:
                                <br />
                                1. Pengenalan potensi diri
                                <br />
                                2. Pengenalan kecenderungan kepribadian
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={0}><img src={B} /></Item>
                        </Grid>
                    </Grid>
                </div>
            </ >
        )
    }
}