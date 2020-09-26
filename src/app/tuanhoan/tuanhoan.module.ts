import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';
 
import { Routes, RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio'; 
import { NzAvatarModule, NzCardModule, NzGridModule, NzIconModule } from 'ng-zorro-antd';
import { TuanhoanComponent } from './tuanhoan.component';

const routes: Routes = [{ path: '', component: TuanhoanComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NzCarouselModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzRadioModule,
    NzAvatarModule, 
    NzCardModule,
    NzGridModule,
    NzIconModule ,
    NzCardModule
  ],
  declarations: [TuanhoanComponent],
  exports: [RouterModule],
})
export class TuanHoanModule {}
