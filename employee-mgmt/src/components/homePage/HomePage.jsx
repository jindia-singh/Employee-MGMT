import React from 'react';
import {Grid,Button} from '@material-ui/core';
import Searchbar from '../Searchbar'
import { useHistory } from "react-router-dom";
const HomePage = (props) => {
    const  history = useHistory();
    const onClickHandler=()=>{
        history.push("/addEmployee");
    };
    return (
        <div>
            <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="center" >
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Searchbar/>
                </Grid>
                <Grid item >
                    <Button style={{marginTop: "20px" }} color="primary" variant='contained' onClick={onClickHandler}>Add User</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;