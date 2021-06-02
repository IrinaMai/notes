import { createAction } from "@reduxjs/toolkit";

const addNotesSuccess = createAction('@notes/AddSuccess');
const getNotesSuccess = createAction('@notes/GetSucces');
const deleteNotesSucceess = createAction('@notes/DeletSuccess')
const chngNoteSuccess = createAction('@notes/ChangeSuccess')
const filterHndl = createAction('@filter/AddFilter');
const filterClear = createAction('@filter/ClearFilter');
const setError = createAction('@notes/Error')
const loading = createAction('')

export {addNotesSuccess, getNotesSuccess, filterHndl, filterClear, deleteNotesSucceess, chngNoteSuccess, setError, loading};