import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Word} from "./word.model";

@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {

  apibase= environment.apiBase +"/diccionario"

  constructor(private http:HttpClient) { }

  getDccionario(){
    return this.http.get<string[]>(this.apibase)
  }

  setPalabras(tam: number, listaPalabras: string[]){
    return this.http.post(this.apibase+"/"+tam, listaPalabras)
  }
}
