import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ChangeFilterAge } from '../../actions/girl.actions';
import { INPUT_DELAY } from '../../configuration/constants';
import { GirlState } from '../../state/girl.state';

@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterAgeComponent implements OnDestroy {
  public initialValue: number;

  private resetTimer$: Subject<boolean> = new Subject();

  constructor(
    private readonly store: Store
  ) {
    this.initialValue = this.store
      .selectSnapshot<number>(GirlState.filterAge);
  }

  ngOnDestroy(): void {
    this.resetTimer$.next(true);
    this.resetTimer$.complete();
  }

  public onChange(inputAge: string): void {
    const age: number = parseInt(inputAge, 10);

    this.resetTimer$.next(true);

    timer(INPUT_DELAY)
      .pipe(
        takeUntil(this.resetTimer$)
      )
      .subscribe(
        () => {
          const action: ChangeFilterAge = new ChangeFilterAge(age);

          this.store.dispatch(action);
        }
      );
  }
}
