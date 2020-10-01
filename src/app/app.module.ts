import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en'; 
import { NgZorroAntdModule, NzBreadCrumbModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
 
import { AppCardModule } from './app-card/AppCardModule'; 
 
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzLayoutModule, 
    NzBreadCrumbModule, 
    NgZorroAntdModule,
    AppCardModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
