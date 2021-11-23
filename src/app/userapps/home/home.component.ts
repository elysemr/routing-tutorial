import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objs: any[] = [
    {id: 1, title: "ABC", count: 3},
    {id: 5, title: "DEF", count: 55},
    {id: 365, title: "aaa", count: -400},
    {id: -14, title: "bbb", count: 32},
    {id: 3, title: "HIJ", count: -23},
    {id: 2, title: "KLM", count: 94},
    {id: 4, title: "NOP", count: -4}
  ];

  searchCriteria: string = "";

  aBool: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
