import axios from 'axios';
import { IHttpClient } from '../interfaces/IHttpClient';
import { ApiRoutes } from '../../constants/ApiRoutes';

export class HttpClient implements IHttpClient {
    private readonly urls = new ApiRoutes();

    private readonly defaultHeader = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    public async Get(getApiRoute: (urls: ApiRoutes) => string): Promise<Readonly<{}>> {
        let url: string = this.urls.baseUrl + getApiRoute(this.urls);
        return await axios(url);
    }

    public async Post(getApiRoute: (urls: ApiRoutes) => string): Promise<Readonly<{}>> {
        throw new Error("Method not implemented.");
    }
    public async Put(getApiRoute: (urls: ApiRoutes) => string): Promise<Readonly<{}>> {
        throw new Error("Method not implemented.");
    }
    public async Delete(getApiRoute: (urls: ApiRoutes) => string): Promise<Readonly<{}>> {
        throw new Error("Method not implemented.");
    }
}
