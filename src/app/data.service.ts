import { Injectable } from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback: Function){
    const list = [
      new Coffee("1" ,"Double Expresso", "Cafe Tortoni", new PlaceLocation("Av de Mayo 600", "Buenos Aires")),
      new Coffee("2" ,"Honey Americano", "Star Coffee", new PlaceLocation("Grand via 64", "Madrid")),
    ]
    callback(list)
  }
}
