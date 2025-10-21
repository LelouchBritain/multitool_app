export interface ICity {
    zip: string;
    name: string;
    localnames?: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}