import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { ShellComponent } from './shell/shell.component';
import { ExdirDirective } from './directives/exdir.directive';
import { BoldDirective } from './directives/bold.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomForDirective } from './directives/custom-for.directive';
//ng generate component Home
//ng g  c   Home
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShellComponent,
    ExdirDirective,
    BoldDirective,
    CustomIfDirective,
    CustomForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
