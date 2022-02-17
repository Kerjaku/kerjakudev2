import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleTwoB extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. MENEMUKENALI Mental block
                </div>
                <div class="module-text">
                    Beberapa gejala seseorang memiliki mental block di antaranya: selalu mengeluh, konflik batin tidak terkendali, tidak pernah mau mengambil risiko dan tidak ada perubahan yang berarti dalam kehidupannya.
                    <br />
                    Untuk memetakan mental block yang secara lebih detail, maka terlebih dahulu harus dikenali kategori mental block yang terdapat dalam diri seseorang. Mental block tersebut terbagi dalam empat kategori, yaitu:
                    <div class="module-subtitle2">1. Block Persepsi</div>
                    Dalam kondisi ini, seseorang menarik kesimpulan berdasarkan sistem memori yang tertanam di pikirannya. Sistem memori dalam blok persepsi akan mengirimkan sinyal pesimis - ‘tidak mungkin’.
                    <div class="module-subtitle2">2. Block Ego</div>
                    Dalam kondisi ini seseorang tidak mampu melihat kelemahan diri sendiri, selalu menyalahkan orang lain, memaksakan kehendak dan mengalami bias kepercayaan diri, yaitu kondisi di mana dalam memupuk rasa percaya diri dilakukan dengan meremehkan orang lain. Hal lain yang menjadi karakter dalam blok ego adalah fokus seseorang yang didominasi cara berpikir <span style={{color:"#40A26E"}}>apa yang saya peroleh</span>, sehingga pemikiran <span style={{color:"#40A26E"}}>apa yang saya berikan</span> tidak mengemuka
                    <div class="module-subtitle2">3. Block Intelektual</div>
                    Dalam kondisi ini seseorang akan menggunakan logika yang keliru, mengandalkan perasaan dan intuisi. Dalam blok intelektual, pemikiran negatif mendominasi alur analisis seseorang.
                    <div class="module-subtitle2">4. Block Emosi</div>
                    Dalam kondisi ini seseorang akan merasa takut jika membuat kesalahan dalam konteks yang wajar dan tidak melanggar tata aturan hukum. Dalam beberapa kasus, seseorang tidak mampu membedakan antara realita dan fantasi. Dalam kategori ini, seseorang memiliki rasa khawatir yang berlebihan, tidak dapat menerima realitas hidup dan cenderung tidak mampu keluar dari persoalan, karena terlalu fokus dengan masalah bukan solusi.
                </div>
            </ >
        )
    }
}