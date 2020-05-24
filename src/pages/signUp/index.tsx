import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Input from '../../components/input/index';
import './index.css';

export default class SignUpPage extends React.Component {
    
    public render(){
        return (
            <Grid container xs={12} justify='center'className='root'>
                <Grid xs={12} item justify='center'>
                    <h1>Welcome on Sound Prod Helper place</h1>
                </Grid>
                <Grid container justify='center'>
                    <Input title="Your First Name" />
                    <Input title="Your Last Name" />
                    <Input title="Your Email" />
                    <Input title="Your Password" />
                </Grid>
            </Grid>
        )
    }
}
