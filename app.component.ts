import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  getName(name:string){
    console.log(name);
    return name;
  }
  getN(par:string){
    console.log(par);
    return par;
  }
  onKeyUp(x:any){
    console.log(x);
    return x;
  }
  onKeyDown(y:any){
    console.log(y);
    return y;
  }
  namee="Bruce"
  disabledBox=true
  enableInput(namee:string){
    this.disabledBox=false,
    this.namee="game" 
  }
  textColor="green"
  bgColor="gray"
  styleColor="bg"

  dateExample=Date();
}
