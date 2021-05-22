import React, {useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { searchPlayer } from '../store/action'
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInput-underline': {
      borderBottom: '2px solid #ffffff',
    },
  },
  search: {
    color: 'white',
    borderColor: 'white'
  }
})(TextField);

  const Search: React.FunctionComponent<any> = (props) =>  {
    const [input, setInput] = useState("");
    
    useEffect(() => {
      searchPlayer(input, props.currentState.dispatch);
    }, [input])


    return (
      <div style={{display:'flex', flexDirection:'row', margin:'2%'}}>
          <CssTextField 
            id="searchInput"
            type="search"
            placeholder="Search..."
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
            }}
          />
      </div>
    )
}

export default  Search;