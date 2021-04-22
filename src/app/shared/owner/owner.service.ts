import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public api = "//thawing-chamber-47973.herokuapp.com";
  public apiOwner = this.api + '/owners';
  constructor(private http:HttpClient) { }

  getOwners(){
    return this.http.get(this.apiOwner); 
  }

  save(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner['href']) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.apiOwner, owner);
    }
    return result;
  }

  getOwner(id:string){
    /* return this.http.get(this.apiOwner + '/search?=' + id); */
    return this.http.get(this.apiOwner + '/search/findByDni/?dni=' + id);
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
