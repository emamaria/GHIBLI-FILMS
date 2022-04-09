import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {



  // get films(){
  //      return this.info.films
  // }

  get searchTitle(){
    return this.info.searchTitle
}

  constructor(private info: InformationService) { }

  ngOnInit(): void {

  
    
  }

 
 

}
