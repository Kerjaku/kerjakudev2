import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import D from "./images/D.png"
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleTwoD extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    D. MENGIKIS Mental block
                </div>
                <div class="module-text">
                    Perlu diingat kembali bahwa mental block merupakan hasil pemrograman dengan durasi waktu yang cukup lama, sehingga harus dimengerti bahwa akan diperlukan upaya yang konsisten dalam waktu yang tidak instan agar pemrograman mental block dapat perlahan dikikis. Beberapa latihan dalam kondisi riil sangat diperlukan untuk mencapai keberhasilan dalam mengikis mental block.
                    <br />
                    Strategi dalam mengikis mental block tersebut, dapat dilakukan melalui latihan berulang pada aspek:
                    <div class="module-subtitle2">1. Menemukenali mental block</div>
                    Sebagaimana telah dilakukan pada sesi sebelumnya, sangat krusial pada pertama kali untuk mengenali jenis mental block yang ada dalam diri seseorang. Hal ini merupakan langkah awal agar dapat menentukan treatment pengikisan yang tepat.
                    <div class="module-subtitle2">2. Rekonstruksi pola pikir negatif</div>
                    Pola pikir negatif dapat menyebabkan bias pemrosesan informasi, dimana hal ini dapat menambah keterpurukan. Merekonstruksi pola pikir negatif dimulai dari peristiwa yang membutuhkan respon yang dianggap sulit dan memaksa seseorang keluar dari kenyamanan mereka. Hal ini memerlukan latihan dan harus dilakukan secara berulang-ulang untuk memrogram pola pikir seseorang.
                    <br /> <br />
                    Contoh dari langkah ini misalnya ketika seseorang diminta untuk menyampaikan pendapatnya di muka umum, maka konstruksi pemikiran negatif yang muncul adalah takut salah atau takut ditertawakan, sehingga tindakan yang muncul adalah seseorang menolak atau hanya diam saja. Dalam situasi ini perlu dilatih merekonstruksi pemikiran seperti: ini pendapat saya, setiap orang memiliki sudut pandang yang berbeda, membuat forum mengetahui pendapat akan membuat saya mendapatkan masukan yang berguna, pendapat saya mungkin bisa menginsiprasi orang lain dan seterusnya.
                    <div class="module-subtitle2">3. Tindakan nyata</div>
                    Ketika pemikiran telah terekonstruksi maka harus diambil tindakan nyata yang didukung oleh pemikiran yang telah terekonstruksi tersebut. Hal ini mungkin terasa sulit pada percobaan pertama, namun semakin mudah dalam percobaanpercobaan berikutnya. Dengan demikian forum-forum terarah seperti kelas motivasi dan kelas pelatihan menjadi kesempatan yang berharga untuk memulai tindakan.Dalam contoh situasi yang disampaikan sebelumnya, maka konstruksi pemikiran bahwa tidak ada yang salah dengan menyampaikan pendapat saya dalam forum, maka hal tersebut harus diwujudkan dengan berbicara pada forum. Selanjutnya, tindakan nyata dapat dilatih dalam kehidupan sehari-hari dan harus dilakukan secara terus menerus sampai pemograman pemikiran terbentuk.
                    <div class="module-subtitle2">4. Ambil aktivitas pendukung </div>
                    Untuk mewujudkan tindakan nyata setelah pemikiran terekonstruksi, beberapa hal dapat dilakukan untuk mendukung terwujudnya tidakan nyata seperti:
                    <Grid container spacing={2}>
                        <Grid item xs={8} elevation={0}>
                            <Item>
                                <ul>
                                    <li>Menuliskan alasan dan manfaat kenapa seseorang harus berubah dan manfaat yang akan diterima merupakan langkah efektif untuk memberikan dorongan bagi terwujudnya tindakan nyata.</li>
                                    <li>Sempatkan membaca rujukan terkait, dimana hal ini dapat dimulai dari artikel-artikel pendek yang ringan. Misalnya terkait tips berbicara di depan umum atau kisah-kisah motivasional yang dapat menginspirasi.</li>
                                    <li>Menerapkan keteraturan, terutama pada 2 aspek sebagai prioritas, yaitu: olah raga dan istirahat yang cukup. Hal tersebut dapat membantu meningkatkan konsentrasi dalam melakukan tindakan nyata.</li>
                                </ul>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={0}>
                                <img src={D} style={{ width: '100%' }}></img>
                            </Item>
                        </Grid>
                    </Grid>
                    <div class="module-subtitle2">5. Lakukan pemantauan </div>
                    Seseorang harus melihat perkembangan upaya yang mereka lakukan dalam mengikis mentalblock, hal tersebut akan mudah dilakukan jika seseorang memiliki catatan. Progres yang baik perlu dikenali untuk meningkatkan motivasi dan memberikan penghargaan bagi diri sendiri. Sementara jika progres yang diharapkan belum muncul dapat dilakukan beberapa hal untuk membantu proses, seperti memperluas rujukan, menemukan peer-support dan mengakses layanan konsultasi pengembangan diri yang disediakan oleh lembaga pendampingan atau pihak terkait lainnya.
                </div>
            </ >
        )
    }
}