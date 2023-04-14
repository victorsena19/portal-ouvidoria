import { createSlice,  PayloadAction} from "@reduxjs/toolkit";

interface PFGlobal{
    modal: boolean;
}

const initialState: PFGlobal = {
    modal: false,
};

const modalPerguntasFrequentesSlice = createSlice({
    name: "modalPerguntasFrequentes",
    initialState,
    reducers:{
        setModalPerguntasFrequentes: (state, action:PayloadAction<boolean>) => {
            state.modal = action.payload;
        }
    }
    },
);


export default modalPerguntasFrequentesSlice.reducer;
export const { setModalPerguntasFrequentes } = modalPerguntasFrequentesSlice.actions;