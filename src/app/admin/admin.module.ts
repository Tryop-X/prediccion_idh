import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NewHistoriaComponent } from './historia/new-historia/new-historia.component';
import { EditHistoriaComponent } from './historia/edit-historia/edit-historia.component';
import { ListHistoriaComponent } from './historia/list-historia/list-historia.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormHistoriaComponent } from './historia/shared/form-historia/form-historia.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    LayoutComponent,
    NewHistoriaComponent,
    EditHistoriaComponent,
    ListHistoriaComponent,
    FormHistoriaComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class AdminModule { }
