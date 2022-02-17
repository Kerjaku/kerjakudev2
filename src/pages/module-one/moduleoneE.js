import React, { Component } from 'react'
import E from "./images/E.png"

export default class ModuleOneE extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. Mengenali Kepribadian Dengan Metode DISC
                </div>
                <div class="module-text" id="moduleonetext" style={{paddingBottom:'0', marginBottom:'0'}}>
                Metode pengenalan diri dengan pendekatan DISC dikembangkan oleh seorang psikolog dari Amerika bernama Dr. William Moulton Marston pada tahun 1928 melalui bukunya The Emotions of Normal People. Teori ini didasari pada respon perilaku mental dan emosional individu dalam berinteraksi dengan lingkungannya. Namun beliau tidak menciptakan alat tes yang dapat mengukur ke empat komponen tersebut.
                <br/><br/>
                Tes kepribadian yang lebih dikenal dengan tes DISC ini akan mengungkap apakah kita adalah seseorang dengan kepribadian yang mendominasi, memberi pengaruh, teguh pendirian, atau ketaatan pada aturan. Hasil dari tes ini tidak memberikan ukuran penilaian seseorang akan lebih buruk atau lebih baik. Keempat potensinya memiliki ranah kerjanya masing-masing, tergantung bagaimana kita dapat memanfaatkan potensi yang ada dalam diri dan menyesuaikannya dengan rencana karir yang akan dijalankan.
                </div>
                <img class="moduleimg" style={{width:'25%'}} src={E} />
            </ >
        )
    }
}