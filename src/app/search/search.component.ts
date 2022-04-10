import { Component, EventEmitter, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  @ViewChild("title") title! :ElementRef<HTMLInputElement>

  prevValue: string = ""

  buttonValue: boolean = false;

  style: string = "green"

  constructor(private info: InformationService) { }

  ngOnInit(): void {

   
    
  }


  get titles(){
    return this.info.titles
  }


  search(){

    console.log(this.title.nativeElement.value);

    this.info.searchFilm(this.title.nativeElement.value)

    this.prevValue = this.title.nativeElement.value

    this.title.nativeElement.value = ""

   
    
  }

  ShowTitles(){
   this.buttonValue  = true
  }

  changeColor(){
    this.style = (this.style === "green") ? "black" : "green";
  }

 
}
