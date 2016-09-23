import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <!-- One way Binding of the title property, defined in the AppComponent Class! -->
    <h1>{{title}}</h1>

    <!-- *ngIf removes the hero detail from the DOM as long as selectedHero isn't set! -->
    <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
        <label>name: </label>
        <!-- This input works as a two way binding! -->
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
    </div>

    
        <h2>My Heroes</h2>
        <ul class="heroes">

        <!-- The quoted text assigned to ngFor means “take each hero in the heroes array, 
        store it in the local hero variable, and make it available to the corresponding template instance”. 
        / The let keyword before "hero" defines hero as a template input variable -->

            <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>

        </ul>
    `,

    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})



export class AppComponent {
    title = 'Tour of Heroes';

    heroes = HEROES;

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


