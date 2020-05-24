import * as React from 'react';

import { Label }from '../../core/models/label/index';
import { IHttpClient } from '../../core/interfaces/IHttpClient';

import Card from '../../components/card/index';
import { httpClientFactory }  from '../../core/http/HttpClientFactory';

export default class LabelContainer extends React.Component<Label>{
    private readonly httpClient: IHttpClient = httpClientFactory.createHttpClient();

    public render(){
        return (
            <Card content={'Label'}/>
        );
    }

    public componentWillMount(){
        // TODO: Add AJAX request;
    }
} 