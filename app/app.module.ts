import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './../app/interceptors/error.interceptor';
import { TokenInterceptor } from './../app/interceptors/token.interceptor';
import { fakeBackendProvider } from './Shared';
import { CustomMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridsterModule } from 'angular-gridster2';
import { ChartModule } from 'angular-highcharts';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstComponent } from './components/first/first.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { EmployeeheaderComponent } from './components/employeeheader/employeeheader.component';
import { GridsterComponent } from './components/gridster/gridster.component';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { PieComponent } from './components/pie/pie.component';
import { ColumnComponent } from './components/column/column.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { AreaComponent } from './components/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SidebarComponent,
    EmployeeheaderComponent,
    GridsterComponent,
    LineComponent,
    BarComponent,
    PieComponent,
    ColumnComponent,
    ScatterComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    ChartModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    MatSidenavContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
