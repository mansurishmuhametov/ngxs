import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, StateContext, Store } from '@ngxs/store';
import { combineLatest, Observable, of, timer } from 'rxjs';
import { distinctUntilChanged, filter, ignoreElements, map, share, switchMap, tap } from 'rxjs/operators';

import { IGirl } from '../../models/girl';
import { GirlState, GirlStateModel } from '../../state/girl.state';

@Component({
  selector: 'app-girl-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadComponent {
  public girlList$: Observable<IGirl[]>;
  public filterAge$: Observable<number>;
  public girlListFilteredByAge$: Observable<IGirl[]>;

  public isDestroy = false;

  constructor(
    private readonly store: Store
  ) {
    this.girlList$ = this.store
      .select<IGirl[]>(GirlState.list);

    this.filterAge$ = this.store
      .select<number>(GirlState.filterAge);

    this.girlListFilteredByAge$ = combineLatest([
      this.store.select<number>(GirlState.filterAge),
      this.store.select<(age: number) => IGirl[]>(GirlState.filterByAge)
    ])
      .pipe(
        map(([filterAge, filterFn]) => {
          return filterFn(filterAge);
        })
      );
  }
}
