import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'my-hero-detail',
  template:`

    <!-- *ngIf removes the hero detail from the DOM as long as hero isn't set! -->
    <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
        <label>name: </label>
        <!-- This input works as a two way binding! -->
        <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    </div>

    
  `
  
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
