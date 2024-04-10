export class PlaceLocation{

    constructor(
        public address: string = '',
        public city: string = '',
        public latitud: number | null = null,
        public longitud: number | null = null ){}
}