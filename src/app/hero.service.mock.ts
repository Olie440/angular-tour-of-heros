import { of, Observable } from 'rxjs';
import { HEROES } from './mock-heroes';

export class MockHeroService {
  constructor() {}

  getHeroes() {
    return of(HEROES);
  }

  getHero() {
    return of(HEROES[0]);
  }
}
