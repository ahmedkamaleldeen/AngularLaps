import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
cardlist=[1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
