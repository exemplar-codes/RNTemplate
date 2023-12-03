import {createSelector} from '@reduxjs/toolkit';

export const miscSliceSelector = store => store.misc;

export const miscDataSelector = createSelector(
  miscSliceSelector,
  miscSlice => miscSlice.data,
);
