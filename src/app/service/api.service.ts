import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  AddQs(endpoont,payload:any):Observable<any>{
    return this._http.post(environment.apiurl + endpoont,payload);
  }
  // viewQs():Observable<any>{
  //   return this._http.get('https://task.monetrewards.com/Monet-diytest-api/api/study-survey?study_id=14178&surveytype=pre-screen')
  // }
  viewQs():Observable<any>{
    return this._http.get('http://192.168.1.222:5001/survey/getQuestionBycntId?cnt_id=15073')
  }
}
