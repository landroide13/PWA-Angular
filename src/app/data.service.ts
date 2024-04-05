import { Injectable } from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public endPoint = 'http://localhost:3000';
  public entry = '/coffees'

  constructor(private http: HttpClient) { }

  getList(callback: Function){
    // const list = [
    //   new Coffee("1" ,"Double Expresso", "Cafe Tortoni", new PlaceLocation("Av de Mayo 600", "Buenos Aires")),
    //   new Coffee("2" ,"Honey Americano", "Star Coffee", new PlaceLocation("Grand via 64", "Madrid")),
    // ]
    // callback(list)
    this.http.get(`${this.endPoint}${this.entry}`).subscribe(res => callback(res))
  }

  getCoffee(id: string, callback: Function){
    this.http.get(`${this.endPoint}${this.entry}/${id}`)
    .subscribe(res => callback(res))
  }

  save(coffee: any, callback: Function){
    if(coffee._id){
      this.http.put(`${this.endPoint}${this.entry}/${coffee._id}`, coffee)
      .subscribe(res => callback(true))
    }else{
      this.http.post(`${this.endPoint}${this.entry}`, coffee)
      .subscribe(res => callback(true))
    }

  }
}
