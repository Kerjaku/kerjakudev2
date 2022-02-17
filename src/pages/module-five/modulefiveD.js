import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import D1 from "./images/D1.png"
import D2 from "./images/D2.png"
import D3 from "./images/D3.png"

const Item = styled(Paper)(({ theme }) => ({
    elevation: 0,
    boxShadow: 'none'
}));

export default class ModuleFiveD extends Component {

    render() {
        return (
            <>
                <div class="module-page-title" id="moduleonename">
                    D. STUDI KASUS DAN PENDALAMAN
                </div>
                <div class="module-text" id="moduleonetext">
                    <Grid container spacing={2}>
                        <Grid item xs={6} elevation={0}>
                            <Item>
                                <img src={D1} style={{ width: '100%' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                                <img src={D3} style={{ width: '100%' }} />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item elevation={0}>
                                <img src={D2} style={{ width: '100%' }} />
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </ >
        )
    }
}