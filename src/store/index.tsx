import { configureStore } from '@reduxjs/toolkit';
import modalPerguntasFrequentesReducer from './reducers/modalPerguntasFrequentesReducer';
import ordenadorReducer from './reducers/ordenadorReducer';
const store = configureStore({
    reducer: {
        modalPerguntasFrequentes: modalPerguntasFrequentesReducer,
        ordenador: ordenadorReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;