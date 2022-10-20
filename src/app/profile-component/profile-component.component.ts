import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  imagen:string ='./assets/programadores-Newsbook.jpg'
  hola:Boolean

  lista=["python","php",'javascript',"c++","java"]
   
  constructor() {
    this.hola = true
  }
  ngOnInit(): void {
      
  }
  boton(){
    this.hola = !this.hola ? true : false  
  }

}
