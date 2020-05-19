import { Injectable } from '@angular/core';
import {HttpService} from "../../config/http.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService extends HttpService<any> {

  constructor(http: HttpClient, ) {
    super(http, {
      path: '',
    });
  }
}
