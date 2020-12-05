import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Tutorial } from '../models/tutorial.mode';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action';

export class TutorialStateModel {
    tutorials: Tutorial[] = [];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})
export class TutorialState {
    @Selector()
    static getTutorials(state: TutorialStateModel): Tutorial[] {
        return state.tutorials;
    }

    @Action(AddTutorial)
    add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial): void {
        const state: TutorialStateModel = getState();

        patchState({
            tutorials: [...state.tutorials, payload] as Tutorial[]
        });
    }

    @Action(RemoveTutorial)
    remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial): void {
        const filtered: Tutorial[] = getState().tutorials.filter(item => item.name !== payload);

        patchState({
            tutorials: filtered
        });
    }
}
