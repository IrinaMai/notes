import {addNotesSuccess, getNotesSuccess, deleteNotesSucceess, chngNoteSuccess, setError, loading} from "./actions";
import axios from 'axios';

const BASE_URL = "https://todo-list-97e36-default-rtdb.europe-west1.firebasedatabase.app/";


const addNotesToDB = note => dispatch => {
    dispatch(loading());
    axios
        .post(`${BASE_URL}Notes.json`, note)
        .then(response => {
            dispatch(addNotesSuccess({ ...note, id: response.data.name }));
        })
        .catch(error => dispatch(setError('ooops samthing going wrong')))
    .finally(dispatch(loading()))
};

const getNotesFromDB = () => dispatch => {
    dispatch(loading());
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
        .finally(dispatch(loading()))
};

const deletNoteFromDB = id => dispatch => {
     dispatch(loading());
    axios
        .delete(`${BASE_URL}Notes/${id}.json`)
        .then(() => {
            dispatch(deleteNotesSucceess(id));
        })
        .catch(error => dispatch(setError('ooops samthing going wrong')))
        .finally(dispatch(loading()))

}

const chngNoteinBD = id => dispatch => {
    dispatch(loading());
    axios
        .patch(`${BASE_URL}Notes/${id}.json`, {isDone: true})
        .then(() => {
           dispatch(chngNoteSuccess(id))
        })
        .catch(error => dispatch(setError('ooops samthing going wrong')))
        .finally(dispatch(loading()))


}

export { addNotesToDB, getNotesFromDB, deletNoteFromDB, chngNoteinBD }