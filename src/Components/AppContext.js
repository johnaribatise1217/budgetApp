import React, { useReducer } from "react";
import { createContext } from "react";

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD EXPENSE' :
            return {
                ...state, expenses : [...state.expenses, action.payload]
            }
        case 'ADD BUDGET' : 
            return {
                ...state, budget : action.payload
            }
        case 'DELETE ITEM' :
            return {
                ...state,
                expenses : state.expenses.filter((expense) => expense.id !== action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    budget : null,
    expenses : []
}

export const AppContext = createContext()

export const AppProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer , initialState)
    
    return (
        <AppContext.Provider value={{budget: state.budget, expenses:state.expenses, dispatch}}>
            { props.children }
        </AppContext.Provider>
    )
}