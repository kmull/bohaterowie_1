import { HeroService } from './../services/hero.service';
import { HEROES } from './../shared/mock/mock-heroes';
import { Hero } from './../shared/model/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
