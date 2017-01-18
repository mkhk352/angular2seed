import {Component, Input} from '@angular/core';
import {Hero} from './hero';


@Component({
selector: 'my-hero-detail',
template: `<div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>Name:<input [(ngModel)]="hero.name" placeholder="Name"/></label></div>
  </div> 
`,
})
export class HeroDetailComponent{
    @Input()
 hero: Hero;
}
