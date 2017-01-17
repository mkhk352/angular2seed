import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{userName}}</h1>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>Name:<input value="{{hero.name}}" placeholder="Name"/></label>{{hero.name}}</div>`,
})
export class AppComponent  {
    userName = 'Habib';
   
   hero ={
     name: 'Batman',
     id: 1
   }; 
  }
