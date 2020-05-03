import { ApiRoutes } from "src/constants/ApiRoutes";

export interface IHttpClient {
    Get(ednpoint: (urls: ApiRoutes) => string): Promise<Readonly<{}>>;
    Post(ednpoint: (urls: ApiRoutes) => string): Promise<Readonly<{}>>;
    Put(ednpoint: (urls: ApiRoutes) => string): Promise<Readonly<{}>>;
    Delete(ednpoint: (urls: ApiRoutes) => string): Promise<Readonly<{}>>;
};
