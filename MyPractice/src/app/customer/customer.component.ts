import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  message="read instructions carefully"
  value=""
  constructor() { }

  ngOnInit() {
  }
  get(){
    this.value="send your data"
  }


}
