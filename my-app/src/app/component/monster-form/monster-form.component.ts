import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { monster } from 'src/app/mock-data/Monster';
import { Spell } from 'src/app/models/spell';
@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.css'],
})
export class MonsterFormComponent implements OnInit {
  @Input() formObject: Monster;
  @Output() submitForm = new EventEmitter<Monster>();
  //monsters: Array<Monster> = monster;
  listSpells: Array<Spell> = [
    {
      id: 1,
      name: 'Ngủ',
    },
    {
      id: 2,
      name: 'Nuốt đồ vật',
    },
    {
      id: 3,
      name: 'Phun nọc độc',
    },
    {
      id: 4,
      name: 'Phun nước',
    },
    {
      id: 5,
      name: 'Bay',
    },
    {
      id: 6,
      name: 'Tăng tốc',
    },
    {
      id: 7,
      name: 'Biến hình',
    },
    {
      id: 8,
      name: 'Tàn hình',
    },
  ];
  constructor() {}
  ngOnInit(): void {}

  submitMonsterForm(event) {
    event.preventDefault();
    this.submitForm.emit(this.formObject);
  }

  addSkill2FormObject(item: Spell, event) {
    if(event.target.checked == true){
      let index = this.formObject.spell.findIndex((i) => i.id == item.id);
      if (index == -1) {
      this.formObject.spell.push(item);
        }
    }else {
      this.formObject.spell.splice(this.formObject.spell.findIndex(i => {
        i.id != item.id
      }))
    }
  }

  setCheckedCheckbox(item: Spell) {
    if (this.formObject.spell == undefined) {
      this.formObject.spell = [];
    }
    let index = this.formObject.spell.findIndex((i) => i.id == item.id);
    return index != -1;
  }
}
