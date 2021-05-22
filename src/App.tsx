import React, { useEffect, useContext } from 'react';
import PlayersList  from './components/PlayersList';
import {IPlayer, IPlayersList} from './store/interfaces';
import { fetchAllPlayers } from './store/action';
import {Store } from './store';
import Search from './components/Search';
import logo from './nba-logo.png';


const App: React.FC = () => { 
  const {state, dispatch}= useContext(Store);

    useEffect(() => {
      fetchAllPlayers(state.current_page, dispatch)
    }, [state.current_page])

    const props: IPlayersList = {
      players: state.players,
      favPlayers: Array<IPlayer>(),
      currentState: {state, dispatch}
    }

  return (
    <div style={{margin:0, padding:0}} >
      <div style= {{display:'flex', flexDirection:'row', backgroundColor:'#081339'}}>
        <img src={logo} alt="Logo" style={{width:'13vw', height: '15vh'}} />
        <Search {...props}/>
      </div>
      <PlayersList {...props} />
    </div>
  );
}

export default App;
