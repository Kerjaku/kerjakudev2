import React, { Component } from 'react'
import B2 from "./images/B2.png"

export default class ModuleOneB2 extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    B. Mengenali Potensi Diri Dan Kecenderungan Kepribadian
                </div>
                <div class="module-text-subtitle" id="moduleonesubtitle" >
                    1 . Pengenalan potensi diri
                </div>
                <div class="module-text" id="moduleonenobottompadding">
                    Potensi diri adalah segenap kemampuan yang sudah dimiliki setiap individu/ seseorang sehingga bila dikembangkan memungkinkannya untuk mencapai prestasi tertentu.
                    <br /><br />
                    Dunia sekolah sebelumnya mungkin kurang dalam memperhatikan potensi diri seseorang yang dapat membantunya dalam kehidupan dan dunia kerja yang akan dipilihnya. Urgensi untuk mengenali potensi diri saat ini semakin kuat dengan banyaknya orang yang sudah sadar bahwa potensi diri yang ada padanya harus dioptimalkan dengan ditemukan, digali, dan ditumbuhkembangkan.
                    <br /><br />
                    Berikut beberapa macam potensi diri:
                </div>
                <img class="moduleimgwide" style={{width:'50%'}} src={B2} />
            </ >

        )
    }
}