import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {Word} from "../shared/word.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DiccionarioService} from "../shared/diccionario.service";
import {eventListeners} from "@popperjs/core";

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {
  form: FormGroup;
  @Input() word:Word= new Word();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();
  displayedColumns: string[] = ['posicion', 'palabra'];
  dataSource: Word[] = [];
  number = 0;
  tamCombinaciones= 0;

  @ViewChild(MatTable) table: MatTable<Word>;
  constructor(private formBuilder:FormBuilder, public diccionarioService: DiccionarioService) {
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + '';
    }
    return value;
  }

  getMaximo(){
    return this.number;
  }

  getActual(){
    if(this.tamCombinaciones<1){
      return this.number;
    }else{
      return this.tamCombinaciones
    }
  }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      palabra: [
        this.word.palabra, [
          Validators.required,
        ]
      ],
    })
  }

  addData() {
    const localWord: Word= new Word();
    this.number++;
    localWord.posicion= this.number;
    localWord.palabra= this.form.value.palabra;
    localWord.palabra= localWord.palabra.replace(/ /g,"");
    if(!(localWord.palabra=="")){
      this.dataSource.push(localWord);
      this.table.renderRows();
    }
    this.form.reset();
  }

  removeData() {
    this.number--;
    this.dataSource.pop();
    this.table.renderRows();
  }



  descargar() {


    if(this.tamCombinaciones<1){
      this.tamCombinaciones= this.number;
    }

    console.log(this.tamCombinaciones)

    let listaPalbras = [];
    let diccionario = ""
    for (let p of this.dataSource.values()){
      listaPalbras.push(p.palabra);
      diccionario = diccionario+p.palabra+"\n"
    }


    this.diccionarioService.setPalabras(this.tamCombinaciones, listaPalbras).subscribe(()=>{

    })




    this.diccionarioService.getDccionario().subscribe((data:any)=>{
    })

    var today = new Date();
    var time =today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();


    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(diccionario));
    element.setAttribute('download', "dicDat-"+time+".txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }



  agregarDatos(evento:KeyboardEvent){
    if(evento.key=="Enter" && this.form.value.palabra.length>0){
      this.addData()
    }
  }
}
