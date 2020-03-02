import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  /*getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }*/

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
