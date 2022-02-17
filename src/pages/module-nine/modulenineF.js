import React, { Component } from 'react'
import F from "./images/F.png"

export default class ModuleNineF extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    F. STUDI KASUS UNTUK PENDALAMAN DAN LATIHAN
                </div>
                <div class="module-text" id="moduleonetext">
                   <img src={F} style={{width:'100%'}}/>
                </div>
            </ >
        )
    }
}