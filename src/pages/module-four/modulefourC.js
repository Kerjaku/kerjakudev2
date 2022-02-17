import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import C from "./images/C.png"

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleFourC extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    C. MENETAPKAN VISI DAN MEMBANGUN ORIENTASI
                </div>
                <div class="module-text" id="moduleonetext">
                    Setelah memahami bahwa visi sangat krusial sebagai langkah awal membangun sukses, maka pemuda harus memahami cara-cara merumuskan visi personalnya dengan jelas. Langkah-langkah yang bisa dilakukan pemuda untuk menetapkan visinya adalah:
                    <ol>
                        <li>
                            <span class="module-subtitle2">Identifikasi kekuatan anda</span>
                            <br />
                            Menggali kekuatan personal saat ini akan mampu memberikan pandangan terkait kondisi ideal yang realistis dan achievable. Dalam bagian ini bisa dilakukan melalui:
                            <ul>
                                <li>
                                    <span class="module-subtitle2"> Tuliskan kekuatan/keterampilan Anda.</span>
                                    <br />
                                    Tuliskan hal-hal yang Anda kuasai, apakah itu mata pelajaran sekolah, kegiatan praktis atau soft skill, seperti kerja tim. Anda juga dapat memilih keterampilan yang mewakili hasrat Anda dan aktivitas yang Anda nikmati untuk menentukan opsi yang mungkin tidak Anda pertimbangkan sebelumnya.
                                </li>
                                <li>
                                    <span class="module-subtitle2"> Identifikasi kekuatan/keterampilan Anda yang dapat dipasarkan.</span>
                                    <br />
                                    Persempit daftar kekuatan Anda dengan yang paling penting bagi pasar kerja atau mendukung aspek kewirausahaan di bidang yang Anda minati. Munculkan tiga sampai lima kekuatan, beberapa di antaranya mungkin saling melengkapi.
                                </li>
                                <li>
                                    <span class="module-subtitle2">Buat deklarasi positif dari kekuatan/kemampuan Anda.</span>
                                    <br />
                                    Lihat keterampilan Anda sebagai cara untuk meningkatkan peran Anda di masa depan. Selain untuk merumuskan visi hal ini juga dapat digunakan untuk membangun karir Anda.
                                </li>
                                <br /><br />
                                <span style={{ backgroundColor: "#f1f3be" }}>Contoh:</span>
                                <li>
                                    <span class="module-subtitle2">Kekuatan/keterampilan saya:</span>
                                    <br />
                                    Jujur, pekerja keras, pandai matematika, sabar, penyayang binatang, bisa berkomunikasi dengan lugas, mau mencoba hal baru, bertangungjawab, rajin, disiplin, bisa memasak.
                                </li>
                                <li>
                                    <span class="module-subtitle2">Kekuatan yang bisa dipasarkan:</span>
                                    <br />
                                    Bisa memasak, bisa berkomunikasi dengan lugas, bertanggungjawab.
                                </li>
                                <li>
                                    <span class="module-subtitle2">Deklarasi positif:</span>
                                    <br />
                                    <b>“Saya adalah pemudi yang pandai memasak, bisa berkomunikasi dan bertanggungjawab”</b>
                                </li>
                            </ul>
                        </li>
                        <br /><br />
                        <li>
                            <span class="module-subtitle2">Renungkan nilai diri (Personal Value) anda masing-masing</span>
                            <br />
                            Nilai-nilai Anda terkait dengan sikap dan pendekatan profesional Anda. Menentukan nilai-nilai inti Anda adalah langkah kunci dalam mengembangkan pernyataan visi Anda. Proses menuju tujuan jangka waktu tertentu lebih mudah jika Anda benar-benar meyakini tujuannya.
                            <br /><br />
                            <span style={{ backgroundColor: "#f1f3be" }}>Contoh:</span>
                            <br />
                            Saya adalah pemudi yang memiliki nilai-nilai kemandirian dan pantang menyerah dan akan menjadi model bagi komunitas saya.
                        </li>
                        <br /><br />
                        <li>
                            <span class="module-subtitle2">Menempatkan keterampilan dan nilai</span>
                            <br />Menempatkan gagasan bagaimana keterampilan dan nilai diri Anda dapat memecahkan masalah atau kebutuhan nyata adalah langkah penting. Hal ini dimulai dari diri anda.
                            <br /><br />
                            <span style={{ backgroundColor: "#f1f3be" }}>Contoh:</span>
                            <br />
                            Saya pandai memasak, bisa berkomunikasi dan bertanggung jawab, saya memiliki nilai kemandirian, pantang menyerah dan bersemangat untuk menjadi contoh sukses. Hal ini akan saya gunakan untuk: mengatasi ketergantungan saya dari keluarga dengan mendapatkan penghasilan sendiri untuk mandiri.
                        </li>
                        <br /><br />
                        <li>
                            <span class="module-subtitle2">Pilih jalur anda dengan lebih spesifik</span>
                            <br />Setelah anda merumuskan bagaimana kekuatan dan nilai diri digunakan untuk mengatasi masalah atau kebutuhan persona anda, teruskan lagi dengan memikirkan hubungannya dengan dunia kerja/wirausaha. Hal-hal yang dapat dilakukan diantaranya:                            <br /><br />
                            <ul>
                                <li><span style={{ color: "#068238" }}>Pilih bidang/sektor</span> yang sesuai dengan rumusan anda.</li>
                                <li><span style={{ color: "#068238" }}>Pilih peran</span> akan anda lakukan pada bidang tersebut.</li>
                                <li>Tuliskan <span style={{ color: "#068238" }}>tujuan</span> secara spesifik</li>
                            </ul>
                            <br /><br />
                            <span style={{ backgroundColor: "#f1f3be" }}>Contoh:</span>
                            <br />
                            <ul>
                                <li><span style={{ color: "#068238" }}>Sektor dipilih:</span> Kuliner</li>
                                <li><span style={{ color: "#068238" }}>Peran:</span> Pemilik dan pengelola</li>
                                <li><span style={{ color: "#068238" }}>Tujuan:</span> Memiliki usaha kuliner roti dan kue kering</li>
                            </ul>
                        </li>
                        <br /><br />
                        <li>
                            <span class="module-subtitle2">Tuliskan visi anda</span>
                            <br />Anda dapat menuliskan visi anda secara ringkas namun memberikan detail yang cukup untuk membuatnya unik. Pernyataan itu dapat ditulis dalam dua kalimat, yang membantu membuatnya tetap singkat dan to the point, dengan rumusan sebagai berikut:
                            <br /><br />
                            <span style={{ color: "#068238" }}>Kalimat pertama: </span>Cukup nyatakan bidang yang ingin Anda kerjakan atau pekerjaan spesifik yang ingin Anda miliki. Misalnya, Anda dapat menulis bahwa Anda ingin menjadi pengusaha roti dan kue kering.
                            <span style={{ color: "#068238" }}>Kalimat kedua: </span>Jelaskan alasan Anda untuk menetapkan tujuan karir dalam kalimat pertama Anda. Sesuaikan hal ini dengan langkah ketiga diatas, yaitu untuk apa kekuatan dan nilai diri akan anda gunakan.
                            <br /><br />
                            Berdasarkan contoh diatas penyataan visi akan menjadi: <br /><br />
                            <span style={{ color: "#068238" }}>“Menjadi pengusaha roti dan kue kering di tahun 2021, agar bisa memiliki penghasilan sendiri dan tidak bergantung dengan keluarga”</span>
                            <br /><br />
                            Saat Anda selesai, tinjau pernyataan Anda yang sudah selesai. Itu harus dengan jelas menunjuk pada tujuan visi Anda dan mengatakan mengapa Anda ingin sampai di sana. Jika perlu lebih spesifik atau jelas, perbaiki sampai dua kalimat dengan jelas menjelaskan apa yang ingin Anda capai dan mengapa.
                        </li>
                        <br /><br />
                        <Grid container spacing={2}>
                            <Grid item xs={6} elevation={0}>
                                <Item>
                                    <li>
                                        <span class="module-subtitle2">Melahirkan orientasi</span>
                                        <br />
                                        Setelah misi ditetapkan, selanjutnya adalah melahirkan orientasi. Hal ini dilakukan untuk memberikan arahan ke mana harus bergerak. Pada tahap ini cukup diidentifikasi kebutuhannya saja, untuk langkah detailnya bisa dilakukan pada pembelajara topik tingkat berikutnya yaitu: <b>Perencanaan jangka pendek.</b>Untuk identifikasi awal dalam membangun orientasi dapat dituliskan kebutuhan yang pertama kali terpikirkan, hal ini bisa disempurnakan dan dilengkapi pada pembelajaran sesi berikutnya <b>(perencanaan jangka pendek)</b>
                                        <br /><br />
                                        Tuliskan pernyataan visi, contoh:
                                        <br /><br />
                                        <span style={{ color: "#068238" }}>“Menjadi pengusaha roti dan kue kering di tahun 2021, agar bisa memiliki penghasilan sendiri dan tidak bergantung dengan keluarga”</span>
                                        <br /><br />
                                        Identifikasi kebutuhan yang terpikirkan saat ini, dimana hal tersebut menjadi kualifikasi atau kondisi yang mampu mendukung visi, contoh:
                                        <br /><br />
                                        <span style={{ color: "#068238" }}>Kondisi yang dibutuhkan:</span>
                                        <i>
                                            <ol>
                                                <li>Menguasasi cara pembuatan roti ulang tahun, bolu black forest dan bolu marmer</li>
                                                <li>Menguasai cara pembuatan kue kering: nastaart, kue kacang, croissant</li>
                                                <li>Memiliki alat pembuatan roti dan kue kering</li>
                                                <li>Memiliki tempat untuk produksi dan berjualan</li>
                                            </ol>
                                        </i>
                                    </li>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item elevation={0}>
                                    <img src={C} style={{ width: '100%' }} />
                                </Item>
                            </Grid>
                        </Grid>
                    </ol>
                </div>
            </ >
        )
    }
}