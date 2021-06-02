import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNotesToDB } from '../../redux/operations';
import { Form, Input, Button, Typography } from 'antd';
import {getError} from '../../redux/selectors'



const NotesForm =() => {
    const dispatch = useDispatch();
    const errorMsg = useSelector(getError)

    const hndlSubmit =(e) => {
        dispatch(addNotesToDB({...e, isDone:false}));
     };

    return (
       
            <Form  onFinish={hndlSubmit} name="add-notes" className="form">
                <Form.Item
                    
                        name="title"
                        label="Subject"
                        rules={[
                        {
                            required: true,
                        },
                    ]}
                    >
                    <Input name="title"  placeholer="Titel of notes" />
                </Form.Item>
                        <Form.Item
                        name="text"
                        label="Note"
                        rules={[
                        {
                            required: true,
                        },
                    ]}
                    >
                    <Input name="text"  placeholer="Text of notes" />
                    </Form.Item>

            <Button type="primary" htmlType="submit"  >Add Note</Button>
             
            </Form>

    )
};

export default NotesForm