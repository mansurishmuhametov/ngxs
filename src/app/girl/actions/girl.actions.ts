import { IGirl } from '../models/girl';

export class AddGirl {
    static readonly type = '[Girl] Add';

    constructor(public payload: IGirl) {}
}
