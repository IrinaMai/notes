import React from "react";
import {useSelector } from 'react-redux';
import {getError} from './redux/selectors'

import { Typography, Alert } from 'antd';
import 'antd/dist/antd.css';
import NotesForm from "./components/notesForm/NotesForm"
import NoteList from "./components/notesList/NotesList";

const { Title } = Typography;

function App() {
  const errorMsg = useSelector(getError)
  return (
    <>
    {errorMsg && <Alert message={errorMsg} type="error" />}
    <Title> NOTEMAKER</Title>
      <NotesForm />
      <NoteList />
    </>
  );
}

export default App;
