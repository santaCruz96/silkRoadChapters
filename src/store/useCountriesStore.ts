import { create } from 'zustand';
import { ICountries } from '@/interfaces/Countries.interface';

interface IChoseCountry {
    isHovered: boolean,
    currentId: number | null,
    selectedCountry: ICountries | null,
    setHovered: (id: number, countries: ICountries[]) => void;
    unsetHovered: () => void;
}

export const useChoseCountry = create<IChoseCountry>((set) => ({
    isHovered: false,
    currentId: null,
    selectedCountry: null,

    setHovered: (id, countries) => {
        const country = countries.find((country) => country.id === id) || null;
        set({
            isHovered: true,
            currentId: id,
            selectedCountry: country,
        });
    },

    unsetHovered: () => {
        set({
            isHovered: false,
            currentId: null,
            selectedCountry: null,
        });
    },
})) 