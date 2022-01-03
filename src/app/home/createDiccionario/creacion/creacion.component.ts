import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {Word} from "../shared/word.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  @ViewChild(MatTable) table: MatTable<Word>;
  constructor(private formBuilder:FormBuilder) {
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

  listar() {
    let listaPalbras = [];
    for (let p of this.dataSource.values()){
      listaPalbras.push(p.palabra);
    }
    console.log(listaPalbras);
  }

  agregarDatos(evento:KeyboardEvent){
    if(evento.key=="Enter" && this.form.value.palabra.length>0){
      this.addData()
    }
  }
}
