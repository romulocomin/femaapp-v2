import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

let apiUrl = "http://173.255.197.140/apihomolog/fema/api.php/";


@Injectable()

export class AuthServiceProvider {
  profile = {
    codcoligada: '',
    codusuario: '',
    tipousuario: ''
  }

  profileData = [];
  
  resposedata: any;

  constructor(public http: HttpClient) {
  
   
  }
  

  postData(credentials, type){

    return new Promise((resolve, reject) =>{
     
      this.http.post(apiUrl+type, JSON.stringify(credentials))
      .subscribe((result: any) => {
        resolve(result);
        
        console.log("ok",result);
      }, (err) =>{
        reject(err);
        console.log("error"+err.stringify);
      });

    });

  }

 
  getRemoteData(type){
    return new Promise(resolve => {
      this.http.get(apiUrl+type).map(res => res).subscribe(data => {
        data as string [];
      });
    });
  }



   
      
 
  getAll() {
    if (this.resposedata) {
      // already loaded data
      return Promise.resolve(this.resposedata);
    }
    return new Promise(resolve => {
      this.http.get<Array<any>>(apiUrl+"contexto").map((res) => res).subscribe(data => {
        this.resposedata = data;
        resolve(this.resposedata)
      });
    
    });
  }


  load(type) {
 
     return new Promise(resolve => {
     this.http.get<Array<any>>(apiUrl+type)
        .subscribe( data => this.profileData = data)
      
       
    });
  }


}
