import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getAllNotes, filteredList, getIsLoading } from '../../redux/selectors'
import { getNotesFromDB, deletNoteFromDB, chngNoteinBD } from '../../redux/operations'
import { filterClear, filterHndl } from '../../redux/actions';
import { Input, Button,  List, Switch } from 'antd';


const { Search } = Input;

const NoteList = () => {

    const dispatch = useDispatch();
    const notesList = useSelector(getAllNotes);
    const corrList = useSelector(filteredList);
    const isLoading = useSelector(getIsLoading);

 
    useEffect(() => {
        dispatch(getNotesFromDB())
    }, [notesList.length]);
    
    useEffect(() => {
        dispatch(filterClear())
    }, [corrList < 1])
 
    const hndlDelete = (e) => {
        dispatch(deletNoteFromDB(e.currentTarget.dataset.id))
    };

    const hndlChng = (isDone, e) => {
         dispatch(chngNoteinBD(e.currentTarget.dataset.id, isDone))
       }
    const hdlFilter = (e) => {
         dispatch(filterHndl(e));
    }

    const hdlFilterEnter = (e) => {
         dispatch(filterHndl(e.target.value));
    }
    const hndlOnChng = (e) => {
        dispatch(filterHndl(e.target.value));
    }


    return (
        <>
              
            {corrList.length > 0 && 
                <Search 
                placeholder="input search subject" 
                allowClear onChange={hndlOnChng} 
                onSearch={hdlFilter} 
                onPressEnter={hndlOnChng} 
                enterButton className="searchInput" />
            }
        <List
    itemLayout="horizontal"
    dataSource={corrList}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta className={item.isDone && "doneItem"}
          title={item.title}
          description={item.text}
        />
      
        <Switch checked={item.isDone? true : false}  checkedChildren="Done" unCheckedChildren="Wait" data-id={item.id} onChange={hndlChng} />
        <Button type="primary" danger data-id={item.id} onClick={hndlDelete} className="deleteBtn">Delete</Button>
      </List.Item>
    )}
  />,

        </>
    )
};

export default NoteList
