import axios from 'axios';
import { IHttpClient } from '../interfaces/IHttpClient';
import { ApiRoutes } from '../../constants/ApiRoutes';

export class HttpClient implements IHttpClient {
    private readonly urls = new ApiRoutes();

    private readonly defaultHeader = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    public async Get(url: string): Promise<Readonly<{}>> {
        let fullUrl: string = this.urls.baseUrl + url;
        return await axios(url);
    }

    public async Post(url: string, model: {}): Promise<Readonly<{}>> {
        let fullUrl: string = this.urls.baseUrl + url;
        return await axios.post(fullUrl, model);
    }
    public async Put(getApiRoute: (urls: ApiRoutes) => string): Promise<Readonly<{}>> {
        throw new Error("Method not implemented.");
    }
    public async Delete(getApiRoute: (urls: ApiRoutes) => string): Promise<Readonly<{}>> {
        throw new Error("Method not implemented.");
    }
}
