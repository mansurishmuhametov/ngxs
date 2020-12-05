import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.action';

import { Tutorial } from '../models/tutorial.mode';
import { TutorialState } from '../state/tutorial.state';

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
    this.list$ = this.store.select(state => state.list.list);
  }

  deleteTutorial(name: string): void {
    this.store.dispatch(new RemoveTutorial(name));
  }
}
