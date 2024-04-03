export class PlaceLocation{

    constructor(
        public address: string = '',
        public city: string = '',
        public lat: number | null = null,
        public lon: number | null = null ){}
}