import React, { Component } from 'react'
import C from "./images/C.png"
export default class ModuleSixC extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    C. PROSES PENGAMBILAN KEPUTUSAN
                </div>
                <div class="module-text" id="moduleonetext">
                    Keputusan yang baik dihasilkan dari proses yang baik pula. Proses berarti langkah-langkah diuraikan dengan sistematis, hal ini dimaksudkan agar tidak ada komponen mendasar yang terlewatkan. Kanvas pengambilan Keputusan dapat digunakan oleh pemuda dalam proses pengambilan keputusan, contoh isian sebagai berikut:
                    <br />
                    <img class="moduleimgwide" src={C} />
                    Prinsip proses pengambilan keputusan sebagaimana terdapat dalam kanvas diatas adalah:
                    <ol>
                        <li class="module-subtitle2">Keputusan akan berbeda sesuai kondisi yang dihadap</li>
                        Dari contoh di atas, pemuda satu dan yang lain mungkin akan mengambil keputusan yang berbeda, meskipun komponen pertimbangannya sama. Hal ini sangat tergatung pada kondisi yang dihadapi dan prioritas personal.
                        <li class="module-subtitle2">Memahami konsekuensi</li>
                        Pada setiap pilihan keputusan terdapat konsekuensi masing-masing, memahami setiap konsekuensi dan merefleksikannya dengan sumber daya serta kondisi personal akan menentukan tingkat penerimaan, yaitu apakah konsekuensi yang muncul dapat diterima atau tidak dapat diterima.
                        <li class="module-subtitle2">Memiliki integritas</li>
                        Uraian tabel diatas hanya akan menjadi rencana yang berakhir di atas kertas saja, jika pemuda tidak memiliki integritas, yaitu merealisasikan keputusan yang telah dibuat dan menghadapi konsekuensi yang muncul.
                    </ol>
                </div>
            </ >
        )
    }
}