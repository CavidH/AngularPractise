import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from "@angular/forms";
import {ShellComponent} from './shell/shell.component';
import {ExdirDirective} from './directives/exdir.directive';
import {BoldDirective} from './directives/bold.directive';
import {CustomIfDirective} from './directives/custom-if.directive';
import {CustomForDirective} from './directives/custom-for.directive';
import {CustomFor2Directive} from './directives/custom-for2.directive';
import {ParentComponent} from './patenrt_to_child/parent/parent.component';
import {ParentComponent as pc2} from './child_to_parent/parent/parent.component';
import {ChildComponent} from './patenrt_to_child/child/child.component';
import {ChildComponent as cc2} from './child_to_parent/child/child.component';
import { Child11Component } from './childToChild/child11/child11.component';
import { Child22Component } from './childToChild/child22/child22.component';
import { Parent33Component } from './childToChild/parent33/parent33.component';
import { LyfeCycleComponent } from './lyfe-cycle/lyfe-cycle.component';
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
    CustomForDirective,
    CustomFor2Directive,
    ParentComponent,
    ChildComponent,
    cc2,
    pc2,
    Child11Component,
    Child22Component,
    Parent33Component,
    LyfeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
