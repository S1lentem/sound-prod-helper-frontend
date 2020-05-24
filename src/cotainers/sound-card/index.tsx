import * as React from 'react';
import { IHttpClient } from 'src/core/interfaces/IHttpClient';
import { httpClientFactory } from './../../core/http/HttpClientFactory';
import { Sound } from '../../core/models/sound';
import Card from '../../components/card/index';


export default class SoundCard extends React.Component<Sound> {
    private readonly httpClient: IHttpClient = httpClientFactory.createHttpClient();

    public constructor(props: Readonly<Sound>){
        super(props);
    }

    public render() {
        return (
            <Card content={this.props.title}/>
        );
    }

    public componentWillMount(){
        // TODO: Add ajax request;
    }
}