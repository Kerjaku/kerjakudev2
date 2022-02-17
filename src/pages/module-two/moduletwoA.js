import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleTwoA extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    A. MENGENALI Mental block
                </div>
                <div class="module-text">
                    Mental block merupakan hambatan psikologis yang menyelubungi pikiran seseorang di mana kondisi ini dapat menghalangi keberhasilan. Mental block terbentuk akibat terprogramnya pikiran sesorang dalam waktu yang cukup lama oleh beberapa faktor diantaranya:
                    <div class="module-subtitle2"> 1. Keluarga </div>
                    Keluarga merupakan salah satu faktor pembentuk mental block yang kuat. Kebiasaan-kebiasaan yang diajarkan dalam keluarga yang belum tentu tepat dapat memprogram pemikiran pemuda sehingga menjadikan kondisi yang kurang mendukung bagi pencapaian keberhasilan.
                    <div class="module-subtitle2"> 2. Kondisi masa kanak-kanak </div>
                    Masa kanak-kanak merupakan fase terpenting dalam pembentukan karakter. Apabila dalam masa ini terprogram sikap-sikap seperti tidak diperbolehkan mencoba hal baru maka hal tersebut akan tertanam dalam pikiran seseorang sampai dengan masa remaja, akibatnya seseorang tersebut tidak berani mengambil risiko.
                    <div class="module-subtitle2"> 3. Kejadian tertentu </div>
                    Penguatan atas kejadian dengan melakukan generalisasi pengalaman menjadi sebuah diyakini kebenarannya meskipun hal tersebut belum tentu benar. Misalnya pengalaman kesulitan dalam melamar kerja dapat membentuk pemikiran lowongan kerja sulit untuk diakses.
                </div>
            </ >
        )
    }
}