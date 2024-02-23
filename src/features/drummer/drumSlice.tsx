import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DrumState{
    key: string
}

const initialState: DrumState = {
    key: "none"
}

export const drumSlice = createSlice({
    name: 'drum',
    initialState,
    reducers:{
        Q: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
            audio.play();
            state.key = "Heater 1";
        },
        W: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
            audio.play();
        },
        E: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
            audio.play();
        },
        A: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
            audio.play();
        },
        S: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
            audio.play();
        },
        D: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
            audio.play();
        },
        Z: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
            audio.play();
        },
        X: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
            audio.play();
        },
        C: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
            audio.play();

        }
    }
})