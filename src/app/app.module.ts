import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { UsersModule } from './features/users/users.module';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './features/test/test.component';
import { CoursecardComponent } from './features/cards/coursecard/coursecard.component';
import { AllcoursesComponent } from './features/cards/allcourses/allcourses.component';
import { PaymentsComponent } from './features/userspecific/payments/payments.component';
import { MycoursesComponent } from './features/userspecific/mycourses/mycourses.component';
import { DetailedcourseComponent } from './features/cards/detailedcourse/detailedcourse.component'


import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MycoursecardComponent } from './features/cards/mycoursecard/mycoursecard.component';
import { HomeComponent } from './features/home/home.component';
import { SpinnerComponent } from './features/spinner/spinner.component';

import { AuthinterceptorComponent } from './core/interceptors/authinterceptor/authinterceptor.component';




@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    FooterComponent,
    TestComponent,
    CoursecardComponent,
    AllcoursesComponent,
    PaymentsComponent,
    MycoursesComponent,
    DetailedcourseComponent,
    MycoursecardComponent,
    HomeComponent,
    SpinnerComponent,
    
    AuthinterceptorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UsersModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
