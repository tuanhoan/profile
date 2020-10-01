import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NzAvatarModule, NzButtonModule, NzCardModule, NzIconModule } from 'ng-zorro-antd';
import { AppCardComponent } from './app-card.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    declarations: [
        AppCardComponent
    ],
    exports: [
        RouterModule,
        AppCardComponent
    ]
})
export class AppCardModule {
}
