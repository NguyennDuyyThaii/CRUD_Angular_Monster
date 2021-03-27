import { Component } from '@angular/core';
import {Monster} from "src/app/models/monster";
import {monster} from "src/app/mock-data/Monster";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD_MONSTER_APP';
  monsters: Array<Monster> = monster

  updateObject: Monster = {
    id: 0,
    name: "",
    image: "",
    detail: "",
    spell: []
  }
  deleteMonster(item: Monster){
    this.monsters = this.monsters.filter(i => i.id != item.id)
  }
  updateMonster(item: Monster){
    this.updateObject = {... item}
  }
  saveFormSubmit(data: Monster){
      let existed = this.monsters.findIndex(el=>el.id == data.id )
      if(existed == -1){
        this.monsters.push(data)
      }else{
        this.monsters[existed] = {...data}
      }
      this.updateObject = {
        id: 0,
        name: "",
        image: "",
        detail: "",
        spell: []
      }
  }
}
