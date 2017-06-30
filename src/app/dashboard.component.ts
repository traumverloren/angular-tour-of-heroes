import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  // get top 3 heroes on initial page render
  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,3));
    }
}
