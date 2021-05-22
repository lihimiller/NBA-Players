import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SportsBasketballOutlinedIcon from '@material-ui/icons/SportsBasketballOutlined';
import {IPlayer} from '../store/interfaces'
import {changeFav} from '../store/action'

const useStyles = makeStyles({
  card: {
    width: '25vw',
    height: '20vh',
    boxShadow: '0 4px 4px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
   
  },
  title: {
    fontSize: 14,
  },
  team: {
    marginBottom: 10,
    fontSize: 14,
  },
  fav: {
    fontSize: '35px',
    float: 'right',
  },
  cardAction: {
    float:'right',
    right:'0px',
    flex:1
  }
});



const Player: React.FunctionComponent<IPlayer> = (props) =>  {
  const classes = useStyles();
  const{state, dispatch} = props.currentState;
  return (
    <Card className={classes.card}>
      <CardContent style={{flex:2}}>
        <Typography variant="h6" >
          {props.first_name} {props.last_name}
        </Typography>
        <Typography className={classes.team} color="textSecondary">
          {props.team.full_name} - {props.team.city}
        </Typography>
        <Typography variant="body2" >
          position: {props.position}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <IconButton  
          aria-label="Add to favorite" 
          onClick={() => changeFav(state,dispatch,props)}
        >
          <SportsBasketballOutlinedIcon className={classes.fav} style={{color: props.isFav && '#F59600' }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Player;


