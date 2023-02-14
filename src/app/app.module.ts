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
import {ParentComponent as pc2} from './patenrt_to_child/parent/parent.component';
import {ParentComponent} from './child_to_parent/parent/parent.component';
import {ChildComponent} from './patenrt_to_child/child/child.component';
import {ChildComponent as cc2} from './child_to_parent/child/child.component';
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
    pc2
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
