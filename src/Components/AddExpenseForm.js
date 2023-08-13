import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from './AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
  const [name , setName] = useState('')  
  const [cost, setCost] = useState('')
  const {dispatch} = useContext(AppContext)

  const handleClick = (e) =>{
    e.preventDefault()

    const expense = {
        id: uuidv4(),
        name : name,
        cost: parseInt(cost),
    }
    
    dispatch({
        type : 'ADD EXPENSE',
        payload : expense,
    })

    setName('')
    setCost('')
  }

    useEffect(() => {
        let storedItems = JSON.parse(localStorage.getItem('expenses'))
        if (storedItems) {
            dispatch({ type: 'ADD EXPENSE', payload: storedItems });
        }
    }, [])

  return (
    <form onSubmit={handleClick}>
        <div className="row">
            <div className='col-sm'>
                <label for='name'>Name</label>
                <input type="text" className='form-control' id='name' required='required' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='col-sm'>
                <label htmlFor="cost">Cost</label>
                <input type="text" id='cost' required='required' className='form-control' value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <div className="row">
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseForm
