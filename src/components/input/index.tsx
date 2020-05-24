import * as React from 'react';
import Grid from '@material-ui/core/Grid';

export default props => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <label>{props.title}</label>
            </Grid>
            <Grid item xs={10}>
                <input type="text" />
            </Grid>
        </Grid>
    );
};