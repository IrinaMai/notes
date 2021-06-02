import { createReducer } from "@reduxjs/toolkit";
import {addNotesSuccess, getNotesSuccess, filterHndl, filterClear, deleteNotesSucceess, chngNoteSuccess, setError} from "./actions";

const initialState = {
    notesList: [],
    filter: "",
    error: "",
}

export const notesReducer = createReducer(
    { ...initialState },
    {
        [addNotesSuccess]: (state, action) => ({
            ...state, notesList: [...state.notesList, action.payload], error: ""
        }),
        [getNotesSuccess]: (state, action) => ({
            ...state, notesList: [...action.payload], error: ""
        }),
        [filterHndl]: (state, action) => ({...state, filter: action.payload}),
        [filterClear]: (state, action) => ({ ...state, filter: '' }),
        [deleteNotesSucceess]: (state, action) => ({
            ...state, notesList: [...state.notesList.filter(item => item.id !== action.payload)], error: ""
        }),
        [chngNoteSuccess]: (state, action) => ({
            ...state, notesList: [...state.notesList.map(item => item.id !== action.payload ? item : ({...item, isDone: !item.isDone }))], error: ""
        }),
        [setError]: (state, action) => ({
            ...state, error: action.payload
        })
    }
)