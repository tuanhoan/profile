import { NgModule } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';
 
import { Routes, RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio'; 
import { NzAvatarModule, NzCardModule, NzGridModule, NzIconModule } from 'ng-zorro-antd'; 
import { AddCardComponent } from './add-card.component';

const routes: Routes = [{ path: '', component: AddCardComponent }];

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
  declarations: [AddCardComponent],
  exports: [RouterModule],
})
export class AddCardModule {}
