import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './Components/input/input.component';
import { CheckboxComponent } from './Components/checkbox/checkbox.component';
import { RadioComponent } from './Components/radio/radio.component';
import { SelectoptionComponent } from './Components/selectoption/selectoption.component';
import { TextareaComponent } from './Components/textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectoptionComponent,
    TextareaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
