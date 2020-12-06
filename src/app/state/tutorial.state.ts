import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Tutorial } from '../models/tutorial.mode';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action';

export class TutorialStateModel {
    list: Tutorial[] = [];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        list: []
    }
})
export class TutorialState {
    @Selector()
    static getTutorials(state: TutorialStateModel): Tutorial[] {
        return state.list;
    }

    @Action(AddTutorial)
    add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial): void {
        const state: TutorialStateModel = getState();

        patchState({
            list: [...state.list, payload] as Tutorial[]
        });
    }

    @Action(RemoveTutorial)
    remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial): void {
        const filtered: Tutorial[] = getState().list.filter(item => item.name !== payload);

        patchState({
            list: filtered
        });
    }
}
