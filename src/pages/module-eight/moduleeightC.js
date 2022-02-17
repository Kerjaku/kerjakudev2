import React, { Component } from 'react'
import C from "./images/C.png"

export default class ModuleEightC extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    C. PESAN KUNCI DAN LATIHAN
                </div>
                <div class="module-text" id="moduleonetext">
                    Hal inti dari pengelolaan peluang adalah <b>menemukenali</b> dan <b>menindaklanjuti</b>. Proses menemukenali terdiri dari 3 aktivitas utama yaitu <i>searching, compiling</i> dan <i>matching</i>. Sedangkan proses menindaklanjuti adalah langkah konkrit/ nyata yang diambil sebagai konsekuensi atas pilihan yang dibuat.
                    <br/><br/>
                    Untuk latihan peserta dapat diminta untuk melakukan pencarian peluang peningkatan kapasitas kerja/wirausaha. Meskipun hal ini hanya langkah pertama dalam proses pengelolaan peluang namun hal ini akan membantu peserta untuk memahami topik dan memberikan pengalaman proses. Tabel berikut bisa diisi oleh peserta, cukup 2 opsi saja sebagai latihan dapat dilakukan secara online dengan bantuan gawai peserta baik secara individu atau berkelompok jika gawai yang aksesibel terbatas:
                    <br/><br/>
                    <img src={C} style={{width:'100%'}}/>
                </div>
            </ >
        )
    }
}