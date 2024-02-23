import { createSlice } from '@reduxjs/toolkit'

export interface DrumState{
    key: string
}

const initialState: DrumState = {
    key: ""
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
            state.key = "Heater 2";

        },
        E: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
            audio.play();
            state.key = "Heater 3";

        },
        A: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
            audio.play();
            state.key = "Heater 4";

        },
        S: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
            audio.play();
            state.key = "Clap";

        },
        D: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
            audio.play();
            state.key = "Open-HH";

        },
        Z: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
            audio.play();
            state.key = "Kick-n'-Hat";

        },
        X: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
            audio.play();
            state.key = "Kick";

        },
        C: (state) => {
            var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
            audio.play();
            state.key = "Closed-HH";

        }
    }
})

export const { Q, W, E, A, S, D, Z, X, C} = drumSlice.actions;

export default drumSlice.reducer;