import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";


@Injectable()
export class PetsService {
 private apiurl = environment.apiurl;
  imageUrl = environment.imageUrl;

  constructor(private http:HttpClient) { }

  // Returns all Pets from the API
  listPets(){
    return this.http.get(this.apiurl + 'api/pets');
  }
}
