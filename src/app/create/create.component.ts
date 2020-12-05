import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddTutorial } from '../actions/tutorial.action';
import { Tutorial } from '../models/tutorial.mode';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(
    private store: Store
  ) { }

  public addTutorial(name: string, url: string): void {
    const payload: Tutorial = { name, url };
    const action: AddTutorial = new AddTutorial(payload);

    this.store.dispatch(action);
  }
}
