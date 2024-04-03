import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  requestLocation(callback: Function){
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords)
      },
      error => {
        callback(null)
      }
    )
  }

  getMapLink(location: PlaceLocation){
    let query = ''
    if(location.lat && location.lon){
      query = `${location.lat}`,`${location.lon}`
    }else{
      query = `${location.address}`,`${location.city}`
    }

    if(/iPad | iPod | iPhone /.test(navigator.userAgent) ){
      return `https://maps.apple.com/?q=${query}`
    }else{
      return `https://maps.google.com/?q=${query}`
    }
  }

  constructor() { }
}
