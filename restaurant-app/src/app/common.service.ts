import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  public URL = "http://localhost:3000/restaurents";

  public regURL="http://localhost:3000/Users"
  

  constructor(private _http:HttpClient) { }

  getRestoList() {
    return this._http.get(this.URL);
    
  }

  addResto(data:any){
    return this._http.post(this.URL, data)
  }

  deleteResto(id:any){
    return this._http.delete(`${this.URL}/${id}`);
  }

  getCurrentData(id:any){
    return this._http.get(`${this.URL}/${id}`);
  }

  updateResto(id:any,data:any){
    return this._http.put(`${this.URL}`,data);
  }

  createUser(data:any){
    return this._http.post(this.regURL,data);
  }
}
