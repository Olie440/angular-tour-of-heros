import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  RequestMatch
} from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

describe('HeroService', () => {
  let httpMock: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });

    service = TestBed.get(HeroService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeros()', () => {
    const expectedRequest: RequestMatch = {
      method: 'GET',
      url: HeroService.heroesUrl
    };

    it('calls the API correctly', async () => {
      service.getHeroes().subscribe();
      httpMock.expectOne(expectedRequest);
      httpMock.verify();
    });

    it('returns the correct data ', async () => {
      service.getHeroes().subscribe((response) => {
        expect(response).toBe(HEROES);
      });

      httpMock.expectOne(expectedRequest).flush(HEROES);
    });
  });
});
