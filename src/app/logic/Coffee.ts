import { PlaceLocation } from "./PlaceLocation";
import { TestingRating } from "./TestingRating";

export class Coffee{
    
    type: string = '';
    rating: number = 0;
    notes: string = '';
    testingRating: TestingRating | null;


    constructor(
        public _id: string | null = null,
        public name: string = "",
        public place: string = "",
        public location: PlaceLocation | null = null)
    {
        this.testingRating = new TestingRating();

        if(location == null){
            this.location = new PlaceLocation();
        }
    }
}