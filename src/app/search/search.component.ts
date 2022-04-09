import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild("title") title! :ElementRef<HTMLInputElement>

  constructor(private info: InformationService) { }

  ngOnInit(): void {

   
    
  }


  get titles(){
    return this.info.titles
  }


  search(){

    console.log(this.title.nativeElement.value);

    this.info.searchFilm(this.title.nativeElement.value)

    this.title.nativeElement.value = ""

   
    
  }

 
}
