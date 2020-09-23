import { COURSES } from './../mock-courses';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course = COURSES;
  selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

  onselect(course: Course):void{
    this.selectedCourse = course;
  }
}
