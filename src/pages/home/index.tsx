import * as React from 'react';
import { IHttpClient } from 'src/core/interfaces/IHttpClient';
import { httpClientFactory } from './../../core/http/HttpClientFactory';

export default class HomePage extends React.Component {
    private readonly httpClinet: IHttpClient = httpClientFactory.createHttpClient();

    public render(){
        return (
            <div>
                {this.state}
            </div>
        )
    }

    async componentWillMount(){
        
    }
}
