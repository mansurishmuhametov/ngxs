import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.action';

import { Tutorial } from '../models/tutorial.mode';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {
  list$: Observable<Tutorial[]>;

  constructor(
    private readonly store: Store
  ) {
    this.list$ = this.store.select(state => state.tutorials.list);
  }

  deleteTutorial(name: string): void {
    this.store.dispatch(new RemoveTutorial(name));
  }
}
