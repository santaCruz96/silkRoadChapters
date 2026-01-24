export interface IDetails {
    price: string,
    location: string,
    travelPoint: string,
    year: string
}

export interface IPaidLecture {
    id: number,
    type: string,
    title: string,
    details: IDetails,
    images: [string, string, [string, string]],
    texts: string[]
}