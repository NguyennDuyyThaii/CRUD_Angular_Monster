import { Component, OnInit, Input,
  Output, EventEmitter } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {
  
  @Input() monsterData: Monster
  @Output() delete = new EventEmitter<Monster>();
  @Output() updateEvent = new EventEmitter<Monster>();
  constructor() { }

  ngOnInit(): void {
  }
  updateMonster(){
    this.updateEvent.emit(this.monsterData)
  }
  deleteMonster(){
    let conf = confirm(`Bạn có chắc muốn xoá ${this.monsterData.name} khỏi danh sách không?`)
    if(conf){
      this.delete.emit(this.monsterData)
    }
  }
}
