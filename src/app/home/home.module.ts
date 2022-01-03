import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CreacionComponent } from './createDiccionario/creacion/creacion.component';
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {FooterComponent} from "./footer/footer.component";


@NgModule({
  declarations: [
    LayoutComponent,
    CreacionComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class HomeModule { }