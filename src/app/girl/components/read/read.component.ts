import { Component, OnInit } from '@angular/core';
import { Select, StateContext, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { IGirl } from '../../models/girl';
import { GirlState } from '../../state/girl.state';

@Component({
  selector: 'app-girl-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {
  public girlList$: Observable<IGirl[]>;

  constructor(
    private readonly store: Store
  ) {
    this.girlList$ = this.store.select<IGirl[]>(state => state.girl.list);
  }
}
