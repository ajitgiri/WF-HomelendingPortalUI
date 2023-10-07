import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExceptionPipelineService {
  
  private baseUrl:string='http://localhost:8001/api/sew';
  //private headers = new Headers({'Content-Type':'application/json'});
  private options = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // ## *** ## START **** Exception Pipeline page Details ## ** ##

  
  getAllSystemExceptionDetailsWithoutPagination(): Observable<any> {
	  return this.http.get(this.baseUrl+'/getAllSewDetails', {responseType: 'json'});
  }

  searchSystemExceptionDetailsWithPagination(searchCriterias: any): Observable<any>{
    return this.http.post(this.baseUrl+'/searchSewDetails', searchCriterias, {responseType: 'json', observe:"response"});
  }

  getSystemExceptionDetailsById(id:string){
    return this.http.get(this.baseUrl+'/getSewDetailsById?id='+id, {responseType: 'json'});
  }

  deleteApplicationProfileById(id:number){
    return this.http.delete(this.baseUrl+'/deleteCountry/'+id);
  }

  updateApplicationProfile(applicationProfileDetails: any){
    return this.http.put(this.baseUrl+'/updateSewAppProfileDetails', applicationProfileDetails);
  }
}
