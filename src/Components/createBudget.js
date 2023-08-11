import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext'

const CreateBudget = () => {
  const [budget , setBudget] = useState('')
  const {dispatch} = useContext(AppContext)

  const enterBudget = (e) => {
    e.preventDefault()

    const newBudget = parseInt(budget)

    dispatch({
        type: "ADD BUDGET",
        payload :newBudget
    })

    setBudget('')
  }

  return (
    <div className='row'>
      <div className='col-sm'>
        <input type='text' className='form-control' id='budget' required='required' value={budget} onChange={(e) => setBudget(e.target.value)} />
      </div>
      <div className='col-sm'>
        <button type="submit" className='btn btn-primary' onClick={enterBudget}>
            Add Budget
        </button>
      </div>
    </div>
  )
}

export default CreateBudget
