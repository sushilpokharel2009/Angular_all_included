import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newText: string;
  btn:string="Add text";
  itemCount:number;
  goal = [];

  constructor(private data:DataServiceService) { }

  ngOnInit() {
    this.data.y.subscribe(res => this.goal = res);
    this.itemCount = this.goal.length;
    this.data.changeMyGoal(this.goal);
  }
 
  addText(){
    this.goal.push(this.newText);
    this.newText = '';
    this.itemCount = this.goal.length;
    this.data.changeMyGoal(this.goal);
  }

  removeItem(i){
    this.goal.splice(i,1);
    this.data.changeMyGoal(this.goal);
  }
}
