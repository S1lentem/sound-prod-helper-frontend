import { User } from "../user";

export class Sound {
    public readonly author: User;
    public readonly title: string;
    public readonly source: string;

    public constructor(user: User, title: string, source: string){
        this.author = user;
        this.title = title;
        this.source = source;
    }
} 