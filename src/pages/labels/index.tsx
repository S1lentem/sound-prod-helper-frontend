import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/card/index';
import { IHttpClient } from './../../core/interfaces/IHttpClient';
import { httpClientFactory } from './../../core/http/HttpClientFactory';

export default class LabelsPage extends React.Component {
    private readonly httpClient: IHttpClient = httpClientFactory.createHttpClient();

    public render(){
        const items: Array<number> = [1, 2, 3, 4, 5];
        
        let labels = items.map(item => (
            <Grid item xs={6}>
                <Card content={'label: ' + item}/>
            </Grid>
        ));

        return (
            <Grid container>
                <Grid item xs={12} justify='center'>
                    <h1>Labels</h1>
                </Grid>
                <Grid container spacing={6}>
                    {labels}
                </Grid>
            </Grid>
        )
    }
}
