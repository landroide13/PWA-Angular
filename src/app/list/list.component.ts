import { Component } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { DataService } from '../data.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  providers: [DataService],
  imports: [MatCardModule, MatButtonModule, 
            NgFor, MatIconModule, RouterModule, 
            HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  list: Coffee[] = [];

  constructor(private data: DataService, private router: Router){}

  goDetails(coffee: Coffee){
    this.router.navigate(['/coffee', coffee._id])  
  }

  ngOnInit(){
    this.data.getList((list: Coffee[]) => {
      this.list = list
    })
  }

  

}
