import { IHttpClient } from './../interfaces/IHttpClient';
import { HttpClient } from './HttpClient';

class HttpClientFactory {
    public createHttpClient() : IHttpClient {
        return new HttpClient();
    }
}

export const httpClientFactory = new HttpClientFactory();