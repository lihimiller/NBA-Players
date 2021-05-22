import React, {  } from 'react';
import { IAction } from '../store/interfaces';
import Pagination from '@material-ui/lab/Pagination';



type ListPaginationProps = {
  current_page: number;
  total_pages: number;
  dispatch: React.Dispatch<IAction>;
};

const PlayersPagination: React.FunctionComponent<ListPaginationProps> = (props) =>  {

  const setPage = (event: React.ChangeEvent<unknown>, value: number) => {
    return props.dispatch({
      type: 'SET_PAGE',
      payload: {current_page:value}
     })
  }

  return(
    <div>
      <Pagination 
        count={props.total_pages} 
        page={props.current_page}
        onChange={setPage}
      />
    </div>






  
  );
}
    
export default PlayersPagination;
