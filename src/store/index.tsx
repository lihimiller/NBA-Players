import React , { useReducer} from 'react';
import {IState,IAction } from './interfaces';

 
const initialState:IState={
    players: [],
    favouritesPlayers:[],
    current_page: 1,
    total_pages:1
 };
 

export const Store = React.createContext<IState | any>(initialState);


function reducer(state:IState, action:IAction):IState{
    switch(action.type){
        case'FETCH_DATA':
        return{...state, players: action.payload.data, total_pages:action.payload.meta.total_pages} 
        case'SEARCH':
        return{...state, players: action.payload.data} 
        case 'CHANGE_FAV':
        return { ...state, players:action.payload.players,favouritesPlayers:action.payload.favouritesPlayers} 
        case 'SET_PAGE':
       return { ...state, current_page:action.payload.current_page}
        default:
       return state;
    }
};

 
export function StoreProvider({children}:JSX.ElementChildrenAttribute):JSX.Element{
    const [state, dispatch]= useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}