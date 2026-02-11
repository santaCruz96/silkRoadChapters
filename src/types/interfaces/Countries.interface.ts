export interface ICountries {
    id: number;
    country: string;
    images: {
        country: string;
        coords: string;
        path: string;
    }[];
}