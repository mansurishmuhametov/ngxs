import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddGirl } from '../../actions/girl.actions';
import { IGirl } from '../../models/girl';

@Component({
  selector: 'app-girl-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateComponent {
  constructor(
    private readonly store: Store
  ) { }

  public addGirl(name: string, inputAge: string): void {
    const age: number = parseInt(inputAge, 10);
    const girl: IGirl = { name, age };
    const action: AddGirl = new AddGirl(girl);

    this.store.dispatch(action);
  }
}
