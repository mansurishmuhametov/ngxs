import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AddGirl, ChangeFilterAge } from '../actions/girl.actions';
import { IGirl } from '../models/girl';

const DEFAULTS: any = {
    list: [],
    filterAge: -1
};

export class GirlStateModel {
    list: IGirl[] = DEFAULTS.list;
    filterAge = DEFAULTS.filterAge;
}

@State<GirlStateModel>({
    name: 'girl',
    defaults: DEFAULTS
})
export class GirlState {
    @Selector()
    static list(state: GirlStateModel): IGirl[] {
        return state.list;
    }

    @Selector()
    static filterAge(state: GirlStateModel): number {
        return state.filterAge;
    }

    @Selector()
    static filterByAge(state: GirlStateModel): (age: number) => IGirl[] {
        return (age: number) => {
            if (age < 0) {
                return state.list;
            }

            return state.list.filter((girl: IGirl) => {
                return girl.age === age;
            });
        };
    }

    @Action(AddGirl)
    addGirl(context: StateContext<GirlStateModel>, action: AddGirl): void {
        const state: GirlStateModel = context.getState();

        context.patchState({
            ...state,
            list: [
                ...state.list,
                action.payload
            ]
        });
    }

    @Action(ChangeFilterAge)
    changeFilterAge(context: StateContext<GirlStateModel>, action: ChangeFilterAge): void {
        const state: GirlStateModel = context.getState();

        context.patchState({
            ...state,
            filterAge: action.payload
        });
    }
}
