import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [
    {id : 1, description : 'learn to yoga'},
    {id : 2, description : 'Become an expert at Angular'},
    {id : 3, description : 'Visit India'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
