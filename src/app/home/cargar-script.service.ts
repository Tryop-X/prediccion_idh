import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }

  cargar(archivo:string[]){
    for(let arch of archivo){
      let scr = document.createElement('script');
      scr.src = './assets/' + arch + '.js';
      let body = document.getElementsByTagName("body")[0]
      body.appendChild(scr);
    }
  }
}
