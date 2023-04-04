import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    CoursesRoutingModule,
  ]
})
export class CoursesModule { }
