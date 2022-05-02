import React, { Component } from 'react'
import B from "./images/B.png"

export default class ModuleSevenB extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. PENGELOMPOKAN BUDAYA KERJA
                </div>
                <div class="module-text" id="moduleonetext">
                    Budaya kerja yang dianut dan berlaku di perusahaan atau dalam posisi tertentu dapat diasumsikan mewakili sektor tertentu, dapat dikelompokkan menjadi empat jenis. Mengenal tipe masing-masing akan membantu para pemuda yang akan bekerja atau berwirausaha untuk mempersiapkan diri. 
                    <br/><br/>
                    <span style={{ color: "#40A26E", fontWeight: 'bold' }}>Tipe budaya kerja tersebut adalah:</span>
                    <ol>
                        <li class="module-subtitle2">Budaya Klan</li>
                        Budaya klan menumbuhkan lingkungan kerja yang ramah. Orang-orang yang bekerja di perusahaan dengan budaya kerja ini biasanya memiliki banyak kesamaan. Mereka hampir serupa dengan sebuah keluarga besar dan pimpinan atau jajaran eksekutif dianggap sebagai mentor atau sosok penaung.
                        <br /><br />
                        Organisasi ini dipersatukan oleh kesetiaan dan tradisi. Semua staf terlibat secara aktif dalam berbagai proyek dan pengambilan keputusan. Organisasi menekankan pengembangan Sumber Daya Manusia jangka panjang dan mengikat sesama dengan nilai moral. Organisasi mengangkat nilai kerjasama, partisipasi dan permufakatan. Sementara itu, sukses didefinisikan dalam lingkup memenuhi kebutuhan klien dan peduli terhadap sesama.
                        <br /><br />
                        <div class="rightaligntext">
                            <div style={{ color: "#40A26E" }}>BUDAYA KERJA</div>
                            Model Klan
                            <div style={{ color: "#40A26E" }}>TIPE PEMIMPIN</div>
                            Fasilitator | Mentor | Pembentuk Tim
                            <div style={{ color: "#40A26E" }}>NILAI INTI</div>
                            Komitmen | Komunikasi | Perkembangan
                        </div>
                        <br /><br />
                        <img src={B} class="moduleimgwide" />
                        <li class="module-subtitle2">Budaya Adokrasi</li>
                        Perusahaan penganut budaya kerja ini mengembangkan lingkungan kerja yang dinamis dan kreatif. Pemimpin berperan sebagai inovator yang cenderung berani pengambil risiko. Sehingga karyawan dituntut untuk berani menghadapi tantangan. Riset dan inovasi menjadi bagian penting dalam perusahaan ini. Dalam jangka panjang perusahaan ingin menumbuhkan dan menciptakan sesuatu yang inovatif, sehingga kemunculan produk/layanan inovatif menjadi ukuran kesuksesan. Perusahaan dengan budaya kerja ini biasanya memberikan kebebasan individu untuk mengasah inisiatif secara lebih bebas.
                        <div class="rightaligntext">
                            <div style={{ color: "#40A26E" }}>BUDAYA KERJA</div>
                            Model Adokrasi
                            <div style={{ color: "#40A26E" }}>TIPE PEMIMPIN</div>
                            Inovator | Visioner
                            <div style={{ color: "#40A26E" }}>NILAI INTI</div>
                            Inovasi | Transformasi | Kelincahan
                        </div>
                        <li class="module-subtitle2">Budaya Pasar (Market)</li>
                        Perusahaan penganut budaya ini terpacu oleh persaingan untuk kelangsungan hidupnya. Pada perusahaan ini basis yang digunakan adalah hasil akhir, sehingga penyelesaian penugasan sangat ditekankan. Pemimpin berperan sebagai poros penggerak yang tegas. Fokus jangka panjangnya adalah untuk memenangkan pasar sehingga pencapaian target jangka pendek menjadi penting dan ditekankan.
                        <div class="rightaligntext">
                            <div style={{ color: "#40A26E" }}>BUDAYA KERJA</div>
                            Model Pasar 
                            <div style={{ color: "#40A26E" }}>TIPE PEMIMPIN</div>
                            Penggerak yang tegas | Kompetitor | Produser
                            <div style={{ color: "#40A26E" }}>NILAI INTI</div>
                            Pasar | Pencapaian Tujuan | Keuntungan
                        </div>
                        <li class="module-subtitle2">Budaya Hierarki</li>
                        Perusahaan dengan budaya hierarki memiliki lingkungan kerja yang formal, terstruktur dan sangat prosedural. Menjaga organisasi agar berfungsi sebagaimana mestinya menjadi fokus utama. Tujuan jangka panjangnya adalah stabilitas dan hasil dengan proses yang efisien dalam penyelesaian penugasan. 
                        <div class="rightaligntext">
                            <div style={{ color: "#40A26E" }}>BUDAYA KERJA</div>
                            Model Hierarki
                            <div style={{ color: "#40A26E" }}>TIPE PEMIMPIN</div>
                            Koordinator | Organisator | Monitor
                            <div style={{ color: "#40A26E" }}>NILAI INTI</div>
                            Efisiensi | Konsistensi | Keseragaman
                        </div>
                    </ol>
                </div>
            </ >
        )
    }
}