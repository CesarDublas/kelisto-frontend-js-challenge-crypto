import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { getCryptoList, refreshCryptoList } from './cryptoApi';
import { Crypto } from './Crypto';

export interface cryptoState {
  list: Crypto[];
  name: string;
  total: number;
}

const initialState: cryptoState = {
  list: [],
  name: 'Anakin',
  total: 0,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    calculateTotals: (state) => {
      state.total=state.list.reduce((acc: number, curr: Crypto) => acc + curr.stock, 0);
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    getList: (state) => {
      state.list = getCryptoList();
    }, 
    refreshList: (state) => {
      state.list = refreshCryptoList();
    }, 
  },

});

export const { calculateTotals, changeName, refreshList, getList } = cryptoSlice.actions;

export const selectTotal = (state: RootState) => state.crypto.total;
export const selectName = (state: RootState) => state.crypto.name;
export const selectList = (state: RootState) => state.crypto.list;

export default cryptoSlice.reducer;
