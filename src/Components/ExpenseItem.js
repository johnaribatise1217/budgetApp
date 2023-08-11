import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from './AppContext'

const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext)

  const handleDeleteItem = () => {
    dispatch({
        type : 'DELETE ITEM',
        payload : props.id
    })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <span className='badge bg-danger badge-pill px-20 mr-3'>
            ${props.cost}
        </span>
        <TiDelete size='1.5rem' onClick={handleDeleteItem} className='cursor-pointer'> </TiDelete>
    </li>
  )
}

export default ExpenseItem
