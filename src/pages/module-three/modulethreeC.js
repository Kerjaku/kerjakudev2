import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import C from "./images/C.png"
import C2 from "./images/C2.png"
import C3 from "./images/C3.png"
import C4 from "./images/C4.png"
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleThreeC extends Component {
    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    C. MENGENAL DAN MENGIDENTIFIKASI NILAI SOSIAL
                </div>
                <div class="module-text">
                    Pengertian nilai sosial secara khusus dan umum, dapat diambil dari serangkaian pendapat para ahli, antara lain;
                    <br /><br />
                    <img src={C} style={{ width: '50%' }} />
                    <img src={C2} style={{ width: '50%' }} />
                    <br /><br />
                    Dari penjelasan mengenai pengertian nilai sosial menurut para ahli di atas, dapat disimpulkan bahwa nilai sosial adalah prosesi rutinitas masyarakat yang dianggap sebagai ukuran dalam menentukan untuk dikatakan baik atau buruk, pantas atau tidak pantas.
                    <br /><br />

                    Klarifikasi (atau klasifikasi?) nilai sosial yang ada di dalam masyarakat tersebut dipengaruhi oleh banyak faktor yang melatarbelakanginya, misalnya saja faktor kebudayaan yang dianut masyarakat. Hal ini yang mengakibatkan antara masyarakat yang satu dan yang lain terdapat perbedaan dalam menentukan tata nilai sosialnya.
                    <br /><br />
                    <span style={{color:"#40A26E", fontWeight:'bold'}}>Berikut beberapa contoh nilai sosial yg berlaku di masyarakat:</span>

                    <Grid container spacing={2}>
                        <Grid item xs={6} elevation={0}>
                            <Item>
                                <img src={C3} style={{ width: '100%' }} />

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                                <img src={C4} style={{ width: '100%' }} />

                            </Item>
                        </Grid>
                    </Grid>
                    <br /><br />
                    Perlu disadari bahwa nilai – nilai yang berlaku di masyarakat dan dianut oleh individu anggota masyarakat tersebut serta membawa seseorang berkembang dan maju, hal ini yang menghambat perubahan sosial masyarakat itu sendiri.
                </div>
            </ >
        )
    }
}