import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemExceptionApplicationProfileService {

  private baseUrl:string='http://localhost:8001/api/sew/appProfile';
  //private headers = new Headers({'Content-Type':'application/json'});
  private options = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // ## *** ## START **** Application Profile Details ## ** ##

  createApplicationProfile(applicationProfileDetails: any){ 
    return this.http.post(this.baseUrl+'/createSewAppProfileDetails', applicationProfileDetails);
   }

  getApplicationProfiles() {
	  return this.http.get(this.baseUrl+'/getAllSewAppProfileDetails');
  }

  getApplicationProfileByAppId(appId:string){
    return this.http.get(this.baseUrl+'/getAllSewAppProfileDetailsByAppId/'+appId);
  }

  getApplicationProfileByApplicationKey(applicationKey:string){
    return this.http.get(this.baseUrl+'/getSewApplicationProfileByApplicationKey/'+applicationKey);
  }

  getSewApplicationProfileBySubApplicationId(subApplicationId:string){
    return this.http.get(this.baseUrl+'/getSewApplicationProfileBySubApplicationId/'+subApplicationId);
  }
  

  getApplicationProfileByApplicationById(applicationKey:string){
    return this.http.get(this.baseUrl+'/getSewAppProfileDetailsById/'+applicationKey);
  }

  deleteApplicationProfileById(id:number){
    return this.http.delete(this.baseUrl+'/deleteCountry/'+id);
  }

  updateApplicationProfile(applicationProfileDetails: any){
    return this.http.put(this.baseUrl+'/updateSewAppProfileDetails', applicationProfileDetails);
  }

  // ## *** ## END **** Application Profile Details ## ** ##

  getAllTestData(){
    return this.http.get(this.baseUrl+'/getAllSewAppProfileDetails/');
  }

  
}
