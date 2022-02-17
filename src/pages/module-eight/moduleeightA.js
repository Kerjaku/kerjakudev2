import React, { Component } from 'react'
import A from "./images/A.png"

export default class ModuleEightA extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    A. KONSEP PELUANG
                </div>
                <div class="module-text" id="moduleonetext">
                    Peluang dapat dimaknai sebagai kesempatan dalam konteks yang sangat luas. Namun pada bahasan ini peluang didefinisikan sebagai suatu kondisi/situasi yang membuka kemungkinan bagi anak muda untuk memperoleh pendapatan guna memperbaiki/meningkatkan kualitas hidup. Peluang memperoleh pendapatan yang dimaksud adalah dengan cara bekerja sebagai karyawan ataupun sebagai wirausaha. Perlu dipahami bahwa untuk menjadi karyawan ataupun wirausaha membutuhkan skill atau kecakapan. Sehingga kondisi yang memungkinkan pemuda untuk meningkatkan skillterkait juga dapat dimaknai juga sebagai peluang ‘peningkatan kapasitas’ dimana hal ini nantinya akan mendukung peluang kerja/wirausaha.
                    <br/><br/>
                    <img src={A} class="moduleimgwide"/>
                    Pemuda perlu memahami bahwa tidak semua peluang muncul dengan sendirinya di depan pintu, namun ada saatnya peluang harus dikelola. Tanpa pengelolaan, peluang hanya akan menjadi peluang tanpa makna dan tidak akan bisa mengubah kualitas kehidupan pemuda menjadi lebih baik.
                </div>
            </ >
        )
    }
}