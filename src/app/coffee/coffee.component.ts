import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TestingRating } from '../logic/TestingRating';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-coffee', 
  standalone: true,
  providers: [DataService],
  imports: [MatCardModule, MatInputModule, 
            NgFor, MatFormFieldModule, 
            MatSelectModule, MatButtonModule,
            MatIconModule, FormsModule, 
            MatSliderModule, MatSlideToggleModule, 
            NgIf, HttpClientModule],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {

  coffee = new Coffee();

  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"];

  tastingEnabled = false;

  FormType: 'Edit' | 'Insert' = 'Insert';

  ngOnInit(){
    this.route.params.subscribe(param => {
      if(param['id']){
        this.data.getCoffee(param['id'], (res: any)=> {
          this.coffee = res;
          this.FormType = 'Edit';
          if(this.tastingEnabled){
            this.tastingEnabled = true;
          }
        })
      }
    })
  }

  tastingRatingChanged(checked: boolean){
    if(checked){
      this.coffee.testingRating = new TestingRating();
    }else{
      this.coffee.testingRating = null;
    }
  }

  constructor(private geolocation: GeolocationService, 
              private data: DataService,
              private router: Router, 
              private route: ActivatedRoute){}

  save(){
    let resultFunction = (res: boolean) =>{
      if(res){
        this.router.navigate(['/']);
      }else{
        //Error
      }
    }

    if(this.FormType == 'Insert'){
      let {_id, ...insertCoffee} = this.coffee;

      this.data.save(insertCoffee, resultFunction)
    }else{
      this.data.save(this.coffee, resultFunction)
    }
    
  }

  cancel(){
    this.router.navigate(['/']);
  }

  acquireLocation(){
    this.geolocation.requestLocation((location: GeolocationCoordinates | null) => {
      if(location){
        this.coffee.location!.latitud = location.latitude
        this.coffee.location!.longitud = location.longitude
      }
    });
  }

}
