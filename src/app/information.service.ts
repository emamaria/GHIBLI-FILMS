import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  public films: any[] = []

  public titles: any[] = []
  
  public searchTitle: any[] = []


  constructor(private http: HttpClient) { 
    

    this.http.get(`https://ghibliapi.herokuapp.com/films`)
    .subscribe((resp: any) => {
      this.films = resp

     console.log(this.films);


     this.titles =  [...this.films].map( film => {
      return {title: film.title}
     
     })


     console.log(this.titles);
     
      
    })


   


  }

  searchFilm(movie: any){
   this.searchTitle =  [...this.films].filter( film =>  film.title.toLowerCase().includes(movie.toLowerCase()) )


   console.log("title", this.searchTitle,  [...this.films]);
   
 }


 
}
