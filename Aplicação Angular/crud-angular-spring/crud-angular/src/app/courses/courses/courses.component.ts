import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  // Forma mais simplificada de inicializar um array.
  courses: Course[] = []; 

  displayedColumns = ['name', 'category'];

  constructor() {
    // Forma mais verbosa de inicializar um array.
    //this.courses = [];
  };

  ngOnInit(): void {

  }
}