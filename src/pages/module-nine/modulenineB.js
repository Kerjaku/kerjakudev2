import React, { Component } from 'react'
import B from "./images/B.png"

export default class ModuleNineB extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. EMPAT ASPEK <i>TRADE OFF</i>
                </div>
                <div class="module-text" id="moduleonetext">
                    Jika dilihat secara komprehensif, dalam situasi yang menuntut trade off memiliki 4 aspek berikut:
                    <ol>
                        <li class="module-subtitle2">Keluaran/Hasil</li>
                        Aspek keluaran merupakan sesuatu yang diperoleh dari aktivitas tertentu yang dilakukan, baik dapat dilihat ataupun tidak terlihat. Hasil yang dapat dilihat misalnya gaji/pendapatan sebagai akibat dari proses bekerja. Hasil yang tidak terlihat misalnya kepuasan sebagai akibat dari proses bersosialisasi (nongkrong dengan teman).
                        <li class="module-subtitle2">Durasi</li>
                        Merupakan aspek terkait rentang waktu atau lamanya sesuatu kegiatan/proses akan berlangsung, sehingga durasi diukur dengan satuan waktu. Misalnya durasi bekerja adalah 8 jam, durasi nongkrong dengan teman misalnya 4 jam.
                        <li class="module-subtitle2">Konsekuensi</li>
                        Aspek konsekuensi merupakan sesuatu/kondisi yang harus diterima atau ditanggung akibat suatu proses/kegiatan yang dilakukan. Dalam konteks ini, konsekuensi dapat dilihat dengan membandingkan 2 aspek yang diamati, misalnya bekerja dan waktu bersosialisasi (nongkrong).
                        <br /><br />
                        Konsekuensi bekerja adalah berkurangnya waktu untuk nongkrong, atau sebaliknya dengan memilih banyak waktu untuk nongkrong maka konsekuensinya adalah berkurangnya pemasukan karena proses bekerja tidak dilakukan secara cukup.
                        <li class="module-subtitle2">Biaya</li>
                        Merupakan aspek terkait pengorbanan atau pengeluaran yang ditanggung untuk melakukan proses/kegiatan yang dipilih. Dalam konteks ini biaya diukur dalam satuan mata uang yang harus dikeluarkan untuk mendukung aktivitas tertentu dan disandingkan dengan hasil yang diperoleh.
                        <img src={B} class="moduleimgwide"/>
                        Misalnya jika memilih bekerja akan mengeluarkan Rp.20,000,- untuk biaya transport dan Rp.15,000,- untuk makan siang, kegiatan ini misalnya akan menghasilkan pendapatan sebesar 2 juta per bulan atau Rp.80.000,- per hari kerja. Sedangkan nongkrong misalnya membutuhkan biaya Rp.15,000,- untuk transpor dan Rp.15,000,- untuk secangkir kopi dan akan menghasilkan kepuasan dalam konteks penerimaan pergaulan atau keeratan kekerabatan (bonding). Hal tersebut sangat terkait dengan persepsi. 
                        <br/><br/>
                        Konsep biaya juga bisa diterjemahkan sebagai peluang yang hilang dan potensi kehilangan hasil karena melewatkan kesempatan yang ada, di mana hal ini juga dihitung dalam satuan mata uang.
                    </ol>
                </div>
            </ >
        )
    }
}