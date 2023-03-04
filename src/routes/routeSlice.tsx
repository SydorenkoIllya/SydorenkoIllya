import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IRoutesInitialState {
    isLogged: boolean,
    timesClicked: number
}

const savedLogInfo = localStorage.getItem('logged') ? Boolean(localStorage.getItem('logged')) : false
const initialState: IRoutesInitialState = {
    isLogged: savedLogInfo,
    timesClicked: 1
}



export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setLogIn: (state, action: PayloadAction<boolean>) => {
            state.isLogged = true
            if (action.payload) {
                localStorage.setItem('logged', String(action.payload))
            }
        },
        setLogOut: state => {
            state.isLogged = false
            localStorage.clear()
        },
        plusTimesClicked: state => {
            state.timesClicked += 1
        }
    }
})

export const { actions, reducer } = routeSlice

export const { setLogIn, setLogOut, plusTimesClicked } = actions