import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";


@Injectable()
export class PetsService {
 // petList = [{"_id":"5ac8f01d7295a870103f085a","petName":"test","petDescription":"test","petType":"Dog","petBreed":"Other","petImageURL":"/static/images/dog_cat.svg","createdAt":"2018-04-07T16:21:49.980Z","__v":0},{"_id":"5ac8f2a235ba8e0856aca656","petName":"Dad","petDescription":"Kira's Dad","petType":"Dog","petBreed":"Akita","petImageURL":"/static/images/uploads/1523118753991-Dad.jpg","createdAt":"2018-04-07T16:32:34.073Z","__v":0,"updatedAt":"2018-04-07T16:32:47.627Z"},{"_id":"5aca399cb687a70ca5ac5861","petName":"Cool Cat","petDescription":"Cool Cat","petType":"Cat","petBreed":"Brazilian Shorthair","petImageURL":"/static/images/uploads/1523202459779-capture16.png","createdAt":"2018-04-08T15:47:40.198Z","__v":0}]
  private apiurl = environment.apiurl;
  imageUrl = environment.imageUrl;

  constructor(private http:HttpClient) { }

  // basic list method
  listPets(){
    return this.http.get(this.apiurl + 'api/pets');
  }
  // "getOne" method, returns item from the array with _id == id
  getPet(id){
   // return this.petList.find((el) => {return el._id == id});
  }

}
