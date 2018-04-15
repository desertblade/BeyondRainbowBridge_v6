import { Component } from '@angular/core';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PetsService]
})

export class AppComponent {
  title = 'Beyond Rainbow Bridge';

  // counter that will increment every time a favorite happens in a child component
  totalFavorites:number = 0;
  mostRecentFavorite:string = '';

  handleFavoreted(e):void{
    console.log('app-component gets favorites:' + e.name);
    if ( e.favored === true ) {
      this.totalFavorites += 1;
    } else {
      this.totalFavorites -= 1;
    }
    this.mostRecentFavorite = e.name;
  }

  constructor(private petService:PetsService){

  }

  // Initializing variables
  numPets = 0;
  petList = null;
  imageUrl = '';

  // runs when the component is fully set up, gets photo data from service
  ngOnInit() {
    this.petService.listPets().subscribe((pets)=>{
      this.petList = pets;
      this.numPets = this.petList.length;
    });
   this.imageUrl = this.petService.imageUrl;
  }


}

