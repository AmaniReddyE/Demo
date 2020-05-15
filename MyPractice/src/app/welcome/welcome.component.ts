import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
   name: any;
  // //varaible section -start
  // title = "welcome to hyd"
  // a="Apple"
  // b="banana"
  // c="camel"
  message="some welcome message"
  // name="welcome to our page"


  //varaible section -end
  constructor(private route:ActivatedRoute) {

   }
  ngOnInit() {
    console.log(this.message)
    console.log(this.route.snapshot.params['x'])
    this.name = " welcome to our page dear "+ this.route.snapshot.params['name']
  }
 
//   getWelcomeMessageWithParameter(){
//     this.a="fdg"
//     this.b="bsajfhdsj"
//     this.c="dnfbjkgr"
//   }
//   getReverChanges(){
//     this.message="do your business"
//   }
// }
}
