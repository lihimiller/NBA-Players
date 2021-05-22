import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Player from './Player';
import  { IPlayer, IPlayersList } from '../store/interfaces'
import {Typography, IconButton} from '@material-ui/core';
import { ChromePicker } from 'react-color'
import ColorizeIcon from '@material-ui/icons/Colorize';
import CloseIcon from '@material-ui/icons/Close';
import PlayersPagination from './PlayersPagination'

const useStyles = makeStyles({
  mainDiv: {
    display:'flex', 
    flexDirection:'row',
    justifyContent:'space-around', 
    width:'100vw',
    height:'85vh',
  },
  secondaryDiv:{
    display:'flex', 
    flexDirection:'column',
    paddingLeft:'3vw',
    paddingRight:'3vw'
  },
  scrollDiv:{
    overflowY:'auto'
  }
  
});



const PlayersList: React.FunctionComponent<IPlayersList> = (props) =>  {
  const{state, dispatch} = props.currentState;
  const [color, setColor] = useState('#fff');
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return(
    <div>
      <div className={classes.mainDiv}> 
        <div className={classes.secondaryDiv}> 
            <PlayersPagination current_page={state.current_page} total_pages={state.total_pages} dispatch={dispatch} />
            <div className={classes.scrollDiv}>
              { state.players && state.players.map((player:IPlayer) => {
                return(
                  <Player key={player.id} {...player} isFav={false} currentState={props.currentState}></Player>
                )
              })}
              </div>
        </div>
        <div className={classes.secondaryDiv} style= {{backgroundColor:color}}> 
          <div style= {{display:'flex', flexDirection:'row'}}>
            <Typography variant="h5" style={{margin:'2vh'}} >My Favourites Players:  </Typography>
            <IconButton title="Change backgroundColor" onClick={() => setIsOpen(!isOpen)} >
              {isOpen? <CloseIcon/>: <ColorizeIcon/>}
          </IconButton>
          </div>
          {isOpen && <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>}
          <div className={classes.scrollDiv}>
            { state.favouritesPlayers.length > 0 &&  state.favouritesPlayers.map((player:IPlayer) => {
              return(
                <Player key={player.id} {...player} isFav={true} currentState= {props.currentState}></Player>
              )
            })}
          </div>
        </div>
      </div>
     </div>
  )
}
    
export default PlayersList;
