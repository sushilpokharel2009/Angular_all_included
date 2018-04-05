import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {DataServiceService} from '../../data-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goalNew:any;
  constructor(private router:Router, private data:DataServiceService) { }

  ngOnInit() {
    this.data.y.subscribe(res => this.goalNew = res);

  }
  sendHome(){
    this.router.navigate(['']);
  }


}
