
import { RouteComponentProps} from "react-router-dom";

export type Dispatch = React.Dispatch<IAction>;

export interface IState{
    players: Array<IPlayer>;
    favouritesPlayers:Array<IPlayer>;
    current_page: number;
    total_pages: number;
} 

export interface IAction{
    type: string;
    payload:Array<IPlayer> | any;
} 
 
export interface ITeam {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
  
  }; 
  
  export interface IPlayer {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    team: ITeam;
    isFav: Boolean;
    currentState:{state:IState , dispatch: Dispatch};
  }; 

export  interface IPlayersList {
    players: IPlayer[];
    favPlayers: IPlayer[];
    currentState:{state:IState , dispatch: Dispatch};
  }

  export  interface ListPaginationProps {
    page: number;
    currentState:{state:IState , dispatch: Dispatch};
  };
