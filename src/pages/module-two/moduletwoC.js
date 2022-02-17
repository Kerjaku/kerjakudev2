import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import C from "./images/C.png"
const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleTwoC extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    C. Refleksi
                </div>
                <div class="module-text">
                    Seseorang perlu melakukan refleksi dengan pengetahuan yang telah mereka miliki, untuk menemukan kategori mental block yang ada pada dirinya masing-masing. Belajar dari orang lain tentang bagaimana cara mereka menemukenali mental block bisa menjadi pengayaan bagi pola pikir analitik seseorang.
                    <br /><br />
                    Beberapa latihan dan pembelajaran bersama, merupakan proses yang akan mempercepat seseorang dalam menemukenali mental block yang mungkin ada dalam diri mereka. Prinsip utama dalam melakukan refleksi mental block adalah <b>jujur pada diri sendiri. </b> Tabel berikut dapat digunakan dalam membantu refleksi:
                    <br/><br/>
                    <div style={{ color: "#40A26E" }}>Dalam menggunakan tabel ini, pertama-tama tuliskan semua hal yang menghambat kemajuan yang berarti dalam hidup seseorang. Setelah semua hal dituliskan sebagaimana sebenarnya, menentukan katogi merupakan hal tambahan yang bisa dilakukan. Namun inti dari pengisian tabel ini adalah bagaimana seseorang mampu merefleksikan faktor-faktor penghambat dari dalam diri mereka</div>
                    <br/><br/>
                    <img style={{width:'100%'}} src={C}/>
                </div>
            </ >
        )
    }
}