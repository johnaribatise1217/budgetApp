import React, { useContext, useEffect } from 'react'
import { AppContext } from './AppContext'

const Remaining = () => {
  const {budget , expenses} = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0)

  const remainingAmount = budget - totalExpenses

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${remainingAmount}</span>
    </div>
  )
}

export default Remaining
