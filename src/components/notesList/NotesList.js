import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getAllNotes, filteredList, getIsLoading } from '../../redux/selectors'
import { getNotesFromDB, deletNoteFromDB, chngNoteinBD } from '../../redux/operations'
import { filterClear, filterHndl } from '../../redux/actions'


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
        dispatch(deletNoteFromDB(e.target.dataset.id))
    };

    const hndlChng = (e) => {
        dispatch(chngNoteinBD(e.target.dataset.id))

        
    }
    const hdlFilter = (e) => {
        dispatch(filterHndl(e.target.value));
    }


    return (
        <>
            {isLoading && (
        <Loader
          type="TailSpin"
          color="#6699FF"
          height={30}
          width={30}
        //   className={loader}
        />
            )}
            
            {corrList.length > 0 && 
            <label>
                Find note
                 <input name="filter"  onChange={hdlFilter} />
            </label>}
            <ul>
                {corrList.length > 0 && corrList.map(({id, title, text}) => (
                    <li key={id}>{title}, {text}
                        <button type="button" data-id={id} onClick={hndlChng} >Done</button>
                        <button type="button" data-id={id} onClick={hndlDelete}>Delete</button>
                    </li>
                    
                ))}
            </ul>

        </>
    )
};

export default NoteList