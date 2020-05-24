import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../cotainers/sound-card/index';

import './index.css';
import { Sound } from '../../../src/core/models/sound';
import { User } from '../../../src/core/models/user';

export default class MusicPage extends React.Component {
    private sounds: Array<Sound>;
    
    public render(){
        const arr: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let cards = arr.map(item => {
            const user = new User("1", "1");
            const sound = new Sound(user , item.toString(), item.toString())
            return (
            <Grid item md={3} sm={4} xs={12}>
                <Card  {...sound}/>
            </Grid> 
        )});

        return (
            <Grid container spacing={2} className='grid-root'>
                <Grid container justify='center' item xs={12}>
                    <h1>All music</h1>
                </Grid>
                <Grid container justify='center' spacing={3}>
                        {cards}
                </Grid>
            </Grid>
        )
    }

    public componentWillMount(){

    }
}
