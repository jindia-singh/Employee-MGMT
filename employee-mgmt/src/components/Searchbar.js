import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import  * as API  from "../redux/service/getEmployeeBySearch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function Searchbar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState();

  async function getEmployeeSearch(data){
    dispatch(API.getEmployeeBySearch(data));
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  };
  
  const onClickHandler=()=>{
       getEmployeeSearch(value)
  }
  return (
    <div className={classes.root}  style={{  marginTop: "20px",marginLeft: "10px" }} >
        <TextField
        className={classes.margin}
        fullWidth
        size="small"
        variant="outlined"
        id="input-with-icon-textfield"
        label="Search Employee"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon onClick={onClickHandler} style={{cursor:"pointer"}} />
            </InputAdornment>
          ),
        }}
        onChange={(e)=>handleChange(e)}
      />
    </div>
  );
}
