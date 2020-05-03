export interface IGlobalStorage {
    constainsKey(key: string): boolean;
    removeItem(key: string): void;
    setValue(key: string, value: string): void;
    getValue(key: string): string;
}