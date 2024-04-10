import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [MatSnackBar],
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coffeeApp';

  constructor(private snack: MatSnackBar){}

  ngOnInit(){
    if(window.matchMedia('(display-mode: browser').matches){

      if('standalone' in navigator){
        this.snack.open('You can Install this App', "", {
          duration: 3000
        })
      }else{
        window.addEventListener("beforeinstallprompt", e => {
          e.preventDefault();
          const sn = this.snack.open('You can Install this App', "Install", {
            duration: 5000
          })
          sn.onAction().subscribe(() => { 
            (e as any).prompt();
            (e as any).userChoice.then( (result: any) => {
              if (result.outcome == "dismissed") {
                // TODO:
              } else {
                // TODO:
              }
           })
          })
        })
      }
    }
  }
}
