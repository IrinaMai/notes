import { createSelector } from '@reduxjs/toolkit';

const getAllNotes = state => state.notesList;
const getFilter = state => state.filter;
const getIsLoading = state => state.isLoading

const filteredList = createSelector(
  [getAllNotes, getFilter],
  (notesList, fil) => {
    return notesList.filter(item =>
      item.title.toLowerCase().includes(fil.toLowerCase()),
    );
  },
);




export {getAllNotes, getFilter, filteredList, getIsLoading}