import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { GirlState } from './state/girl.state';
import { FilterAgeComponent } from './components/filter-age/filter-age.component';

@NgModule({
    imports: [
        CommonModule,
        NgxsModule.forFeature([
          GirlState
        ])
    ],
    declarations: [
        UpdateComponent,
        ReadComponent,
        FilterAgeComponent
    ],
    exports: [
        UpdateComponent,
        ReadComponent,
        FilterAgeComponent
    ]
})
export class GirlModule { }
