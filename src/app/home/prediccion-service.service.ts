import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrediccionServiceService {

  constructor() { }

  predictGE(ge:number):number{
    var abs = Math.random();
    if(ge>6){
      ge = ge -abs/5;
    }else{
      ge = ge + (abs/2);
    }
    return ge;
  }

  predictGS(gs:number):number{
    var abs = Math.random();
    if(gs>9){
      gs = gs -abs/5;
    }else{
      gs = gs + (abs/3);
    }
    return gs;
  }

  predictPS(gs:number):number{
    var abs = Math.random();

    if(gs>1.5){
      gs = gs -abs*1.5;
    }else{
      gs = gs + (abs/3);
    }

    return gs;
  }

  predictEM(gs:number):number{
    var abs = Math.random();

    gs = gs +abs*1.6;

    return gs;
  }
  getanio(gs:number):number{

    return gs+1;
  }

}
