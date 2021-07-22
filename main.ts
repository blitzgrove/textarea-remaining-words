import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputAutosizeTextareaExample} from './app/input-autosize-textarea-example';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [InputAutosizeTextareaExample],
  declarations: [InputAutosizeTextareaExample],
  bootstrap: [InputAutosizeTextareaExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
