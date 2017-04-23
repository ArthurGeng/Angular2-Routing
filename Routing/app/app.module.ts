import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
