import React, { Component } from 'react'
import C from "./images/C.png"
import C3 from "./images/C3.png"
import C4 from "./images/C4.png"

export default class ModuleNineC extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    C. MEMBANGUN PONDASI <i>TRADE OFF</i>
                </div>
                <div class="module-text" id="moduleonetext">
                    Ketika dihadapkan pada kondisi trade off, pemuda seharusnya membangun pondasi agar dapat mengetahui peta masing-masing opsi sebelum mengambil keputusan. Secara rinci dan sistematis pembangunan pondasi trade off dapat dilakukan sebagai berikut:
                    <ol>
                        <li class="module-subtitle2">Mengetahui faktor yang dihadapi</li>
                        Pada tahap awal sangat penting mengenali situasi apa yang sedang dihadapi. Hal ini untuk mengidentifikasi 2 faktor yang akan dipertukarkan atau dicari keseimbangannya. Misalnya identifikasi awal mengindikasikan situasi antara peluang kerja dan harapan kerja ideal.
                        <li class="module-subtitle2">Menguraikan faktor</li>
                        Hal berikutnya yang harus dilakukan adalah menguraikan faktor yang dihadapi menggunakan perspektif 4 aspek yang telah dikemukakan sebelumnya, yaitu aspek hasil, durasi konsekuensi dan biaya.
                        <li class="module-subtitle2">Membuat penilaian</li>
                        Setelah 2 faktor terdeskripsikan dalam 4 aspek, maka pemuda bisa membuat penilaian terhadap setiap aspek dan menentukan nilai akhir dari setiap opsi yang diambil.
                    </ol>
                    <br /><br />
                    Contoh simulasi penerapan langkah diatas sebagai berikut:
                    <ol>
                        <li class="module-subtitle2" style={{ fontWeight: "bold" }}>Faktor teridentifikasi:</li>
                        Minat bekerja: di bidang retailPeluang kerja: tersedia di AlfamartJenis pekerjaan impian: bekerja di Gelael
                        <li class="module-subtitle2" style={{ fontWeight: "bold" }}>Penguraian faktor:</li>
                        <br />
                        <img src={C} style={{ width: '100%' }} />
                        <li class="module-subtitle2" style={{ fontWeight: "normal" }}>Membuat penilaian:</li>
                        Dari informasi yang sudah didapatkan, kemudian ditambahkan penilaian dengan ketentuan sebagai berikut:
                        <div class="module-subtitle2">Hasil</div>
                        <b>Nilai 1</b>
                        <br />
                        Jika hasil atau potensi hasil dianggap <span style={{ color: "#40A26E" }}>sangat kecil</span>
                        <br />
                        <b>Nilai 2</b>
                        <br />
                        Jika hasil dianggap <span style={{ color: "#40A26E" }}>kecil</span>
                        <br />
                        <b>Nilai 3</b>
                        <br />
                        Jika hasil dianggap <span style={{ color: "#40A26E" }}>cukup</span>
                        <br />
                        <b>Nilai 4</b>
                        <br />
                        Jika hasil dianggap <span style={{ color: "#40A26E" }}>besar
                            <br /><br />
                            <i>Dapat digunakan standar atau asumsi masing-masing pemuda</i></span>
                        <br />

                        <div class="module-subtitle2">Durasi</div>
                        <b>Nilai 1</b>
                        <br />
                        Jika rentang waktu <span style={{ color: "#40A26E" }}>sangat lama</span> atau <span style={{ color: "#40A26E" }}>tidak pasti</span>
                        <br />
                        <b>Nilai 2</b>
                        <br />
                        Jika rentang waktu <span style={{ color: "#40A26E" }}>lama namun dapat diketahui</span>
                        <br />
                        <b>Nilai 3</b>
                        <br />
                        Jika hasil dianggap <span style={{ color: "#40A26E" }}>pendek</span>
                        <br />
                        <b>Nilai 4</b>
                        <br />
                        Jika hasil dianggap <span style={{ color: "#40A26E" }}>sangat pendekatau instan
                            <br /><br />
                            <i>Dapat digunakan standar atau asumsi masing-masing pemuda</i></span>
                        <br />

                        <div class="module-subtitle2">Konsekuensi</div>
                        <b>Nilai 1</b>
                        <br />
                        Jika konsekuensi dianggap <span style={{ color: "#40A26E" }}>sangat berat/sangat berisiko/penuh ketidakpastian/berpotensi besar kehilangan hasil</span>
                        <br />
                        <b>Nilai 2</b>
                        <br />
                        Jika konsekuensi dianggap  <span style={{ color: "#40A26E" }}>cukup berat</span>
                        <br />
                        <b>Nilai 3</b>
                        <br />
                        Jika konsekuensi dianggap  <span style={{ color: "#40A26E" }}> dapat diterima atau masih dalam rentang toleransi</span>
                        <br />
                        <b>Nilai 4</b>
                        <br />
                        Jika konsekuensi dianggap <span style={{ color: "#40A26E" }}>ringan
                            <br /><br />
                            <i>Trainer dapat membantu pemuda
                                dalam memberikan pandangan
                                terkait konsekuensi</i></span>
                        <br />

                        <div class="module-subtitle2">Biaya</div>
                        <b>Nilai 1</b>
                        <br />
                        Jika asumsi biaya/biaya akibat hilangnya kesempatan yang ditanggung  <span style={{ color: "#40A26E" }}>sangat besar</span>
                        <br />
                        <b>Nilai 2</b>
                        <br />
                        Jika asumsi biaya yang dikeluarkan <span style={{ color: "#40A26E" }}>cukup besar</span>
                        <br />
                        <b>Nilai 3</b>
                        <br />
                        Jika asumsi biaya yang dikeluarkan dalam rentang <span style={{ color: "#40A26E" }}> Jika asumsi biaya yang dikeluarkan dalam rentang</span>
                        <br />
                        <b>Nilai 4</b>
                        <br />
                        Jika asumsi biaya yang dikeluarkan  <span style={{ color: "#40A26E" }}>sangat ringan atau dianggap minim.
                            <br /><br />
                            <i>Dapat digunakan standar atau asumsi sesuai dengan kondisi masing-masing pemuda.</i></span>
                        <br />

                        <div class="module-subtitle2">Nilai rata-rata</div>
                        <b>Nilai 0-1</b>
                        <br />
                        Opsi yang saat ini <span style={{ color: "#40A26E" }}>sangat merugikan</span>
                        <br />
                        <b>Nilai 1,1-2</b>
                        <br />
                        Opsi yang saat ini <span style={{ color: "#40A26E" }}>kurang menguntungkan</span>
                        <br />
                        <b>Nilai 2,1-3</b>
                        <br />
                        Opsi yang saat ini  <span style={{ color: "#40A26E" }}>cukup baik (fair)</span>
                        <br />
                        <b>Nilai 3,1-4</b>
                        <br />
                        Opsi yang saat ini  <span style={{ color: "#40A26E" }}>sangat menguntungkan</span>
                        <br />
                    </ol>
                    <br/><br/>
                    Contoh penerapan penilaian sebagai berikut:
                    <img src={C3} class="moduleimgwide"/>
                    <img src={C4} class="moduleimgwide"/>
                    Dari deskripsi dapat diketahui bahwa opsi bekerja di Alfamart merupakan opsi yang lebih menguntungkan pada saat ini.
                </div>
            </ >
        )
    }
}