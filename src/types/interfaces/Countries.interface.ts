export interface ICountries {
    id: number;
    country: string;
    images: {
        coords: string;
        path: string;
    }[];
}