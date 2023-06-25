import React from 'react';
import './Filter.css'
import { useDispatch } from 'react-redux';
import { filterContact } from 'components/redux/taskSlice';
const Filter =()=>{
        const dispatch = useDispatch();
        const handelFilter = e =>{
                dispatch(filterContact(e.target.value))
        }
return(
        <label className='filterData'>Find contacts by name
        <input className = 'filterInput' 
        type='text' 
        onChange={e=>handelFilter(e)}/>
        </label>
)
}


export default Filter;