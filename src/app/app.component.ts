import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titre ici';
  penis = "vagin";
  heros = ["Iron man", "super man", "Captain marvel"];
  indexArray = new Array(20);


  constructor(){

  }

  allo(){
      alert("Test");
  }
}
