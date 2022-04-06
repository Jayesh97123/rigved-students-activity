import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StudentRecordActivityComponent } from './student-record-activity/student-record-activity.component';
import { ProductInfoActivityComponent } from './product-info-activity/product-info-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    StudentRecordActivityComponent,
    ProductInfoActivityComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
