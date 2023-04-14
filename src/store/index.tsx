import { configureStore } from '@reduxjs/toolkit';
import modalPerguntasFrequentesReducer from './reducers/modalPerguntasFrequentesReducer';
const store = configureStore({
    reducer: {
        modalPerguntasFrequentes: modalPerguntasFrequentesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;