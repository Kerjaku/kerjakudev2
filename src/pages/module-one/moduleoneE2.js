import React, { Component } from 'react'
import E2 from "./images/E2.png"

export default class ModuleOneE2 extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    E. Mengenali Kepribadian Dengan Metode DISC
                </div>
                <div class="module-text" id="moduleonetext" style={{paddingBottom:0, marginBottom:0}}>
                    Berikut penjelasan tentang masingmasing kepribadian berdasarkan metode DISC:
                    <br/><br/>
                    <div class="yellow-subtitle">
                        DOMINANCE / DOMINAN
                    </div>
                    Dominan dalam sisi positif menunjukkan jenis karakter yang menggambarkan kepemimpinan. Dominasinya mampu menjaga sebuah organisasi tetap berjalan sesuai dengan yang direncanakan. Sekalipun demikian, dominasinya beralasan karena orang ini adalah seorang pemikir yang kritis, tidak suka ada hal yang mengganjal dan cenderung gamblang/spontan. Orientasinya selalu pada jalan keluar terbaik yang bisa ditempuh.
                    <br/><br/>
                    <div class="yellow-subtitle">
                        INFLUENCE / BERPENGARUH
                    </div>
                    Pengaruh yang dimilikinya justru memberi dampak stabilitas pada sebuah organisasi. Seorang penggembira yang tidak menyukai hubungan yang buruk, seorang yang kreatif dan cenderung memiliki empati yang tinggi. Pengaruhnya dapat menjadi motivasi bagi yang lain dengan cara-cara yang unik.
                    <br/><br/>
                    <div class="yellow-subtitle">
                        STEADINESS / STABIL / TEGUH PENDIRIAN
                    </div>
                    Tenang dan menghanyutkan. Karakter yang dimiliki cukup tenang dalam menjalankan pekerjaan dan bahkan bisa menyelesaikan pekerjaan tanpa berhimpitan dengan deadline. Seorang administratif yang baik dalam mengatur hal-hal yang ada dalam lingkup tanggungjawab maupun sekelilingnya. Agak sedikit kaku karena menjadi seorang yang taat pada aturan-aturan yang sudah ditentukan. Semuanya dilakukan untuk menjaga kestabilan kerja yang diharapkannya.
                    <br/><br/>
                    <div class="yellow-subtitle">
                        COMPLIANCE / PEMENUH / TAAT ATURAN
                    </div>
                    Seorang dengan tingkat ketelitian yang tinggi dan detil dalam menyikapi sesuatu hal. Ketelitiannya dapat membantu menemukan hal-hal yang seringkali luput dari perhatian dan pemikiran orang lain. Ketelitiannya juga disertai dengan ketekunan sehingga tampil sebagai seorang yang perfeksionis dan terbiasa dengan pekerjaan yang tanpa celah serta dapat dilihat akurasi validitasnya. Seorang pekerja keras dan tidak pernah bekerja setengah-setengah.
                </div>
                <img src={E2} class="moduleimgwide" style={{width:'50%'}}/>
            </ >
        )
    }
}