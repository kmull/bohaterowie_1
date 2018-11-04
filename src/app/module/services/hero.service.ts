import { HEROES } from './../shared/mock/mock-heroes';
import { Hero } from './../shared/model/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Usługa HeroService: pobrano bohaterów');
    return of(HEROES);
  }
}
