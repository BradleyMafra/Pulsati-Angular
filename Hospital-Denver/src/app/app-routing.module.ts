import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PacienteComponent } from './page/paciente/paciente.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent,
  },
  {
    path: 'paciente',
    component: PacienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
