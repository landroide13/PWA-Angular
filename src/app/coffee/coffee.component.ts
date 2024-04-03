import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

import { Coffee } from '../logic/Coffee';

@Component({
  selector: 'app-coffee', 
  standalone: true,
  imports: [MatCardModule, MatInputModule, 
            NgFor, MatFormFieldModule, 
            MatSelectModule, MatButtonModule,
            MatIconModule, FormsModule],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {

  coffee = new Coffee();

  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"]

  //constructor(){}

  save(){

  }

  cancel(){

  }

}
