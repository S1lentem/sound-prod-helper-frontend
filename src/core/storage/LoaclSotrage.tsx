import { IGlobalStorage } from '../interfaces/IGlobalStorage';

export const LocalStorage = class implements IGlobalStorage {
    constainsKey(key: string): boolean {
        return localStorage.getItem(key) != null;
    }
    removeItem(key: string){
        localStorage.removeItem(key);
    }

    setValue(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    getValue(key: string): string {
        return localStorage.getItem(key);
    }
}
