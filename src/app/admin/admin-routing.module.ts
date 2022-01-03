import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {ListHistoriaComponent} from "./historia/list-historia/list-historia.component";
import {NewHistoriaComponent} from "./historia/new-historia/new-historia.component";
import {EditHistoriaComponent} from "./historia/edit-historia/edit-historia.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'carreras',
        component: ListHistoriaComponent,
      },
      {
        path: 'carreras/new',
        component: NewHistoriaComponent,
      },
      {
        path: 'carreras/:id/editar',
        component: EditHistoriaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
