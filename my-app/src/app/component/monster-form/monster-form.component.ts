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
      name: 'Quái Vật Béo',
    },
    {
      id: 2,
      name: 'Quái Vật Gầy',
    },
    {
      id: 3,
      name: 'Quái Vật Thẩm Mỹ',
    },
    {
      id: 4,
      name: 'Quái Vật Làm Mũi',
    },
    {
      id: 5,
      name: 'Quái Vật Mèo',
    },
    {
      id: 6,
      name: 'Quái Vật Chuột',
    },
    {
      id: 7,
      name: 'Quái Vật Ba Đầu',
    },
    {
      id: 8,
      name: 'Quái Vật Hai Đầu',
    },
  ];
  constructor() {}
  ngOnInit(): void {}

  submitMonsterForm(event) {
    event.preventDefault();
    this.submitForm.emit(this.formObject);
  }

  addSkill2FormObject(item: Spell) {
    let index = this.formObject.spell.findIndex((i) => i.id == item.id);
    if (index == -1) {
      this.formObject.spell.push({ ...item });
    } else {
      this.formObject.spell = { ...this.formObject }.spell.filter(
        el => el.id != item.id
      );
    }
  }

  setCheckedCheckbox(item: Spell) {
    if (this.formObject.spell == undefined) {
      this.formObject.spell= [];
    }
    let index = this.formObject.spell.findIndex(i => i.id == item.id);
    return index != -1;
  }
}
