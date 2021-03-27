import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MonsterFormComponent } from './component/monster-form/monster-form.component';
import { MonsterListComponent } from './component/monster-list/monster-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterFormComponent,
    MonsterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
