import { createSelector } from '@reduxjs/toolkit';
import NoteList from '../components/notesList/NotesList';

const getAllNotes = state => state.notesList;
const getFilter = state => state.filter;
const getIsLoading = state => state.isLoading;
const getError = state => state.error;

const filteredList = createSelector(
  [getAllNotes, getFilter],
  (notesList, fil) => {
      return notesList.filter(item =>
        item.title.toLowerCase().includes(fil.toLowerCase()),
      );

  },
);




export {getAllNotes, getFilter, filteredList, getIsLoading, getError}