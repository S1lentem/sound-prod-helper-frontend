import { ApiRoutes } from "src/constants/ApiRoutes";

export interface IHttpClient {
    Get(url: string): Promise<Readonly<{}>>;
    Post(url: string, model: {}): Promise<Readonly<{}>>;
    Put(ednpoint: (urls: ApiRoutes) => string): Promise<Readonly<{}>>;
    Delete(ednpoint: (urls: ApiRoutes) => string): Promise<Readonly<{}>>;
};
