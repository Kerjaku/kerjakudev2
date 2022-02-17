import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import B1 from "./images/B1.png"
import B2 from "./images/B2.png"
import B3 from "./images/B3.png"

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleThreeB extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. NILAI DAN KEYAKINAN DIRI
                </div>
                <div class="module-text">
                    LNilai adalah hal yang diyakini penting menurut pribadi atau diri sendiri. Hal ini dipengaruhi dan didorong oleh karakteristik dan perilaku sehari – hari. Pada sesi ini akan membahas tentang pengenalan nilai- nilai, keyakinan, minat, kekuatan dan kelemahan.
                    <br /><br />
                    Nilai ini bersifat abstrak, namun hal tersebut menjadi pedoman bagi kehidupan dalam berperilaku di dalam bermasyarakat. Nilai erat kaitannya dengan tindakan sosial yang dilakukan oleh manusia kepada lingkungan sekitar.
                    <br /><br />
                    Berikut pengertian nilai menurut para ahli:
                    <br /><br />
                    <img src={B1} style={{ width: '50%' }} />
                    <img src={B2} style={{ width: '50%' }} />
                    <br /><br /><br /><br />
                    <img src={B3} style={{ width: '100%' }} />
                    Dalam menganalisis nilai – nilai yang paling diyakini, pilih/tentukan 5 nilai yang paling relevan dan mewakili di setiap bagian (diri, keluarga, masyarakat, perusahaan). Mulai dari Nilai Diri, cara paling mudah untuk mengidentifikasi adalah dengan mengingat dan memikirkan hal – hal yang mereka sukai, dapat mencerminkan nilai - nilai yang selama ini mereka yakini.
                    <br /><br />
                    Satu sama lain mungkin berbeda sehingga bisa dilihat nilai mana yg perlu dipegang dan perjuangkan sebagai pedoman dalam mengambil keputusan dan tindakan dalam kehidupan sehari – hari. Keluarga juga umumnya berpengaruh pada pembentukan nilai dan karakter seseorang. Keluarga petani,keluarga pengusaha, keluarga guru/PNS atau pun keluarga militer, memilikimasing – masing nilai yang dipegang.
                    <br /><br />
                    Demikian juga nilai yang muncul di mayarakat dan nilai yang umumnya dianut oleh pada pengusaha sukses, menunjukkan perbedaan dan mungkin persamaan. Umumnya, antara nilai keluarga, nilai sosial/masyarakat dan nilai pribadi menunjukkan kemiripan atau persamaan, tetapi akan berbeda dengan nilai -nilai yang dianggap penting oleh seorang pengusaha sukses. Hal yang membedakan adalah tujuan. Tujuan perusahaan adalah untuk memajukan usahanya.
                    <br /><br />
                    Penting untuk disadari bahwa untuk mencapai kesuksesan, ada nilai yg harus diperjuangkan yang mungkin tidak sejalan / sama dengan nilai pribadi dan masyarakat, maka nilai baru tersebut perlu mulai ditanamkan dalam diri.
                </div>
            </ >
        )
    }
}