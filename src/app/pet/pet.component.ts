import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  // Setting up some parameters
  @Input() pet;
  @Input() baseUrl;
  @Output() favoriteEvent = new EventEmitter<object>();
  favorited:boolean = false;

  constructor() { }

  favorite(title):void{
    // toggle if this is a favorited pet or not
    this.favorited = !this.favorited;
    this.favoriteEvent.emit({ name:title, favored:this.favorited });
  }

  ngOnInit() {
    this.pet.displayurl = this.baseUrl + this.pet.petImageURL;
  }

}
