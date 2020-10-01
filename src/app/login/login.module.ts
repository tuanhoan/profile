import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NzButtonModule, NzFormModule, NzInputModule, NzModalModule } from 'ng-zorro-antd';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 


const routes: Routes = [
    { path: '', component: LoginComponent },
  ];
  

@NgModule({
    imports: [ 
        RouterModule.forChild(routes), 
        CommonModule,
        NzFormModule,
        FormsModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzInputModule,
        NzModalModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [],
    providers: [],
})
export class LoginModule {}