import { IGirl } from '../models/girl';

export class AddGirl {
    static readonly type = '[Girl] AddGirl';

    constructor(public payload: IGirl) {}
}

export class ChangeFilterAge {
    static readonly type = '[Girl] ChangeFilterAge';

    constructor(public payload: number) {}
}
