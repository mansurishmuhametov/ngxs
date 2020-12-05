import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AddGirl } from '../actions/girl.actions';
import { IGirl } from '../models/girl';

export class GirlStateModel {
    list: IGirl[] = [];
}

@State<GirlStateModel>({
    name: 'girl',
    defaults: {
        list: []
    }
})
export class GirlState {
    @Action(AddGirl)
    add(context: StateContext<GirlStateModel>, action: AddGirl): void {
        const state: GirlStateModel = context.getState();

        context.patchState({
            list: [
                ...state.list,
                action.payload
            ]
        });
    }
}
