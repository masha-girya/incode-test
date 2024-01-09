import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalItem } from 'src/utils';
import { STORAGE_CONSTANTS } from 'src/constants';
import { IBoard } from '@/types';

const localStorageId = getLocalItem(STORAGE_CONSTANTS.boardId);
const boardId = localStorageId ? JSON.parse(localStorageId) : '';
const board = null;

interface IInitialState {
  board: IBoard | null;
  boardId: string;
}

const initialState: IInitialState = {
  board,
  boardId,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard: (state, action: PayloadAction<IBoard>) => {
      state.board = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.boardId = action.payload;
    },
    removeId: (state) => {
      state.boardId = '';
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
