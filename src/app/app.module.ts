import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailureDirective } from './comp-failure.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CompSuccessDirective, CompFailureDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
