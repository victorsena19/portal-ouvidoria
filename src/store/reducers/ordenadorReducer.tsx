import { createSlice,  PayloadAction} from "@reduxjs/toolkit";

interface PFGlobal{
    ordenador?: string;
}

const initialState: PFGlobal = {
    ordenador: "",
};

const ordenadorSlice = createSlice({
    name: "ordenador",
    initialState,
    reducers:{
        setOrdenador: (state, action:PayloadAction<string>) => {
            state.ordenador = action.payload;
        }
    }
    },
);


export default ordenadorSlice.reducer;
export const { setOrdenador } = ordenadorSlice.actions;