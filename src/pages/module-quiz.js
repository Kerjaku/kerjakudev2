import React, { Component } from 'react'
import Button from '@mui/material/Button';

import quizzes from "./quizzes.json"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

let quizResponses = []
let correctResponses = []
let quizScore = 0;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};


export default class ModuleQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showFail: false
        };
        this.showModal = this.showModal.bind(this);
    }

    handleSubmit(module, username) {
        if (module > 1) {
            module = module + 1
        }
        if (window.localStorage.getItem('module') > module) {
            console.log("here")
        }else {
            fetch('https://z8ham5h1hb.execute-api.us-east-1.amazonaws.com/api/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, module: Number(module), password: 'null' })
            });
            window.localStorage.setItem('module', JSON.stringify(Number(module)));
        }
    }

    showModal = () => {
        this.setState({ show: true });
    };

    showModalFail = () => {
        this.setState({ showFail: true });
    };

    hideModalFail = () => {
        this.setState({ showFail: false });
    };

    handleChange(quizquestionum, correctOption, event) {
        quizResponses[Number(quizquestionum)] = event.target.value
        correctResponses[Number(quizquestionum)] = correctOption
    };

    submitQuiz(modulenum, username) {
        quizScore = 0;
        for (let i = 0; i < correctResponses.length; i++) {
            if (correctResponses[i] == quizResponses[i]) {
                quizScore++;
            }
        }
        quizScore = quizScore / quizResponses.length

        if (quizScore > 0.75) {
            this.handleSubmit(modulenum, username)
            this.showModal()
        } else {
            this.showModalFail()
        }
    };

    quizquestions = quizzes[this.props.modulenumber].quizquestions.map((quiz) => {
        return (
            <div class="module-text">
                <span style={{ fontWeight: "bold", color: "#068238" }}>{quiz.quizquestion}</span>
                <br />
                <FormControl>
                    <RadioGroup onChange={(e) => this.handleChange(quiz.quizquestionnum, quiz.correctOption, e)} name={quiz.quizQuestionNumber}>
                        <FormControlLabel value="optionA" control={<Radio />} label={quiz.optionA} />
                        <FormControlLabel value="optionB" control={<Radio />} label={quiz.optionB} />
                        <FormControlLabel value="optionC" control={<Radio />} label={quiz.optionC} />
                        <FormControlLabel value="optionD" control={<Radio />} label={quiz.optionD} />
                    </RadioGroup>
                </FormControl>
            </div>
        )
    })

    render() {
        quizResponses = []
        return (
            <>
                <Modal open={this.state.show} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">Quiz passed!</Typography>
                        <div class="module-button">
                            <Link to="/kerjakudev2/etrainingHome" style={{ textDecoration: "none" }}><Button variant="contained">Return to ETraining Home</Button></Link>
                        </div>
                    </Box>
                </Modal>
                <Modal open={this.state.showFail} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">Quiz failed.</Typography>
                        <div class="module-button">
                            <Button variant="contained" onClick={this.hideModalFail}>Try Again</Button>
                        </div>
                    </Box>
                </Modal>
                
                <div class="module-page-title" id="moduleonename">
                    {quizzes[this.props.modulenumber].quiztitle}
                </div>
                
                {this.quizquestions}
                
                <div id="quizResult"></div>
                <div class="module-button">
                    <Button variant="contained" onClick={() => this.submitQuiz(Number(this.props.modulenumber) + 1, this.props.username)}>Kirim Kuis</Button>
                </div>
            </ >
        )
    }
}