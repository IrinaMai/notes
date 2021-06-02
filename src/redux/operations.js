import {addNotesSuccess, getNotesSuccess, deleteNotesSucceess, chngNoteSuccess, setError, loading} from "./actions";
import axios from 'axios';

const BASE_URL = "https://todo-list-97e36-default-rtdb.europe-west1.firebasedatabase.app/";


const addNotesToDB = note => dispatch => {
    axios
        .post(`${BASE_URL}Notes.json`, note)
        .then(response => {
            dispatch(addNotesSuccess({ ...note, id: response.data.name }));
        })
        .catch(error => dispatch(setError('ooops samthing going wrong')))
};

const getNotesFromDB = () => dispatch => {
    axios
        .get(`${BASE_URL}Notes.json`)
        .then(response => {
            dispatch(getNotesSuccess(
            Object.keys(response.data).map(item => ({
            ...response.data[item],
            id: item,
            })),
            )) 
        
        })
        .catch(error => dispatch(setError('No one contact')))
};

const deletNoteFromDB = id => dispatch => {
    axios
        .delete(`${BASE_URL}Notes/${id}.json`)
        .then(() => {
            dispatch(deleteNotesSucceess(id));
        })
        .catch(error => dispatch(setError('ooops samthing going wrong')))
}

const chngNoteinBD = (id, isDone )=> dispatch => {
    axios
        .patch(`${BASE_URL}Notes/${id}.json`, {isDone})
        .then(() => {
           dispatch(chngNoteSuccess(id))
        })
        .catch(error => dispatch(setError('ooops samthing going wrong')))
}

export { addNotesToDB, getNotesFromDB, deletNoteFromDB, chngNoteinBD }