import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UpdateComponent,
        ReadComponent
    ],
    exports: [
        UpdateComponent,
        ReadComponent
    ]
})
export class GirlModule { }
