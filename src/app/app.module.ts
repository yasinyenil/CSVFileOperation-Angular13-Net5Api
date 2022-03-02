// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { UplaodServiceComponent } from './uplaod-service/uplaod-service.component';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';

// @NgModule({
//   declarations: [AppComponent, UplaodServiceComponent, NavMenuComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     RouterModule.forRoot([
//       { path: 'upload', component: UplaodServiceComponent },
//     ]),
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

const modules = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  // MatPaginator,
  // MatSort,
  // MatTableDataSource,
  // MatFormFieldModule,
  // MatInputModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
