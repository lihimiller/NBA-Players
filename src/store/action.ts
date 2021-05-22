
import { Dispatch, IAction, IPlayer, IState } from '../store/interfaces';

export const fetchAllPlayers = async(current_page:number,dispatch:Dispatch) => {
  try{
     const data = await fetch(  
       `https://www.balldontlie.io/api/v1/players?page=${current_page}`,
       {
         method: "GET",
         headers: new Headers({
         Accept: "application/json"
         })
       }
   )
   const dataJSON = await data.json();
   return dispatch({
    type:'FETCH_DATA',
    payload: dataJSON
   })
 } catch (error) {
   console.log(error);
 }
}

export const searchPlayer = async(input:string, dispatch:Dispatch) => {
 try{
    const data = await fetch(  
      `https://www.balldontlie.io/api/v1/players?search=${input}`,
      {
        method: "GET",
        headers: new Headers({
        Accept: "application/json"
        })
      }
  )
  const dataJSON = await data.json();
  return dispatch({
    type:'SEARCH',
    payload: dataJSON
   })
} catch (error) {
  console.log(error);
}
}

export const changeFav = (state:IState, dispatch:any, favPlayer: IPlayer | any) :IAction => {
   
  const playerInFav =  state.favouritesPlayers.some(player => player.id == favPlayer.id);

 
  let favList = playerInFav?  state.favouritesPlayers.filter((player:IPlayer) => player.id !== favPlayer.id) : [...state.favouritesPlayers, favPlayer ];
  let playersList = playerInFav? [...state.players, favPlayer ] : state.players.filter((player:IPlayer) => player.id !== favPlayer.id);

  return dispatch({
    type: 'CHANGE_FAV',
    payload: {players:playersList, favouritesPlayers:favList}
   })

}


