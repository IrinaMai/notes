import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addNotesToDB } from '../../redux/operations';
import { Form, Input, Button } from 'antd';

const initialState = {
    title: "",
    text: "",
    isDone: false
}
const NotesForm =() => {
    const [state, setState] = useState({...initialState});
    const dispatch = useDispatch();

    const hndlSubmit =(e) => {
        e.preventDefault();
        console.log(Form.validateFields)
        dispatch(addNotesToDB(state));
        setState({ ...initialState });
    };

    const hndlInput =(e) => {
        const {name, value} = e.target;
        setState((prev) => ({...prev, [name]:value}));
    }



    return (
        <>
        <Form onSubmit = {hndlSubmit}>
            <label> Title
                <input name="title" value={state.title} placeholed="Titel of notes" onChange={hndlInput}/>
            </label>  
            <label> Note
                <input name="text" value={state.text} placeholed="Notes" onChange={hndlInput}/>
            </label> 
            <button type="submit" >Add Note</button>
        </Form>
        </>
    )
};

export default NotesForm